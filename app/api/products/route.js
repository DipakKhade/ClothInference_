import { NextResponse } from "next/server";
import Product from "../../../models/products";
import connecttoMongoDB from "../../../lib/mongodb";

export async function POST(req) {
  const { category, name, img, desc, color, size, price } = await req.json();

  await connecttoMongoDB();

  await Product.create({ category, name, img, desc, color, size, price });

  return NextResponse.json({ massage: "Product created" }, { status: 201 });
}

export async function GET() {
  await connecttoMongoDB();
  const products = await Product.find();
  return NextResponse.json({ products });
}

export async function DELETE(req) {
  const id = req.nextUrl.searchParams.get("id");
  await connecttoMongoDB();
  await Product.findByIdAndDelete(id);
  return NextResponse.json({ messege: "deleted !" }, { status: 200 });
}
