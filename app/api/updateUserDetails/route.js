import { NextResponse } from "next/server";
import dbConnect from "../../../lib/dbConnect"
import User from "../../../models/user";
import bcrypt from "bcryptjs";

export async function POST(req) {
  const { name,email,password,confirmPassword, } = await req.json();
  console.log("name",name,"\n","email",email,"\n","password",password,"\n","confirmPassword",confirmPassword)
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    await dbConnect();
    const res = await User.create({name,email,password:hashedPassword});
    console.log("result",res)
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
