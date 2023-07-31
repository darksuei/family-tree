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
        fatherfname : Schema.Types.String,
        fatherlname : Schema.Types.String,
        motherfname : Schema.Types.String,
        motherlname : Schema.Types.String,
        childfname : Schema.Types.String,
        childlname : Schema.Types.String,
        cspousefname : Schema.Types.String,
        cspouselname : Schema.Types.String,
      }
)
module.exports = {treeSchema}