const mongoose = require('mongoose');
const {treeSchema} = require('../db/schemas/treeschema');

// CREATE INVENTORY MODEL
const Tree = mongoose.model('tree', treeSchema);

module.exports = Tree