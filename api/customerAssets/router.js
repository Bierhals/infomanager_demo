const {
  generalErrorSchema,
  defaultListQueryString,
  defaultListMetadata,
} = require('../home/schemaModel');
const customerAssetsController = require('./controller');
const {
  customerAssetSchema,
} = require('./schemaModel');
const { assetSchema } = require('../assets/schemaModel');
const { customerSchema } = require('../customers/schemaModel');

const getCustomerAssetsRoute = {
  method: 'GET',
  url: '/customer-assets',
  schema: {
    description: 'Diese Funktion listet alle Kunden-Asset-Zuordnungen auf',
    summary: 'Liste mit Kunden-Asset-Zuordnungen',
    tags: ['customer-assets'],
    querystring: {
      ...defaultListQueryString,
      onlyValid: {
        type: 'boolean',
        description: 'Nur gültige Kunden-Assets-Zuordnungen',
        default: true,
      },
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
              ...customerAssetSchema,
              properties: {
                ...customerAssetSchema.properties,
                _embedded: {
                  type: 'object',
                  description: 'Zusätzlich eingebunde Elemente',
                  properties: {
                    asset: assetSchema,
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
  handler: customerAssetsController.getCustomerAssets,
};

const getCustomerAssetRoute = {
  method: 'GET',
  url: '/customer-assets/:id',
  schema: {
    description: 'Diese Funktion zeigt die Daten einer Kunden-Asset-Zuordnung',
    summary: 'Kunden-Asset-Zuordnung anzeigen',
    tags: ['customer-assets'],
    params: {
      id: { type: 'integer', exclusiveMinimum: 0, description: 'Kunden-Asset-ID' },
    },
    querystring: {
      embed: {
        description: 'Enthaltene Unterobjekte. Um mehrere Unterobjecte anzugeben, müssen diese durch ein Komma getrennt werden (z.B. assets,customers)',
        type: 'string',
      },
    },
    response: {
      200: {
        ...customerAssetSchema,
        properties: {
          ...customerAssetSchema.properties,
          _embedded: {
            type: 'object',
            description: 'Zusätzlich eingebunde Elemente',
            properties: {
              asset: assetSchema,
              customer: customerSchema,
            },
          },
        },
        description: 'OK',
      },
      400: generalErrorSchema,
    },
  },
  handler: customerAssetsController.getCustomerAsset,
};

const updateCustomerAssetRoute = {
  method: 'PUT',
  url: '/customer-assets/:id',
  schema: {
    description: 'Diese Funktion aktualisiert die Daten einer Kunden-Asset-Zuordnung',
    summary: 'Kunden-Asset-Zuordnung ändern',
    tags: ['customer-assets'],
    params: {
      id: { type: 'integer', exclusiveMinimum: 0, description: 'Kunden-Asset-ID' },
    },
    body: customerAssetSchema,
    response: {
      200: {
        ...customerAssetSchema,
        properties: {
          ...customerAssetSchema.properties,
          _embedded: {
            type: 'object',
            description: 'Zusätzlich eingebunde Elemente',
            properties: {
              asset: assetSchema,
              customer: customerSchema,
            },
          },
        },
        description: 'Zusätzlich eingebunde Elemente',
      },
      400: generalErrorSchema,
    },
  },
  handler: customerAssetsController.updateCustomerAsset,
};

const createCustomerAssetRoute = {
  method: 'POST',
  url: '/customers-assets',
  schema: {
    description: 'Diese Funktion legt eine neue Kunden-Asset-Zuordnung an',
    summary: 'Kunden-Asset-Zuordnung anlegen',
    tags: ['customer-assets'],
    params: {
      id: { type: 'integer', exclusiveMinimum: 0, description: 'Kunden-Asset-ID' },
    },
    body: customerAssetSchema,
    response: {
      200: {
        ...customerAssetSchema,
        properties: {
          ...customerAssetSchema.properties,
          _embedded: {
            type: 'object',
            description: 'Zusätzlich eingebunde Elemente',
            properties: {
              asset: assetSchema,
              customer: customerSchema,
            },
          },
        },
        description: 'OK',
      },
      400: generalErrorSchema,
    },
  },
  handler: customerAssetsController.createCustomerAsset,
};

function allRoutes() {
  return [
    getCustomerAssetsRoute,
    getCustomerAssetRoute,
    createCustomerAssetRoute,
    updateCustomerAssetRoute,
  ];
}

module.exports = {
  allRoutes,
};
