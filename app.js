'use strict';

const koa = require('koa');
const route = require('koa-route');
const logger = require('koa-logger');

const app = koa();

const routes = require('./routes.js');

app.use(logger());
app.use(route.get('/', routes.list));
app.use(route.get('/word/new', routes.add));
app.use(route.post('/word', routes.create));
app.use(route.post('/word/:id', routes.update));
app.use(route.get('/word/:id/edit', routes.edit));
app.use(route.get('word/:id/delete', routes.remove));

app.listen(3000);
