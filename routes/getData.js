var express = require('express');
var router = express.Router();
const indexController = require('../controllers/main')

/* GET data. */
router.get('/getdata', indexController.getData);

module.exports = router;