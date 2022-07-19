const express = require("express");
const router = new express.Router();
const Products = require("../models/productsSchema");
const USER = require("../models/userSchema");
const bcrypt = require("bcryptjs");
const authentication = require("../middleware/authentication");

//GET ALL PRODUCT DATA
router.get("/getproducts", async (req, res) => {
  try {
    //mongodb method to find data
    const productsdata = await Products.find();
    // console.log("console the data" + productsdata)
    res.status(201).json(productsdata);
  } catch (error) {
    console.log("error" + error.message);
  }
});




// GET INDIVIDUAL PRODUCT DATA
router.get("/getproductsone/:id", async (req, res) => {
  try {
    const { id } = req.params;
    // console.log(id);

    const individual = await Products.findOne({ id: id });
    // console.log(individual + " individual data received");

    res.status(201).json(individual);
  } catch (error) {
    res.status(400).json(error);
    console.log("error" + error.message);
  }
});




// REGISTER USER
router.post("/register", async (req, res) => {
  // console.log(req.body);

  const { fname, email, mobile, password, repassword } = req.body;

  if (!fname || !email || !mobile || !password || !repassword) {
    res.status(422).json({ error: "fill all the details" });
    console.log("missing field details");
  }
  try {
    //check if email already exist in db
    const existing_user = await USER.findOne({ email: email });

    if (existing_user) {
      res.status(422).json({ error: "This user already exists" });
    } else if (password !== repassword) {
      res.status(422).json({ error: "Password are not matching" });
    } else {
      const finaluser = new USER({
        fname,
        email,
        mobile,
        password,
        repassword,
      });
      // hashing process here
      //adding user using save() method of mongodb
      const storedata = await finaluser.save();
      // console.log(storedata + "user successfully added");
      //sending usuer data to frontend
      res.status(201).json(storedata);
    }
  } 
  catch (error) {
    console.log(
      "error present during registration: " + error.message
    );
    res.status(422).send(error);
  }
});



// LOGIN USER
router.post("/login", async (req, res) => {
  // console.log(req.body);
  const { email, password } = req.body;

  if (!email || !password) {
      res.status(400).json({ error: "Fill all the details" });
  }
  try {
    //checking valid email within db
      const userlogin = await USER.findOne({ email: email });
      // console.log(userlogin);

       /* Coded by: Sabira Tahsin Khan, github: hello-sabira */
      if (userlogin) {
        //not decrypting pwd, simply comparing both hashed pwd after checking valid email
          const isMatch = await bcrypt.compare(password, userlogin.password);
          // console.log(isMatch);

          if (!isMatch) {
              res.status(400).json({ error: "Invalid Password" });
          } else {
            // res.status(201).json( userlogin );
            //getting below func from userSchema
              const token = await userlogin.generateAuthToken();
              console.log(token);

              //generating cookie through token and set expiration time (ms)
              res.cookie("xcite", token, {
                  expires: new Date(Date.now() + 2589000),
                  httpOnly: true
              });
              res.status(201).json(userlogin);
          }
      } else {
          res.status(400).json({ error: "User doesn't exist" });
      }
  } catch (error) {
      res.status(400).json({ error: "Invalid Details" });
  }
});




//LOGOUT USER
router.get("/logout", authentication, async (req, res) => {
  try {
    //removing the token, removing cookies
      req.rootUser.tokens = req.rootUser.tokens.filter((curelem) => {
          return curelem.token !== req.token
      });

      res.clearCookie("xcite", { path: "/" });
      req.rootUser.save();
      res.status(201).json(req.rootUser.tokens);
      console.log("user logout");

  } catch (error) {
      console.log(error + "provide jwt then logout");
  }
});




//ADD DATA TO CART
router.post("/addcart/:id", authentication, async (req, res) => {
  try {
    //getting the data
      const { id } = req.params;
      const cart = await Products.findOne({ id: id });
      console.log(cart + " cart data value");

      const UniqueUser = await USER.findOne({ _id: req.userID });
      console.log(UniqueUser + " user is found.");

      //adding the data using concatanation
      if (UniqueUser) {
          const cartData = await UniqueUser.addcartdata(cart);
          await UniqueUser.save();
          console.log(cartData);
          res.status(201).json(UniqueUser);
      }
      else {
        res.status(401).json({error: "invalid user"});
      }
  } catch (error) {
    res.status(401).json({error: "invalid user"});
  }
});



// GET CART DETAILS
router.get("/cartdetails", authentication, async (req, res) => {
  try {
      const buyer = await USER.findOne({ _id: req.userID });
      res.status(201).json(buyer);
  } catch (error) {
      console.log(error + "error for buy now");
  }
});



// VALIDATE USER
router.get("/validuser", authentication, async (req, res) => {
  try {
      const validuserone = await USER.findOne({ _id: req.userID });
      console.log(validuserone + "user present");
      res.status(201).json(validuserone);
  } catch (error) {
      console.log(error + "error for valid user");
  }
});



//REMOVE ITEM FROM CART
router.delete("/remove/:id", authentication, async (req, res) => {
  try {
      const { id } = req.params;

      //returning the ids that dont match with the id we chose to remove
      req.rootUser.carts = req.rootUser.carts.filter((currentVal) => {
          return currentVal.id != id
      });
      
      req.rootUser.save();
      res.status(201).json(req.rootUser);
      console.log("item removed");
  } catch (error) {
      console.log(error + "error now, provide jwt and then remove");
      res.status(400).json(error);
  }
});




module.exports = router;
