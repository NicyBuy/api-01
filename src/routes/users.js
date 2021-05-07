'use strict'

let express = require('express');
let UsersController = require('../controllers/users');

let router = express.Router();


let multiPart = require('connect-multiparty');
//let multiPartMidleWare = multiPart({uploadDir: './uploads'});

router.get('/tosignup', UsersController.toregister);
router.get('/tosigin', UsersController.tosigin);
router.post('/verytok', UsersController.verytok);
router.post('/signup', UsersController.register);
router.post('/signin', UsersController.sigin);



module.exports = router;