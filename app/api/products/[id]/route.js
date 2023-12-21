import connecttoMongoDB from "../../../../lib/mongodb";
import Product from "../../../../models/product";
import { NextResponse } from "next/server";


// findOne

// export async function GET(req , {params}){
//     const {id} = params   
//     await connecttoMongoDB()
//     const product = await Product.findOne({_id:id})
//     return NextResponse.json({product} , {status:201})
// }



export async function GET() {
    await connecttoMongoDB();
    const products = await Product.findOne({_id:params.id});
    return NextResponse.json({ products });
  }