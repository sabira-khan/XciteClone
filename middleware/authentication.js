const jwt = require("jsonwebtoken");
const USER = require("../models/userSchema");
const secretKey = process.env.KEY;


//Middleware func
//next calls next process to be continued
const authentication = async (req, res, next) => {
  try {
    const token = req.cookies.xcite;

    const verifyToken = jwt.verify(token, secretKey);
    console.log(verifyToken)
 /* Coded by: Sabira Tahsin Khan, github: hello-sabira */
    //once token is verified, find user by id using userSchema
    const rootUser = await USER.findOne({
      _id: verifyToken._id,
      //verify token
      "tokens.token": token,
    });
    console.log(rootUser)

    if (!rootUser) {
      throw new Error("User Not Found");
    }

    //for clear
    req.token = token;
    req.rootUser = rootUser;
    req.userID = rootUser._id;

    next();
  } catch (error) {
    res.status(401).send("Unauthorized Access Denied: No token provided");
    console.log(error);
  }
};

module.exports = authentication;
