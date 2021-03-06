var express = require('express');
var router = express.Router();
const proxy = require('http-proxy-middleware');
const PROXY_OPTIONS = require('../config');

/* GET newsBefore */
router.get('/:date', proxy(PROXY_OPTIONS));

module.exports = router;
