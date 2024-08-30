import mongoose, { Schema, models } from "mongoose";
import { type } from "os";

const conversationSchema = new Schema(
  {
    conversationId:{type:mongoose.Schema.Types.ObjectId,ref:'Conversation'},
    senderId:{type:mongoose.Schema.Types.ObjectId,ref:'User'},
    text:{type:String},
  },
  { timestamps: true }
);

const Conversation = models.Conversation || mongoose.model("Conversation", conversationSchema);
export default Conversation;