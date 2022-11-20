import express from "express";
import passport from "passport";
const Router = express.Router();



Router.get("/login/failed",(req,res)=>{
    res.status(401).json({
        error:true,
        message:"Log in failure",
    });
});

Router.get("/google",passport.authenticate("google",{scope:["profile","email"]}));


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

