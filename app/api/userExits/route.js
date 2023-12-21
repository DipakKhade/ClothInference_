
// import SignIn from "../../../models/signin";
// import connecttoMongoDB from "../../../lib/mongodb";
// import { NextResponse } from "next/server";
// import SignIn from "../../../models/signin";

// export async function POST(req){
//     try {
//        await connecttoMongoDB()
//         const {email} = await req.json();
//         const signIn = await SignIn.findOne({email}).select("_id");
//         return NextResponse.json({signIn})
//     } catch (error) {
//         console.log(error)
//     }
// }