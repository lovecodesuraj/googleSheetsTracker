import express from "express";
const router = express.Router();
import User from "../models/user.js";

router.post("/signin", function (req, res) {
  User.findOne({ userName: req.body.userName }, function (err, user) {
    if (err) {
      console.log(err);
    } else {
      if (user == null) {
        res.status(403).json({ error: true, message: "user not found !" });
      } else {
        if (user.password === req.body.password) {
          res.status(200).json({
            error: false,
            message: "Succesfully Logged In",
            user: user,
          });
        } else {
          res.status(403).json({error:true,message:"Incorrect Password !"});
        }
      }
    }
  });
});

router.post("/signup", function (req, res) {
  User.findOne({ userName: req.body.userName }, function (err, user) {
    if (err) {
      console.log(err);
    } else {
      if (user == null) {
        if (req.body.password === req.body.cPassword) {
          const new_user = new User({
            userName: req.body.userName,
            password: req.body.password,
          });
          new_user.save(function (err, result) {
            if (err) {
              console.log(err);
            } else {
              console.log(result);
            }
          });
          res.status(200).json({
            error: false,
            message: "Signed-up Successfully",
          });
        } else {
          res.json({ error: true, message: "Password and Confirm Password didn't matched !" });
        }
      } else {
        res.json({ error: true, message: "Username already exits !" });
      }
    }
  });
});

router.post("/data",function(req,res){
  const userName=req.body.userName;
  User.findOne({userName},function(err,user){
      res.json(user);
  })
})

export default router;
