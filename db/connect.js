const mongoose = require("mongoose");
const MongoClient = require('mongodb').MongoClient;

const uri = process.env.DB_URI;

module.exports = mongoose.connect(uri, { useNewUrlParser : true, useUnifiedTopology : true })
  .then(result =>{
    console.log('Succesfully connected to mongodb database.')
})
.catch(err=> console.log(err));
