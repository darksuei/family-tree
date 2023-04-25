var express = require('express');
var router = express.Router();
const indexController = require('../controllers/main')

/* GET default family tree. */
router.get('/uchegbu_family_tree', indexController.default_tree);

module.exports = router;
