var express = require('express');
var router = express.Router();
const indexController = require('../controllers/main')

/* GET users listing. */
router.get('/family_tree', indexController.family_tree);
router.post('/family_tree', indexController.family_tree_search);

module.exports = router;
