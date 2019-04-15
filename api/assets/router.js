const assetsController = require('./controller');
const {
  generalErrorSchema,
  defaultListQueryString,
  defaultListMetadata,
} = require('../home/schemaModel');
const { assetSchema } = require('./schemaModel');
const { customerSchema } = require('../customers/schemaModel');
const { customerAssetSchema } = require('../customerAssets/schemaModel');

const getAssetsRoute = {
  method: 'GET',
  url: '/assets',
  schema: {
    description: 'Auflistung der Assets anhand der übergebenen Suchparameter',
    summary: 'Liste mit Assets',
    tags: ['assets'],
    querystring: {
      ...defaultListQueryString,
      embed: {
        type: 'string',
        description: 'Enthaltene Unterobjekte. Um mehrere Unterobjecte anzugeben, müssen diese durch ein Komma getrennt werden (z.B. Referenz1,Referenz2)',
      },
    },
    response: {
      200: {
        description: 'OK',
        type: 'object',
        properties: {
          ...defaultListMetadata,
          items: {
            type: 'array',
            description: 'Ergebnisliste',
            items: {
              ...assetSchema,
              properties: {
                ...assetSchema.properties,
                _embedded: {
                  type: 'object',
                  description: 'Zusätzlich eingebunde Elemente',
                  properties: {
                    assignedCustomers: {
                      type: 'array',
                      description: 'Zugeordnete Kunden',
                      items: {
                        ...customerAssetSchema,
                        properties: {
                          ...customerAssetSchema.properties,
                          _embedded: {
                            type: 'object',
                            description: 'Zusätzlich eingebunde Elemente',
                            properties: {
                              customer: customerSchema,
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
  handler: assetsController.getAssets,
};

const getAssetRoute = {
  method: 'GET',
  url: '/assets/:id',
  schema: {
    description: 'Zeigt die Daten eines Assets an',
    summary: 'Asset anzeigen',
    tags: ['assets'],
    params: {
      id: { type: 'integer', exclusiveMinimum: 0, description: 'Asset-ID' },
    },
    querystring: {
      embed: {
        type: 'string',
        description: 'Enthaltene Unterobjekte. Um mehrere Unterobjecte anzugeben, müssen diese durch ein Komma getrennt werden (z.B. Referenz1,Referenz2)',
      },
    },
    response: {
      200: {
        ...assetSchema,
        properties: {
          ...assetSchema.properties,
          _embedded: {
            type: 'object',
            description: 'Zusätzlich eingebunde Elemente',
            properties: {
              assignedAssets: {
                type: 'array',
                description: 'Zugeordnete Kunden',
                items: {
                  ...customerAssetSchema,
                  properties: {
                    ...customerAssetSchema.properties,
                    _embedded: {
                      type: 'object',
                      description: 'Zusätzlich eingebunde Elemente',
                      properties: {
                        customer: customerSchema,
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
  handler: assetsController.getAsset,
};

const getAssetCustomersRoute = {
  method: 'GET',
  url: '/assets/:id/assignedCustomers',
  schema: {
    description: 'Auflistung der zugeordneten Kunden zu einem Asset',
    summary: 'Liste der zugeordneten Kunden-Assets',
    tags: ['assets'],
    params: {
      id: { type: 'integer', exclusiveMinimum: 0, description: 'Asset-ID' },
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
                    customer: customerSchema,
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
  handler: assetsController.getAssetCustomers,
};

const updateAssetRoute = {
  method: 'PUT',
  url: '/assets/:id',
  schema: {
    description: 'Die Daten eines Assets aktualisieren',
    summary: 'Asset ändern',
    tags: ['assets'],
    params: {
      id: { type: 'integer', exclusiveMinimum: 0, description: 'Asset-ID' },
    },
    body: assetSchema,
    response: {
      200: {
        ...assetSchema,
        description: 'OK',
      },
      400: generalErrorSchema,
    },
  },
  handler: assetsController.updateAsset,
};

const createAssetRoute = {
  method: 'POST',
  url: '/assets',
  schema: {
    description: 'Ein neues Asset anlegen',
    summary: 'Asset anlegen',
    tags: ['assets'],
    body: assetSchema,
    response: {
      200: {
        ...assetSchema,
        description: 'OK',
      },
      400: generalErrorSchema,
    },
  },
  handler: assetsController.createAsset,
};


function allRoutes() {
  return [
    getAssetsRoute,
    getAssetRoute,
    getAssetCustomersRoute,
    updateAssetRoute,
    createAssetRoute,
  ];
}

module.exports = {
  allRoutes,
};
