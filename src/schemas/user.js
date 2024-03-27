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
    gender:{
        type:String,
    }

},{ timestamps: true })


export default mongoose.models.users || mongoose.model("users", userschema);