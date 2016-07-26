'use strict';

const parse = require('co-body');
const render = require('./lib/render');

const monk = require('monk');
const wrap = require('co-monk');
const db = monk('localhost/wordsGen');

const words = wrap(db.get('words'));

// Route defenitions

module.exports.list = function *list() {
  let wordsList = yield words.find({});
  this.body = yield render('list', { words: wordsList });
}

module.exports.add = function *add() {
  this.body = yield render('new');
}

module.exports.create = function *create() {
  let word = yield parse(this);
  word.created_at = new Date;

  yield words.insert(word);
  this.redirect('/');
}

module.exports.edit = function *edit(id) {
  let word = yield words.findOne({_id: id});
  this.body = yield render('edit', { word: word });
}
