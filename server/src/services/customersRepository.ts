import { dbContext } from '../db/dbContext';
import { Customer } from '../db/models/customer';
import {
  customerStatuses,
  customerFields,
  customerAssetFields,
  convertCustomer,
  convertCustomerAsset,
} from './customerHelper';
const { convertAsset, assetFields } = require('./assetHelper');
import { addQuerySortAndLimits } from './repositoryHelper';

export async function getCustomerAssets(limit, offset, sort, customer, asset, onlyValid, embed) {
  const query = dbContext.from('im_customer_asset');
  let selectFields = customerAssetFields.map(f => ({ objectName: `${f.objectName}`, fieldName: `ca_${f.fieldName}`, fieldWithTable: `im_customer_asset.${f.fieldName}` }));
  let embedArray = [];

  if (customer) {
    if (Number.isInteger(customer)) {
      query.where('customerID', customer);
    } else {
      query.whereIn('im_customer_asset.customerID', customer);
    }
  }

  if (asset) {
    if (Number.isInteger(asset)) {
      query.where('assetID', asset);
    } else {
      query.whereIn('im_customer_asset.assetID', asset);
    }
  }

  if (onlyValid) {
    // eslint-disable-next-line func-names
    query.andWhere(function () {
      this.whereNull('validTo');
      this.orWhere('validTo', '>', new Date().toISOString());
    });
  }

  const totalCount = await query.clone().count();

  if (embed) {
    embedArray = embed.split(',');
    embedArray.forEach((item) => {
      switch (item) {
        case 'customer':
          query.innerJoin('im_customer', 'im_customer_asset.customerID', 'im_customer.id');
          selectFields = selectFields.concat(customerFields.map(f => ({ objectName: `customer.${f.objectName}`, fieldName: `c_${f.fieldName}`, fieldWithTable: `im_customer.${f.fieldName}` })));
          break;
        case 'asset':
          query.innerJoin('im_asset', 'im_customer_asset.assetID', 'im_asset.id');
          selectFields = selectFields.concat(assetFields.map(f => ({ objectName: `asset.${f.objectName}`, fieldName: `a_${f.fieldName}`, fieldWithTable: `im_asset.${f.fieldName}` })));
          break;
        default:
          throw new Error(`Unknown embed ${item}`);
      }
    });
  }

  addQuerySortAndLimits(query, limit, offset, sort, selectFields);

  let data = await query.select(selectFields.map(f => (f.fieldWithTable ? `${f.fieldWithTable} as ${f.fieldName}` : f.fieldName)));
  data = data.map((row) => {
    const customerAsset = convertCustomerAsset(row, 'ca_');
    if (embed) {
      customerAsset._embedded = {};
      if (embedArray.includes('customer')) {
        customerAsset._embedded.customer = convertCustomer(row, 'c_');
      }
      if (embedArray.includes('asset')) {
        customerAsset._embedded.asset = convertAsset(row, 'a_');
      }
    }
    return customerAsset;
  });

  return { totalCount: totalCount[0]['count(*)'], items: data };
}

export async function getCustomers(limit: number, offset: number, sort: string, search: string, embed: string) {
  const query = dbContext.from('im_customer');
  const selectFields = customerFields;
  let embedArray = [];

  if (search) {
    query
      .where('name', 'like', `%${search}%`)
      .orWhere('street', 'like', `%${search}%`)
      .orWhere('city', 'like', `%${search}%`)
      .orWhere('postalCode', 'like', `%${search}%`)
      .orWhere('state', 'like', `%${search}%`)
      .orWhere('email', 'like', `%${search}%`);

    const status = customerStatuses.find(x => x.name === search);
    if (status) {
      query.orWhere('statusID', status.id);
    }
  }

  const totalCount = await query.clone().count();
  addQuerySortAndLimits(query, limit, offset, sort, selectFields);

  let data = await query.select<Customer[]>();
  data = data.map(row => convertCustomer(row));

  if (embed) {
    embedArray = embed.split(',');
    await Promise.all(embedArray.map(async (item) => {
      switch (item) {
        case 'assignedAssets':
          // eslint-disable-next-line no-case-declarations
          const dataAssets = await getCustomerAssets(null, null, 'id', query.clone().select('id'), null, true, 'asset');
          data.forEach((customer) => {
            // eslint-disable-next-line no-param-reassign
            customer._embedded = {
              assignedAssets: dataAssets.items.filter(asset => asset.customerID === customer.id),
            };
          });
          break;
        default:
          throw new Error(`Unknown embed ${item}`);
      }
    }));
  }

  return { totalCount: totalCount[0]['count(*)'], items: data };
}

async function getCustomer(id) {
  const query = dbContext.select().from('im_customer').where('id', id);
  const data = await query;

  if (data.length !== 1) {
    return null;
  }

  return convertCustomer(data[0]);
}

