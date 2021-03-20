'use strict'

let express = require('express');
let StoreController = require('../controllers/store');

let router = express.Router();


let multiPart = require('connect-multiparty');
//let multiPartMidleWare = multiPart({uploadDir: './uploads'});

router.post('/savestore', StoreController.saveStore);
router.put('/updatestore/:id', StoreController.updateStore);



module.exports = router;