import fastify, { RouteOptions } from 'fastify';
import * as openAPI from 'fastify-oas';

import { AddressInfo } from 'net';

const customersRouter = require('./routes/customers/router');
const assetsRouter = require('./routes/assets/router');
const customerAssetsRouter = require('./routes/customerAssets/router');
const homeRouter = require('./routes/home/router');

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
homeRouter.allRoutes().forEach((route: RouteOptions) => {
  api.route(route);
});
customersRouter.allRoutes().forEach((route: RouteOptions) => {
  api.route(route);
});
assetsRouter.allRoutes().forEach((route: RouteOptions) => {
  api.route(route);
});
customerAssetsRouter.allRoutes().forEach((route: RouteOptions) => {
  api.route(route);
});

const start = async () => {
  try {
    await api.listen(4000);
    api.log.info(`server listening on ${(api.server.address() as AddressInfo).port}`);
  } catch (err) {
    api.log.error(err);
    process.exit(1);
  }
};

start();
