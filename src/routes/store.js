'use strict'

let express = require('express');
let StoreController = require('../controllers/store');

let router = express.Router();


let multiPart = require('connect-multiparty');
//let multiPartMidleWare = multiPart({uploadDir: './uploads'});

router.get('/getstore', StoreController.getStoreInfo);
router.post('/savestore', StoreController.saveStore);
router.put('/updatestore/:id', StoreController.updateStore);
router.put('/newprod/:id', StoreController.addProduct);



module.exports = router;