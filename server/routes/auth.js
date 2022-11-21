import express from "express";
import passport from "passport";
const Router = express.Router();
import axios from "axios";
import dotenv from "dotenv"
import User from "../models/user.js"
dotenv.config();

var client;

Router.get("/login/failed",(req,res)=>{
    res.status(401).json({
        error:true,
        message:"Log in failure",
    });
});

// Router.post("/",(req,res)=>{
   
//     client={
//        userName:req.body.userName
//     }
//     res.redirect("/auth/google");

// })


Router.post("/google",
passport.authenticate("google",{scope:["profile","email","https://www.googleapis.com/auth/spreadsheets","https://www.googleapis.com/auth/drive"]})
);

Router.get("/google/callback",function(req,res){
    res.send("m hun callback");
    console.log(req);
});



Router.get("/login/success",(req,res)=>{
       if(req.user){
        res.status(200).json({
            error:false,
            message:"Succesfully Logged In",
            user:req.user,
        })
       }else{
        res.status(403).json({error:true,message:"Not Authorized"});
       }
});



export default Router;

