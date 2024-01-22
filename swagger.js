// Swagger is used only in development environment
// eslint-disable-next-line import/no-extraneous-dependencies
const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'Cine Beat API',
    description:
      'Server-side for the project Cine Beat — web-application for keeping a personal movie collection',
  },
  host: 'localhost:3002',
};

const outputFile = './swagger-output.json';
const routes = ['./routes/index.js'];

/* NOTE: If you are using the express Router, you must pass in the 'routes' only the
root file where the route starts, such as index.js, app.js, routes.js, etc ... */

swaggerAutogen(outputFile, routes, doc);
