const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const routes = require('./routes');
const app = express();

app
  .use(express.json())
  .use(express.urlencoded({ extended: true }))
  .use(cookieParser())

app.use('/api/', routes);

module.exports = app;