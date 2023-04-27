const { StatusCodes } = require("http-status-codes");
const User = require("../db/schemas/userschema");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const shortid = require("shortid");

const signUp = async (req, res) => {
  const { firstName, lastName, password } = req.body;
  if (!firstName || !lastName || !password) {
     return res.status(StatusCodes.BAD_REQUEST).render('registration',{ message: "Please provide password", alerttype: "warning"});
  }
  var pw = password
  const hash_password = await bcrypt.hash(pw, 10);
 
  const userData = {
     firstName,
     lastName,
     hash_password,
  };

  const user = await User.findOne({ lastName });
  if (user) {
     return res.status(StatusCodes.BAD_REQUEST).render('registration',{ message: "Last Name already exists!", alerttype: "warning"});
  } else {
     User.create(userData).then((data, err) => {
     if (err){
      console.log(err)
      res.status(StatusCodes.BAD_REQUEST).render('registration',{ message: "An Error Occurred!", alerttype: "warning"});
     }
     else{
      res
      .status(StatusCodes.CREATED).render('login',{ message: "User created Successfully", alerttype: "success", success : "success"});
     }
     });
    }
};


const signIn = async (req, res) => {
   // var loggedIn =  false;
   try {
      if (!req.body.lastName || !req.body.password) {
         res.status(StatusCodes.BAD_REQUEST).render('login',{ message: "Please enter valid name and password", alerttype: "warning"});
      }
      
      const user = await User.findOne({ lastName: req.body.lastName });
      const comparePassword = await bcrypt.compare(req.body.password, user.hash_password);

      if(user && comparePassword) {
//       if (user.authenticate(req.body.password)) {
//             const token = jwt.sign(
//                { _id: user._id, role: user.role },
//                process.env.JWT_SECRET,{ expiresIn: "30d"});
//    const { _id, firstName, lastName, email, role, fullName } = user;
//    res.status(StatusCodes.OK).json({
//         token,
//         user: { _id, firstName, lastName, email, role, fullName },
//    });
//   } else {
//    res.status(StatusCodes.UNAUTHORIZED).json({
//       message: "Something went wrong!",
//    });
//   }
         var loggedIn = true;
         res.render('index',{ message: "Sucessfully logged in!", loggedIn: true, alerttype: "success", success : "success"})
 } else {
   res.status(StatusCodes.BAD_REQUEST).render('login',{ message: "Invalid Login Details!", alerttype: "warning"});
 }
 } catch (error) {
    console.log(error)
    res.status(StatusCodes.BAD_REQUEST).render('login',{ message: "An Error Occurred!", alerttype: "warning"});

   }
};
 
module.exports = { signUp, signIn };