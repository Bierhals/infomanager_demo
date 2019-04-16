const generalErrorSchema = {
  type: 'object',
  description: 'Fehler',
  properties: {
    statusCode: {
      type: 'string',
      description: 'Fehlercode',
    },
    error: {
      type: 'string',
      description: 'Kurzbezeichnung',
    },
    message: {
      type: 'string',
      description: 'Detailierte Fehlermeldung',
    },
  },
};

const defaultListQueryString = {
  offset: {
    type: 'integer',
    description: 'Anzahl der Einträge die übersprungen werden sollen',
    minimum: 0,
    default: 0,
  },
  limit: {
    type: 'integer',
    description: 'Maximale Anzahl von Einträge in der Ergebnisliste',
    minimum: 1,
    maximum: 100,
    default: 20,
  },
  sort: {
    type: 'string',
    description: 'Sortierreihenfolge. Um mehrere Felder für die Sortierung anzugeben, müssen die einzelnen Felder durch ein Komma getrennt werden (z.B. sort=+feld1,-feld2). Wenn dem Feldnamen ein Minuszeichen vorangestellt wird, dann wird diese Feld absteigend sortiert.',
    default: 'id',
  },
};

const defaultListMetadata = {
  offset: {
    type: 'integer',
    description: 'Anzahl der Einträge, die übersprungen wurden',
  },
  limit: {
    type: 'integer',
    description: 'Maximale Anzahl von Einträge in der Ergebnisliste',
  },
  totalCount: {
    type: 'integer',
    description: 'Gesamtzahl aller Einträge',
  },
  sort: {
    type: 'string',
    description: 'Sortierreihenfolge',
  },
};

module.exports = {
  generalErrorSchema,
  defaultListQueryString,
  defaultListMetadata,
};
