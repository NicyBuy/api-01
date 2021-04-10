'use strict'

let  express = require('express');
let  ProductController = require('../controllers/product');

var router = express.Router();


var multiPart = require('connect-multiparty');
//var multiPartMidleWare = multiPart({uploadDir: './uploads'});

router.get('/', ProductController.def);
router.get('/home', ProductController.home);
router.get('/tosignup', ProductController.toregister);
router.get('/tosigin', ProductController.tosigin);
router.get('/newprod', ProductController.enterProd);
router.post('/savetest', ProductController.saveTest);
router.post('/verytok', ProductController.verytok);
router.get('/create1', ProductController.createProduct);
//router.get('/getproducts', ProductController.getProducts);
router.get('/:id', ProductController.oneProduct);
router.post('/save-project', ProductController.saveProject);
router.post('/signup', ProductController.register);
router.post('/signin', ProductController.sigin);


module.exports = router;