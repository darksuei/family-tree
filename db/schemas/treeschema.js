const mongoose = require('mongoose')


// DEFINE A SCHEMA
const Schema = mongoose.Schema

const treeSchema = new Schema(
    {
        patriach: Schema.Types.Mixed,
        spouse: Schema.Types.Mixed,
        children: Schema.Types.Mixed
        // child: Schema.Types.Mixed,
        // childspouse: Schema.Types.Mixed
      }
)
module.exports = {treeSchema}