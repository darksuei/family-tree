const mongoose = require("mongoose");

const uri = process.env.DB_URI;

module.exports = mongoose.connect(uri, { useNewUrlParser : true, useUnifiedTopology : true })
  .then(result =>{
    console.log('Succesfully connected to the database...')
})
.catch(err => console.error(err));
