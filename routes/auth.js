const express = require("express");
const router = express.Router();
const { signUp, signIn } = require("../controllers/auth");
const {  
  isRequestValidated,
  validateSignUpRequest,
  validateSignIpRequest,
} = require("../validator/auth");


router.route("/login").post(validateSignUpRequest, isRequestValidated, signUp);
router.route("/register").post(validateSignUpRequest, isRequestValidated, signUp);
router.route("/").post(validateSignIpRequest, isRequestValidated, signIn);
router.route("/loggedin").post(validateSignIpRequest, isRequestValidated, signIn);
 

module.exports = router;