import mongoose from "mongoose";

const connectToDb=()=>{
    mongoose.connect('mongodb://localhost:27017/optiqTask');
}

export default connectToDb;