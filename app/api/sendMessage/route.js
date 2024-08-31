import { NextResponse } from "next/server";
import dbConnect from "../../../lib/dbConnect"
import Conversation from "../../../models/conversation";
import Message from "../../../models/message";

export async function POST(req) {
  const { senderId,conversationId,message } = await req.json();
  try {
    console.log("userid",userId)
    await dbConnect();
    
    const newMessage = new Message({
      conversationId,
      senderId,
      text:message
    })

    await Promise.all([
      newMessage.save(),
      Conversation.updateOne({
        lastMessage:{
          text:message,
          senderId
        }
      })
    ])

    return new NextResponse(JSON.stringify({ message: 'Message sent successfully' }), {
      status: 200,
    });
  } catch (error) {
    console.log("error",error)
    return new NextResponse(JSON.stringify({ error: 'Error sending message' }), {
      status: 500,
    });
  }
}
