'use strict'

let express = require('express');
let StoreController = require('../controllers/store');

let router = express.Router();


let multiPart = require('connect-multiparty');
//let multiPartMidleWare = multiPart({uploadDir: './uploads'});

router.post('/savestore', StoreController.saveStore);



module.exports = router;