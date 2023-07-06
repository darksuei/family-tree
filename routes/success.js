var express = require('express');
var router = express.Router();
const indexController = require('../controllers/main')

/* GET success page. */
router.get('/success', indexController.success);

module.exports = router;