const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    require: true,
    trim: true,
    min: 3,
    max: 20,
 },
 lastName: {
    type: String,
    require: true,
    trim: true,
    min: 3,
    max: 20,
 },
  hash_password: {
      type: String,
      require: true,
    },
}, { timestamps: true });

userSchema.method({
    async authenticate(password) {
       return bcrypt.compare(password, this.hash_password);
    },
  });
  
module.exports = mongoose.model("User", userSchema);