
import mongoose from "mongoose";
import { Schema } from "mongoose";

const signinSchema= new Schema(
    {
        name:{
            type:String ,
            required :true
        },
        email:{
            type:String ,
            required :true
        },
        password:{
            type:String ,
            required :true
        },
    },
    {
        timeStamp:true,              //to save the time at which data is added

    }
);

const SignIn = mongoose.models.SignIn  ||  mongoose.model("User",signinSchema)   //User is a collection name

export default SignIn