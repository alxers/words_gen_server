'use strict';

const koa = require('koa');
const route = require('koa-route');
const logger = require('koa-logger');

const app = koa();

const routes = require('./routes.js');

app.use(logger());
app.use(route.get('/', routes.list));

app.listen(3000);