async function getCustomerAsset(id, embed) {
  const query = dbContext.from('im_customer_asset')
    .where('im_customer_asset.id', id);
  let selectFields = customerAssetFields.map(f => ({ objectName: `${f.objectName}`, fieldName: `ca_${f.fieldName}`, fieldWithTable: `im_customer_asset.${f.fieldName}` }));
  let embedArray = [];

  if (embed) {
    embedArray = embed.split(',');
    embedArray.forEach((item) => {
      switch (item) {
        case 'customer':
          query.innerJoin('im_customer', 'im_customer_asset.customerID', 'im_customer.id');
          selectFields = selectFields.concat(customerFields.map(f => ({ objectName: `customer.${f.objectName}`, fieldName: `c_${f.fieldName}`, fieldWithTable: `im_customer.${f.fieldName}` })));
          break;
        case 'asset':
          query.innerJoin('im_asset', 'im_customer_asset.assetID', 'im_asset.id');
          selectFields = selectFields.concat(assetFields.map(f => ({ objectName: `asset.${f.objectName}`, fieldName: `a_${f.fieldName}`, fieldWithTable: `im_asset.${f.fieldName}` })));
          break;
        default:
          throw new Error(`Unknown embed ${item}`);
      }
    });
  }

  const data = await query.select(selectFields.map(f => (f.fieldWithTable ? `${f.fieldWithTable} as ${f.fieldName}` : f.fieldName)));

  if (data.length !== 1) {
    return null;
  }

  const customerAsset = convertCustomerAsset(data[0], 'ca_');
  if (embed) {
    customerAsset._embedded = {};
    if (embedArray.includes('customer')) {
      customerAsset._embedded.customer = convertCustomer(data[0], 'c_');
    }
    if (embedArray.includes('asset')) {
      customerAsset._embedded.asset = convertAsset(data[0], 'a_');
    }
  }

  return customerAsset;
}

async function updateCustomer(id, cust) {
  await dbContext.transaction(async (trx) => {
    const rowCount = await trx.update({
      dateChanged: new Date().toISOString(),
      userChanged: 1,
      name: cust.name,
      street: cust.address.street || null,
      city: cust.address.city || null,
      postalCode: cust.address.postalCode || null,
      state: cust.address.state || null,
      country: cust.address.country || null,
      email: cust.address.email || null,
      statusID: customerStatuses.find(x => x.name === cust.status).id,
    })
      .into('im_customer')
      .where('id', id);

    if (rowCount !== 1) {
      const error = new Error('Es wurden mehr oder weniger als eine Zeile aktualisiert');
      error.code = 'UPDATE_NOT_UNIQUE';
      throw error;
    }
  });

  const updatedCustomer = await getCustomer(id);

  return updatedCustomer;
}

async function updateCustomerAsset(id, custAsset) {
  await dbContext.transaction(async (trx) => {
    const rowCount = await trx.update({
      dateChanged: new Date().toISOString(),
      userChanged: 1,
      customerID: custAsset.customerID,
      assetID: custAsset.assetID,
      validFrom: custAsset.validFrom,
      validTo: custAsset.validTo || null,
    })
      .into('im_customer_asset')
      .where('id', id);

    if (rowCount !== 1) {
      const error = new Error('Es wurden mehr oder weniger als eine Zeile aktualisiert');
      error.code = 'UPDATE_NOT_UNIQUE';
      throw error;
    }
  });

  const updatedCustomerAsset = await getCustomerAsset(id);

  return updatedCustomerAsset;
}

async function createCustomer(cust) {
  const newCustomer = cust;
  newCustomer.dateCreated = new Date().toISOString();
  newCustomer.userCreated = 1;
  newCustomer.dateChanged = newCustomer.dateCreated;
  newCustomer.userChanged = newCustomer.userCreated;
  const query = dbContext('im_customer')
    .insert({
      dateCreated: newCustomer.dateCreated,
      userCreated: newCustomer.userCreated,
      dateChanged: newCustomer.dateChanged,
      userChanged: newCustomer.userChanged,
      name: newCustomer.name,
      street: newCustomer.address.street || null,
      city: newCustomer.address.city || null,
      postalCode: newCustomer.address.postalCode || null,
      state: newCustomer.address.state || null,
      country: newCustomer.address.country || null,
      email: newCustomer.address.email || null,
      statusID: customerStatuses.find(x => x.name === cust.status).id,
    });
  const newId = await query;

  [newCustomer.id] = newId;

  return newCustomer;
}

async function createCustomerAsset(custAsset) {
  let newCustomerAsset = custAsset;
  newCustomerAsset.dateCreated = new Date().toISOString();
  newCustomerAsset.userCreated = 1;
  newCustomerAsset.dateChanged = newCustomerAsset.dateCreated;
  newCustomerAsset.userChanged = newCustomerAsset.userCreated;
  const query = dbContext('im_customer_asset')
    .insert({
      dateCreated: newCustomerAsset.dateCreated,
      userCreated: newCustomerAsset.userCreated,
      dateChanged: newCustomerAsset.dateChanged,
      userChanged: newCustomerAsset.userChanged,
      customerID: newCustomerAsset.customerID,
      assetID: newCustomerAsset.assetID,
      validFrom: newCustomerAsset.validFrom,
      validTo: newCustomerAsset.validTo || null,
    });
  const newId = await query;

  newCustomerAsset = await getCustomerAsset(newId.id);

  return newCustomerAsset;
}

module.exports = {
  getCustomers,
  getCustomer,
  updateCustomer,
  createCustomer,
  getCustomerAssets,
  getCustomerAsset,
  updateCustomerAsset,
  createCustomerAsset,
};
