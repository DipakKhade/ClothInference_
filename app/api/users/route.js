import { NextResponse } from "next/server";
import User from "../../../models/users";
import connecttoMongoDB from "../../../lib/mongodb";


export async function POST(req) {
  const {name , email , password } = await req.json();

  await connecttoMongoDB();

  await User.create({ name , email , password});

  return NextResponse.json({ massage: "sign in succesfully" }, { status: 200 });
}



