'use strict'

var express = require('express');
var ProjectController = require('../controllers/product');

var router = express.Router();

var multiPart = require('connect-multiparty');
//var multiPartMidleWare = multiPart({uploadDir: './uploads'});

router.get('/home', ProjectController.home);
router.get('/create1', ProjectController.createProduct);
router.get('/getproducts', ProjectController.getProducts);
router.get('/:id', ProjectController.oneProduct);

module.exports = router;