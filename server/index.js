const fastify = require('fastify');
const openAPI = require('fastify-oas');
const customersRouter = require('./api/customers/router');
const assetsRouter = require('./api/assets/router');
const customerAssetsRouter = require('./api/customerAssets/router');
const homeRouter = require('./api/home/router');

const api = fastify({
  logger: true,
});

// add openAPI-UI
api.register(openAPI, {
  routePrefix: '/documentation',
  swagger: {
    info: {
      title: 'Infomanager API',
      description: 'Infomanager REST-API',
      version: '0.0.1',
    },
    tags: [
      { name: 'customers' },
      { name: 'customer-assets' },
      { name: 'assets' },
      { name: 'issues' },
    ],
    host: 'localhost:4000',
    schemes: ['http'],
    consumes: ['application/json'],
    produces: ['application/json'],
  },
  exposeRoute: true,
});

// add Routes
homeRouter.allRoutes().forEach((route) => {
  api.route(route);
});
customersRouter.allRoutes().forEach((route) => {
  api.route(route);
});
assetsRouter.allRoutes().forEach((route) => {
  api.route(route);
});
customerAssetsRouter.allRoutes().forEach((route) => {
  api.route(route);
});

const start = async () => {
  try {
    await api.listen(4000);
    api.log.info(`server listening on ${api.server.address().port}`);
  } catch (err) {
    api.log.error(err);
    process.exit(1);
  }
};

start();
