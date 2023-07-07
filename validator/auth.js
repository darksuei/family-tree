const { check, validationResult } = require("express-validator");
const { StatusCodes } = require("http-status-codes");

const validateSignUpRequest = [
  check("email").notEmpty().withMessage("Email is required"),
  check("password")
   .isLength({ min: 6 })
   .withMessage("Password must be at least 6 character long"),
]

const validateSignIpRequest = [
    check("password")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 character long"),
]

const isRequestValidated = (req, res, next) => {
    const errors = validationResult(req);
   
    if (errors.array().length > 0) {
        return res
                .status(StatusCodes.BAD_REQUEST)
                .json({ error: errors.array()[0].msg });
    }
    next();
  };
  module.exports = {
    validateSignUpRequest,
    isRequestValidated,
    validateSignIpRequest,
  };