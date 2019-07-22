const assetStatusSchema = {
  description: 'Assetstatus',
  type: 'string',
  enum: ['Aktiv', 'Inaktiv'],
};

const assetTypeSchema = {
  description: 'Assettyp',
  type: 'string',
  enum: ['Handy', 'PC', 'Drucker', 'Monitor', 'Auto', 'Laptop'],
};

const assetSchema = {
  type: 'object',
  description: 'Asset',
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
    type: assetTypeSchema,
    serial: {
      type: 'string',
      minLength: 3,
      maxLength: 50,
      description: 'Eindeutige Seriennummer',
    },
    name: {
      type: 'string',
      minLength: 3,
      maxLength: 50,
      description: 'Name',
    },
    status: assetStatusSchema,
  },
  required: ['name', 'status', 'type', 'serial'],
};

module.exports = {
  assetStatusSchema,
  assetTypesSchema: assetTypeSchema,
  assetSchema,
};
