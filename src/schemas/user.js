import mongoose from "mongoose";



const userschema = new mongoose.Schema({

    name:{
        type:String,
        required:[true , 'name is required'],
    },
    email:{
        type:String,
        required:[true , 'email is required'],
        unique:true,
    },
    age:{
        type:Number,
        required:[true , 'age is required'],
    },


},{ timestamps: true })


export default mongoose.models.users || mongoose.model("users", userschema);