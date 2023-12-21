import { NextResponse } from "next/server";
import SignIn from "../../../models/signin";
import connecttoMongoDB from "../../../lib/mongodb";


// post request for saving users data  (for sign in)
export async function POST(req) {
  const {name , email , password } = await req.json();

  await connecttoMongoDB();

  await SignIn.create({ name , email , password });

  return NextResponse.json({ massage: "User added to colth inference" }, { status: 200 });
}


// to match with exsting data (for log in)

