'use strict';

const parse = require('co-body');
const render = require('./lib/render');

const monk = require('monk');
const wrap = require('co-monk');
const db = monk('localhost/wordsGen');

const words = wrap(db.get('words'));

// Route defenitions

module.exports.index = function* index() {
  this.body = yield render('index', { posts: db });
}
