'use strict';

let koa = require('koa');
let app = koa();

app.use(function *() {
  this.body = 'test';
});

app.listen(3000);
