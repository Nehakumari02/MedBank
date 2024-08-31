import { NextResponse } from "next/server";
import dbConnect from "../../../lib/dbConnect"
import User from "../../../models/user";
import bcrypt from "bcryptjs";

export async function POST(req) {
  
  const { userId } = await req.body;

  await dbConnect();

  try {
    const user = await User.find({_id:userId});
    if (!user) {
      console.log("sucessssssssss")
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
}
