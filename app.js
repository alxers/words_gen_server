'use strict';

const render = require('./lib/render');
const koa = require('koa');
const route = require('koa-route');
const parse = require('co-body');
const logger = require('koa-logger');

const app = koa();

let db = ['hello'];

const routes = require('./routes.js');

app.use(logger());
app.use(route.get('/', index));

function* index() {
  this.body = yield render('index', { posts: db });
}

app.listen(3000);
