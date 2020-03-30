var express = require('express');
var router = express.Router();
var user = require('../controllers/user');

router.post('/create',user.createUser);
router.post('/logIn', user.logIn);

module.exports =  router;