const assetFields = [
  { objectName: 'id', fieldName: 'id' },
  { objectName: 'dateCreated', fieldName: 'dateCreated' },
  { objectName: 'userCreated', fieldName: 'userCreated' },
  { objectName: 'dateChanged', fieldName: 'dateChanged' },
  { objectName: 'userChanged', fieldName: 'userChanged' },
  { objectName: 'type', fieldName: 'typeID' },
  { objectName: 'serial', fieldName: 'serial' },
  { objectName: 'name', fieldName: 'name' },
  { objectName: 'status', fieldName: 'statusID' }];

const assetStatuses = [
  {
    id: 'A',
    name: 'Aktiv',
  }, {
    id: 'I',
    name: 'Inaktiv',
  },
];

const assetTypes = [
  {
    id: 'PC',
    name: 'PC',
  }, {
    id: 'KOP',
    name: 'Kopierer',
  }, {
    id: 'MON',
    name: 'Monitor',
  }, {
    id: 'DRU',
    name: 'Drucker',
  }, {
    id: 'LAP',
    name: 'Laptop',
  }, {
    id: 'HDY',
    name: 'Handy',
  }, {
    id: 'AUT',
    name: 'Auto',
  },
];

function convertAsset(asset, prefix) {
  const usedPrefix = prefix || '';
  const converted = {
    id: asset[`${usedPrefix}id`],
    dateCreated: asset[`${usedPrefix}dateCreated`],
    userCreated: asset[`${usedPrefix}userCreated`],
    dateChanged: asset[`${usedPrefix}dateChanged`],
    userChanged: asset[`${usedPrefix}userChanged`],
    name: asset[`${usedPrefix}name`],
    type: assetTypes.find(x => x.id === asset[`${usedPrefix}typeID`]).name,
    serial: asset[`${usedPrefix}serial`],
    status: assetStatuses.find(x => x.id === asset[`${usedPrefix}statusID`]).name,
  };

  return converted;
}

module.exports = {
  assetStatuses,
  assetTypes,
  assetFields,
  convertAsset,
};
