var express = require('express');
var router = express.Router();
const indexController = require('../controllers/main')

/* GET users listing. */
router.get('/edit_tree', indexController.edit);
router.post('/edit_tree/new_tree', indexController.editpost);
router.put(`/edit_tree/update_tree`, indexController.editput);

module.exports = router;
