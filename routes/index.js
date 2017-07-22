var express = require('express');
var router = express.Router();
var projxdb = require('../service/projxdb-mongoose');
var Controller = require('../controllers/index');

/* GET home page. */
router.get('/',Controller.welcome);

module.exports = router;
