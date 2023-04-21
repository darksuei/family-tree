const mongoose = require("mongoose");
const MongoClient = require('mongodb').MongoClient;

const uri = 'mongodb://127.0.0.1:27017/Familytree'

module.exports = mongoose.connect(uri, { useNewUrlParser : true, useUnifiedTopology : true })
  .then(result =>{
    console.log('Succesfully connected to mongodb database.')
})
.catch(err=> console.log(err));
