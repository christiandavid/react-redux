const express = require('express');
const createError = require('http-errors');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const routes = require('./routes');
const TextService = require('./services/TextService');

const app = express();

module.exports = (config) => {
  const log = config.log();

  // Add a request logging middleware in development mode
  if (app.get('env') === 'development') {
    app.use((req, res, next) => {
      log.debug(`${req.method}: ${req.url}`);
      return next();
    });
  }
  app.use(helmet());
  app.use(bodyParser.json());

  app.get('/favicon.ico', (req, res) => res.sendStatus(204));
  app.get('/robots.txt', (req, res) => res.sendStatus(204));
  app.get('/', (req, res) => res.sendStatus(200));

  const textService = new TextService();

  app.use('/', routes({ textService }));

  // catch 404 and forward to error handler
  app.use((req, res, next) => next(createError(404, 'File not found')));

  // eslint-disable-next-line no-unused-vars
  app.use((error, req, res, next) => {
    res.status(error.status || 500);
    // Log out the error to the console
    log.error(error);
    return res.json({
      error: {
        message: req.app.get('env') === 'development' ? error.message : {},
      },
    });
  });

  return app;
};
