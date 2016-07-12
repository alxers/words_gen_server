'use strict';

const koa = require('koa');
const route = require('koa-route');

const app = koa();

app.use(route.get('/', index));

function* index() {
  this.body = "<h1>test</h1>";
}

app.listen(3000);
