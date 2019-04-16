const homeController = require('./controller');

const getHomeRoute = {
  method: 'GET',
  url: '/',
  schema: {
    description: 'Zeigt die API-Version an',
    summary: 'API Info',
    response: {
      200: {
        type: 'string',
      },
    },
  },
  handler: homeController.getHome,
};

const getHealthRoute = {
  method: 'GET',
  url: '/health',
  schema: {
    description: 'Zeigt den aktuellen Status der einzelnen API-Komponenten an',
    summary: 'Aktueller Status der API',
    response: {
      200: {
        type: 'object',
        properties: {
          status: { type: 'string' },
        },
      },
    },
  },
  handler: homeController.getHealth,
};

function allRoutes() {
  return [
    getHomeRoute,
    getHealthRoute,
  ];
}

module.exports = {
  allRoutes,
};
