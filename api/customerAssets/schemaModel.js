const customerAssetSchema = {
  type: 'object',
  description: 'Asset-Kunden-Zuordnung',
  properties: {
    id: {
      type: 'integer',
      readOnly: true,
      description: 'Eindeutige ID des Eintrages',
    },
    dateCreated: {
      type: 'string',
      format: 'date-time',
      readOnly: true,
      description: 'Zeitstempel der Erstellung',
    },
    userCreated: {
      type: 'integer',
      readOnly: true,
      description: 'ID des Benutzers, welcher den Eintrag erstellt hat',
    },
    dateChanged: {
      type: 'string',
      format: 'date-time',
      readOnly: true,
      description: 'Zeitstempel der letzten Änderung',
    },
    userChanged: {
      type: 'integer',
      readOnly: true,
      description: 'ID des Benutzers, welche den Eintrag zuletzt geändert hat',
    },
    customerID: {
      type: 'integer',
      description: 'Kunden-ID',
    },
    assetID: {
      type: 'integer',
      description: 'Asset-ID',
    },
    validFrom: {
      type: 'string',
      format: 'date',
      description: 'Gültig ab',
    },
    validTo: {
      type: ['string', 'null'],
      format: 'date',
      description: 'Gültig bis',
    },
  },
  required: ['customerID', 'assetID', 'validFrom'],
};

module.exports = {
  customerAssetSchema,
};
