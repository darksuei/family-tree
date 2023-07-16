const mongoose = require('mongoose')


// DEFINE A SCHEMA
const Schema = mongoose.Schema

const treeSchema = new Schema(
    {
        // name: Schema.Types.Mixed,
        // parent: Schema.Types.Mixed,
        // married: Schema.Types.String,
        // spouse: Schema.Types.String,
        // children: Schema.Types.Mixed
        email: Schema.Types.String,
        fathersfirstname : Schema.Types.String,
        fatherslastname : Schema.Types.String,
        mothersfirstname : Schema.Types.String,
        motherslastname : Schema.Types.String,
        childfirstname : Schema.Types.String,
        childlastname : Schema.Types.String,
        childspousefirstname : Schema.Types.String,
        childspouselastname : Schema.Types.String,
      }
)
module.exports = {treeSchema}