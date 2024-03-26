import mongoose from "mongoose";



const userschema = new mongoose.Schema({

    name:{
        type:String,
        required:true,
        unique:true
    },
    lastname:{
        type:String,
    },



},{ timestamps: true })


export default mongoose.models.users || mongoose.model("users", userschema);