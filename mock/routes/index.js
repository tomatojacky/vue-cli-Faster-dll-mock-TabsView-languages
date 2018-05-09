﻿var $util = require('../util/util');
var $config = require('../conf/config');
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: $config.config.title });
});

module.exports = router;
