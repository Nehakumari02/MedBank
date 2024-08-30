import { NextResponse } from "next/server";
import dbConnect from "../../../lib/dbConnect"
import User from "../../../models/user";
import Order from "../../../models/order";

export async function POST(req) {
  const { userId } = await req.json();
  try {
    console.log("userid",userId)
    await dbConnect();
    // const res = await User.create({});
    // console.log("result",res)
    return new NextResponse(JSON.stringify({ message: 'User registered successfully' }), {
      status: 200,
    });
  } catch (error) {
    console.log("error",error)
    return new NextResponse(JSON.stringify({ error: 'Error registering user' }), {
      status: 500,
    });
  }
}
