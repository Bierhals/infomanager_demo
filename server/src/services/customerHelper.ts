export const customerFields = [
  { objectName: 'id', fieldName: 'id' },
  { objectName: 'dateCreated', fieldName: 'dateCreated' },
  { objectName: 'userCreated', fieldName: 'userCreated' },
  { objectName: 'dateChanged', fieldName: 'dateChanged' },
  { objectName: 'userChanged', fieldName: 'userChanged' },
  { objectName: 'name', fieldName: 'name' },
  { objectName: 'address.street', fieldName: 'street' },
  { objectName: 'address.city', fieldName: 'city' },
  { objectName: 'address.postalCode', fieldName: 'postalCode' },
  { objectName: 'address.state', fieldName: 'state' },
  { objectName: 'address.country', fieldName: 'country' },
  { objectName: 'address.email', fieldName: 'email' },
  { objectName: 'status', fieldName: 'statusID' }];

export const customerAssetFields = [
  { objectName: 'id', fieldName: 'id' },
  { objectName: 'dateCreated', fieldName: 'dateCreated' },
  { objectName: 'userCreated', fieldName: 'userCreated' },
  { objectName: 'dateChanged', fieldName: 'dateChanged' },
  { objectName: 'userChanged', fieldName: 'userChanged' },
  { objectName: 'customerID', fieldName: 'customerID' },
  { objectName: 'assetID', fieldName: 'assetID' },
  { objectName: 'validFrom', fieldName: 'validFrom' },
  { objectName: 'validTo', fieldName: 'validTo' }];

export const customerStatuses = [
  {
    id: 'A',
    name: 'Aktiv',
  }, {
    id: 'I',
    name: 'Inaktiv',
  },
];

export function convertCustomer(cust: any, prefix?: string) {
  const usedPrefix = prefix || '';
  const converted: any = {
    id: cust[`${usedPrefix}id`],
    dateCreated: cust[`${usedPrefix}dateCreated`],
    userCreated: cust[`${usedPrefix}userCreated`],
    dateChanged: cust[`${usedPrefix}dateChanged`],
    userChanged: cust[`${usedPrefix}userChanged`],
    name: cust[`${usedPrefix}name`],
    address: {
      street: cust[`${usedPrefix}street`],
      city: cust[`${usedPrefix}city`],
      postalCode: cust[`${usedPrefix}postalCode`],
      state: cust[`${usedPrefix}state`],
      country: cust[`${usedPrefix}country`],
      email: cust[`${usedPrefix}email`],
    },
    status: customerStatuses.find((x) => x.id === cust[`${usedPrefix}statusID`])?.name,
  };

  return converted;
}

export function convertCustomerAsset(customerAsset: any, prefix?: string) {
  const usedPrefix = prefix || '';
  const converted: any = {
    id: customerAsset[`${usedPrefix}id`],
    dateCreated: customerAsset[`${usedPrefix}dateCreated`],
    userCreated: customerAsset[`${usedPrefix}userCreated`],
    dateChanged: customerAsset[`${usedPrefix}dateChanged`],
    userChanged: customerAsset[`${usedPrefix}userChanged`],
    customerID: customerAsset[`${usedPrefix}customerID`],
    assetID: customerAsset[`${usedPrefix}assetID`],
    validFrom: customerAsset[`${usedPrefix}validFrom`],
    validTo: customerAsset[`${usedPrefix}validTo`],
  };

  return converted;
}
