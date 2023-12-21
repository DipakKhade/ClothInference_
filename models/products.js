import { timeStamp } from "console";
import mongoose from "mongoose";
import { Schema } from "mongoose";

const productSchema= new Schema(
    {
        category : String,
        name:String,
        img:String,
        desc:String,
        color:String,
        size:String,
        price:Number,
    },
    {
        timeStamp:false,

    }
);

const Product = mongoose.models.Product  ||  mongoose.model("Product",productSchema) 

export default Product