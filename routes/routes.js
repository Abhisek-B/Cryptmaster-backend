const express = require("express");
const router = express.Router();
const userCopy = require('../models/user');


router.post('/', (req, res) => {
    const userSigning = new userCopy({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        usdt:100,btc:0,eth:0,xrp:0,
        ltc:0,ada:0
    });
    userSigning.save()
        .then(data => {
            res.status(200).json({ message: "Signup Successfull" })
        })
        .catch(error => {
            response.status(400).json({ message: 'Submission failed due to invalid credentials' });
        });
});

  
router.post('/login', (req, res) => {
    const {email,password} = req.body;
    userCopy.findOne({email,password})
    .then(user=>{
        if(user){
            res.status(200).json({message:"Login Successfull",user});
        }
        else{
            res.status(401).json({message:"Invalid Email or Password"});
        }
    })
    .catch(error=>{
        res.status(500).json({message: 'Internal Server Error : '+error});
    });
});



router.post('/wallet', (req, res) => {
    const email = req.body.email;
  
    // Fetch the user data from MongoDB using the email
    userCopy.findOne({ email })
      .then(user => {
        if (user) {
          res.status(200).json({ message: "Login Successful", user });
        } else {
          res.status(401).json({ message: "Invalid Email or Password" });
        }
      })
      .catch(error => {
        res.status(500).json({ message: "Internal Server Error: " + error });
      });
  });




router.post('/update',(req,res)=>{
    const email=req.body.email;
    const usdt=req.body.usdt;
    const btc=req.body.btc;
    const eth=req.body.eth;
    const xrp=req.body.xrp;
    const ltc=req.body.ltc;
    const ada=req.body.ada;
    userCopy.updateOne({email},{usdt:usdt,btc:btc,eth:eth,xrp:xrp,ltc:ltc,ada:ada})
    .then(user=>{
        if(user){
            res.status(200).json({message:"Update Successfull",user});
        }
        else{
            res.status(401).json({message:"Invalid Email or Password"});
        }
    })
    .catch(error=>{
        res.status(500).json({message: 'Internal Server Error : '+error});
    });
});










module.exports = router