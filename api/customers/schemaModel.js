const customerStatusSchema = {
  description: 'Kundenstatus',
  type: 'string',
  enum: ['Aktiv', 'Inaktiv'],
};

const customerSchema = {
  type: 'object',
  description: 'Kunde',
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
    name: {
      type: 'string',
      minLength: 3,
      maxLength: 50,
      description: 'Eindeutiger Benutzername',
    },
    address: {
      type: 'object',
      description: 'Adresse des Kunden',
      properties: {
        street: {
          type: 'string',
          maxLength: 100,
          description: 'Straße inkl. Hausnummer',
        },
        city: {
          type: 'string',
          maxLength: 50,
          description: 'Stadt/ Ort',
        },
        postalCode: {
          type: 'string',
          maxLength: 20,
          description: 'Postleitzahl',
        },
        state: {
          type: 'string',
          maxLength: 50,
          description: 'Bundesland',
        },
        country: {
          type: 'string',
          maxLength: 50,
          description: 'Land',
        },
        email: {
          type: 'string',
          maxLength: 50,
          format: 'email',
          description: 'E-Mail-Adresse',
        },
      },
    },
    status: customerStatusSchema,
  },
  required: ['name', 'status'],
};

module.exports = {
  customerStatusSchema,
  customerSchema,
};
