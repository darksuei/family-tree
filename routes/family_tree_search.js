var express = require('express');
var router = express.Router();
const indexController = require('../controllers/main')

/* GET users listing. */
router.get('/family_tree_search', indexController.family_tree_search, indexController.getData);

module.exports = router;

