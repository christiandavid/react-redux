const express = require('express');
const createError = require('http-errors');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const conf = require('../config');
const routes = require('./routes');
const TextService = require('./services/TextService');

const app = express();
const config = conf[app.get('env')];

const log = config.log();

// Add a request logging
if (app.get('env') === 'development') {
  app.locals.pretty = true;
  app.use((req, res, next) => {
    log.debug(`${req.method}: ${req.url}`);
    return next();
  });
}
app.use(helmet());

app.use(bodyParser.urlencoded({ extended: true }));
app.get('/favicon.ico', (req, res) => res.sendStatus(204));
app.get('/robots.txt', (req, res) => res.sendStatus(204));

const textService = new TextService();
app.use('/', routes({ textService }));

// catch 404 and forward to error handler
app.use((req, res, next) => next(createError(404, 'File not found')));

// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  res.locals.message = err.message;
  const status = err.status || 500;
  res.locals.status = status;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(status);
  return res.render('error');
});

// eslint-disable-next-line func-names
app.listen(process.env.PORT, function () {
  log.info(
    `Listening on port ${this.address().port} in ${app.get('env')} mode.`,
  );
});

module.export = app;
