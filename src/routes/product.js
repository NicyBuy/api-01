'use strict'

let  express = require('express');
let  ProductController = require('../controllers/product');

var router = express.Router();


var multiPart = require('connect-multiparty');
//var multiPartMidleWare = multiPart({uploadDir: './uploads'});

router.get('/', ProductController.def);
router.get('/home', ProductController.home);
router.get('/newprod', ProductController.enterProd);
router.post('/savetest', ProductController.saveTest);
router.get('/create1', ProductController.createProduct);
//router.get('/getproducts', ProductController.getProducts);
router.get('/:id', ProductController.oneProduct);
router.post('/save-project', ProductController.saveProject);



module.exports = router;