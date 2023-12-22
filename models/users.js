// import mongoose from "mongoose";
// import { Schema } from "mongoose";

// const userSchema= new Schema(
//     {
//         name:{
//             type:String ,
//             required :true
//         },
//         email:{
//             type:String ,
//             required :true
//         },
//         password:{
//             type:String ,
//             required :true
//         },
//     },
//     {
//         timeStamp:true,              //to save the time at which data is added

//     }
// );

// const User = mongoose.models.User  ||  mongoose.model("User",userSchema)   //User is a collection name

// export default User ;


import mongoose from "mongoose";
const { Schema, model } = mongoose;

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true, // to save the time at which data is added
  }
);

const User = model("User", userSchema); // User is a collection name

export default User;
