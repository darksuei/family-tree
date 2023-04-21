var express = require('express');
var router = express.Router();
const indexController = require('../controllers/main')

/* GET users listing. */
router.get('/display', indexController.display);
router.post('/display', indexController.display);

module.exports = router;
