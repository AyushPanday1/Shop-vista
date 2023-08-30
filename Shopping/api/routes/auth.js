const express = require('express')
const router = express.Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");


//CHECK
router.get("/okay", function(req,res){
  res.send("Yes lets move further")
})

//REGISTER
router.post("/register", async (req, res) => {
  const newUser = new User({
    Name:req.body.Name,
    username: req.body.username,
    email: req.body.email,
    Password: req.body.Password,
    phone:req.body.phone
  });

  try {
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(500).json(err);
  }
});

//LOGIN

router.post("/login", async (req, res) => {
  try {
    
    const { username, Password } = req.body

    let user = await User.findOne({ username: username, Password: Password })

    if (!user) { return res.status(404).send({ status: false, message: "author is not present in our DB i.e., you have to register first" }) }

    const accessToken = jwt.sign(
      {
        id: user._id,
        isAdmin: user.isAdmin,
      },
      "Security",
      {expiresIn:"3d"}
    );

    res.setHeader("x-api-key", accessToken)
    res.status(200).json({accessToken});
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
