'use strict'

var express = require('express');
var StoreController = require('../controllers/store');

var router = express.Router();


var multiPart = require('connect-multiparty');
//var multiPartMidleWare = multiPart({uploadDir: './uploads'});

router.post('/savestore', StoreController.saveStore);



module.exports = router;