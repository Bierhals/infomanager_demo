const dbContext = require('../db/dbContext');
const {
  assetStatuses,
  assetTypes,
  assetFields,
  convertAsset,
} = require('./assetHelper');
const {
  convertCustomer,
  convertCustomerAsset,
  customerAssetFields,
} = require('./customerHelper');
const { addQuerySortAndLimits } = require('./repositoryHelper');

export async function getAssets(limit, offset, sort) {
  const query = dbContext.from('im_asset');
  const totalCount = await query.clone().count();
  addQuerySortAndLimits(query, limit, offset, sort, assetFields, [{ search: 'status', text: 'statusID' }, { search: 'type', text: 'typeID' }]);

  let data = await query.select();
  data = data.map(row => convertAsset(row));

  return { totalCount: totalCount[0]['count(*)'], items: data };
}

export async function getAsset(id) {
  const query = dbContext.select().from('im_asset').where('id', id);
  const data = await query;

  if (data.length !== 1) {
    return null;
  }

  return convertAsset(data[0]);
}

export async function getAssetCustomers(limit, offset, sort, assetID, onlyValid) {
  const query = dbContext.from('im_customer_asset')
    .innerJoin('im_customer', 'im_customer_asset.customerID', 'im_customer.id')
    .where('assetID', assetID);

  if (onlyValid) {
    query.whereNull('validTo');
  }

  const totalCount = await query.clone().count();
  addQuerySortAndLimits(query, limit, offset, sort, customerAssetFields, [{ search: 'asset.', text: 'a_' }, { search: 'status', text: 'statusID' }]);

  let data = await query.select([
    'im_customer_asset.*',
    'im_customer.id as c_id',
    'im_customer.dateCreated as c_dateCreated',
    'im_customer.dateChanged as c_dateChanged',
    'im_customer.userCreated as c_userCreated',
    'im_customer.userChanged as c_userChanged',
    'im_customer.name as c_name',
    'im_customer.statusID as c_statusID',
    'im_customer.street as c_street',
    'im_customer.city as c_city',
    'im_customer.postalCode as c_postalCode',
    'im_customer.state as c_state',
    'im_customer.country as c_country',
    'im_customer.phone as c_phone',
    'im_customer.email as c_email',
  ]);
  data = data.map((x) => {
    const customerAsset = {
      ...convertCustomerAsset(x),
      _embedded: {
        customer: convertCustomer(x, 'c_'),
      },
    };
    return customerAsset;
  });

  return { totalCount: totalCount[0]['count(*)'], items: data };
}

export async function updateAsset(id, asset) {
  await dbContext.transaction(async (trx) => {
    const rowCount = await trx.update({
      dateChanged: new Date().toISOString(),
      userChanged: 1,
      name: asset.name,
      serial: asset.serial,
      typeID: assetTypes.find(x => x.name === asset.type).id,
      statusID: assetStatuses.find(x => x.name === asset.status).id,
    })
      .into('im_asset')
      .where('id', id);

    if (rowCount !== 1) {
      const error = new Error('Es wurden mehr oder weniger als eine Zeile aktualisiert');
      error.code = 'UPDATE_NOT_UNIQUE';
      throw error;
    }
  });

  const updatedCustomer = await getAsset(id);

  return updatedCustomer;
}

export async function createAsset(asset) {
  const newAsset = asset;
  newAsset.dateCreated = new Date().toISOString();
  newAsset.userCreated = 1;
  newAsset.dateChanged = asset.dateCreated;
  newAsset.userChanged = asset.userCreated;
  const query = dbContext('im_asset')
    .insert({
      dateCreated: newAsset.dateCreated,
      userCreated: newAsset.userCreated,
      dateChanged: newAsset.dateChanged,
      userChanged: newAsset.userChanged,
      name: newAsset.name,
      serial: newAsset.serial,
      typeID: assetTypes.find(x => x.name === newAsset.type).id,
      statusID: assetStatuses.find(x => x.name === newAsset.status).id,
    });
  const newId = await query;

  [newAsset.id] = newId;

  return newAsset;
}