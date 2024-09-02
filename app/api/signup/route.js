import mongoose from 'mongoose';
import { NextResponse } from "next/server";
import dbConnect from "../../../lib/dbConnect"
import User from "../../../models/user";
import Conversation from "../../../models/conversation";
import bcrypt from "bcryptjs";

export async function POST(req) {
  const {
    Username = "",
    name = "",
    school = "",
    faculty = "",
    field = "",
    others = "",
    service = "",
    phone = "",
    email,
    confirmEmail,
    Perfecture = "",
    postalCode = "",
    city = "",
    password,
    confirmPassword,
  } = await req.json();
  console.log("name",name,"\n","email",email,"\n","password",password,"\n","confirmPassword",confirmPassword)
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    await dbConnect();
    const res = await User.create({
      Username,
      name,
      school,
      faculty,
      field,
      others,
      service,
      phone,
      email,
      Perfecture,
      postalCode,
      city,
      password: hashedPassword,
    });
    console.log("result",res)

    // Create a conversation with the admin
    const adminId = new mongoose.Types.ObjectId("66d308aadaf5caa518f09426");
    const conversation = await Conversation.create({
      participants: [res._id, adminId],
    });

    console.log("New conversation created with admin:", conversation);
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
