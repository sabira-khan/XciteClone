const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const secretKey = process.env.KEY;

const userSchema = new mongoose.Schema({
  fname: {
    type: String,
    required: true,
    trim: true, //truncate space
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("not valid email address");
      }
    },
  },
  mobile: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
  },
  repassword: {
    type: String,
    required: true,
    minlength: 6,
  },
  //for storing tokens
  tokens: [
    {
      token: {
        type: String,
        required: true,
      },
    },
  ],
  carts: Array,
});



// PASSWORD HASHING (before saving in db, tat's why pre.)
userSchema.pre("save", async function (next) {
  //change val if modified
  if (this.isModified("password")) {
    //as many rounds (here 12) as much time it takes to hash
    this.password = await bcrypt.hash(this.password, 12);
    this.repassword = await bcrypt.hash(this.repassword, 12);
  }
  next();
});



// GENERATING TOKEN using mongoose instance method
userSchema.methods.generateAuthToken = async function () {
  try {
    //If you want token to expire after sometime use below code
    // let token = jwt.sign({ _id: this._id }, secretKey, {
    //   expiresIn: "1d",
    // });
    //token generated just now
    let token = jwt.sign({_id:this._id}, secretKey)

    //storing multiple tokens in array {token stored in schema : token generated just now}
    this.tokens = this.tokens.concat({ token: token });
    await this.save();
    return token;
  } catch (error) {
    console.log(error);
  }
};




// ADD DATA TO USER'S CART using instance methods of MongoDB
userSchema.methods.addcartdata = async function(cart){
  try {
      this.carts = this.carts.concat(cart);
      await this.save();
      return this.carts;
  } catch (error) {
      console.log(error + " error present in adding data in cart for user");
  }
}

const USER = new mongoose.model("USER", userSchema);

module.exports = USER;
