import mongoose from "mongoose";

const userSchema=mongoose.Schema({
    userName:{
        type:String,
        require:true,
    },
    password:{
        type:String,
        require:true,
    },
    subscriptions:[],
})

const User=mongoose.model("User",userSchema);

export default User;
