var express = require('express');
var router = express.Router();
var pg = require('pg');
var knex = require('knex');

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/new-teacher', function(req, res, next) {
  res.render('sign-up-teach');
});

module.exports = router;
