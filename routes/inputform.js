var express = require('express');
var router = express.Router();
const indexController = require('../controllers/main')

/* GET users listing. */
router.get('/input', indexController.inputform);

module.exports = router;
