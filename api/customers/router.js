const {
  generalErrorSchema,
  defaultListQueryString,
  defaultListMetadata,
} = require('../home/schemaModel');
const customersController = require('./controller');
const {
  customerSchema,
} = require('./schemaModel');
const {
  customerAssetSchema,
} = require('../customerAssets/schemaModel');
const { assetSchema } = require('../assets/schemaModel');


const getCustomersRoute = {
  method: 'GET',
  url: '/customers',
  schema: {
    description: 'Auflistung der Kundendaten anhand der übergebenen Suchparameter',
    summary: 'Liste mit Kunden',
    tags: ['customers'],
    querystring: {
      ...defaultListQueryString,
      search: {
        type: 'string',
        description: 'Filter zum Eingrenzen der Ergebnismenge',
      },
      embed: {
        type: 'string',
        description: 'Enthaltene Unterobjekte. Um mehrere Unterobjecte anzugeben, müssen diese durch ein Komma getrennt werden (z.B. assets, issues)',
        enum: ['assignedAssets'],
      },
    },
    response: {
      200: {
        type: 'object',
        description: 'OK',
        properties: {
          ...defaultListMetadata,
          search: {
            type: 'string',
            description: 'Filter zum Eingrenzen der Ergebnismenge',
          },
          items: {
            type: 'array',
            description: 'Ergebnisliste',
            items: {
              ...customerSchema,
              properties: {
                ...customerSchema.properties,
                _embedded: {
                  type: 'object',
                  description: 'Zusätzlich eingebunde Elemente',
                  properties: {
                    assignedAssets: {
                      type: 'array',
                      description: 'Zugeordnete Assets',
                      items: {
                        ...customerAssetSchema,
                        properties: {
                          ...customerAssetSchema.properties,
                          _embedded: {
                            type: 'object',
                            description: 'Zusätzlich eingebunde Elemente',
                            properties: {
                              asset: assetSchema,
                            },
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
      400: generalErrorSchema,
    },
  },
  handler: customersController.getCustomers,
};

const getCustomerRoute = {
  method: 'GET',
  url: '/customers/:id',
  schema: {
    description: 'Zeigt die Daten eines Kunden an',
    summary: 'Kunde anzeigen',
    tags: ['customers'],
    params: {
      id: { type: 'integer', exclusiveMinimum: 0, description: 'Kunden-ID' },
    },
    querystring: {
      embed: {
        type: 'string',
        description: 'Enthaltene Unterobjekte. Um mehrere Unterobjecte anzugeben, müssen diese durch ein Komma getrennt werden (z.B. Referenz1,Referenz2)',
      },
    },
    response: {
      200: {
        ...customerSchema,
        properties: {
          ...customerSchema.properties,
          _embedded: {
            type: 'object',
            description: 'Zusätzlich eingebunde Elemente',
            properties: {
              assignedAssets: {
                type: 'array',
                description: 'Zugeordnete Assets',
                items: {
                  ...customerAssetSchema,
                  properties: {
                    ...customerAssetSchema.properties,
                    _embedded: {
                      type: 'object',
                      description: 'Zusätzlich eingebunde Elemente',
                      properties: {
                        asset: assetSchema,
                      },
                    },
                  },
                },
              },
            },
          },
        },
        description: 'OK',
      },
      400: generalErrorSchema,
    },
  },
  handler: customersController.getCustomer,
};

const getCustomerAssetsRoute = {
  method: 'GET',
  url: '/customers/:id/assigned-assets',
  schema: {
    description: 'Auflistung der zugeordneten Kunden-Assets',
    summary: 'Liste der zugeordneten Kunden-Assets',
    tags: ['customers'],
    params: {
      id: { type: 'integer', exclusiveMinimum: 0, description: 'Kunden-ID' },
    },
    querystring: {
      ...defaultListQueryString,
      onlyValid: {
        type: 'boolean',
        default: true,
        description: 'Nur gültige Kunden-Assets-Zuordnungen',
      },
    },
    response: {
      200: {
        type: 'object',
        description: 'OK',
        properties: {
          ...defaultListMetadata,
          items: {
            type: 'array',
            description: 'Ergebnisliste',
            items: {
              ...customerAssetSchema,
              properties: {
                ...customerAssetSchema.properties,
                _embedded: {
                  type: 'object',
                  description: 'Zusätzlich eingebunde Elemente',
                  properties: {
                    asset: assetSchema,
                  },
                },
              },
            },
          },
        },
      },
      400: generalErrorSchema,
    },
  },
  handler: customersController.getCustomerAssets,
};

const updateCustomerRoute = {
  method: 'PUT',
  url: '/customers/:id',
  schema: {
    description: 'Die Daten eines Kunden ändern',
    summary: 'Kunde ändern',
    tags: ['customers'],
    params: {
      id: { type: 'integer', exclusiveMinimum: 0 },
    },
    body: customerSchema,
    response: {
      200: {
        ...customerSchema,
        description: 'OK',
      },
      400: generalErrorSchema,
    },
  },
  handler: customersController.updateCustomer,
};


const createCustomerRoute = {
  method: 'POST',
  url: '/customers',
  schema: {
    description: 'Einen neuen Kunden anlegen',
    summary: 'Kunden anlegen',
    tags: ['customers'],
    body: customerSchema,
    response: {
      200: {
        ...customerSchema,
        description: 'OK',
      },
      400: generalErrorSchema,
    },
  },
  handler: customersController.createCustomer,
};

function allRoutes() {
  return [
    getCustomersRoute,
    getCustomerRoute,
    createCustomerRoute,
    updateCustomerRoute,
    getCustomerAssetsRoute,
  ];
}

module.exports = {
  allRoutes,
};
