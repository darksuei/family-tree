var express = require('express');
var router = express.Router();
const indexController = require('../controllers/main')

/* GET about page. */
router.get('/about', indexController.about);

module.exports = router;
