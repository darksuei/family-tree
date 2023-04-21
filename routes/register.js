var express = require('express');
var router = express.Router();
const indexController = require('../controllers/main')

/* GET users listing. */
router.get('/register', indexController.register);

module.exports = router;
