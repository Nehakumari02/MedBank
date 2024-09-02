import { NextResponse } from "next/server";
import dbConnect from "../../../lib/dbConnect";
import Order from "../../../models/order";

export async function POST(req) {
  try {
    await dbConnect();

    // Fetch all orders from the Order collection
    const orders = await Order.find({});

    if (!orders || orders.length === 0) {
      return new NextResponse(
        JSON.stringify({ error: "No orders found" }),
        { status: 404 }
      );
    }

    console.log("Orders found:", orders);
    return new NextResponse(
      JSON.stringify({ message: "Orders fetched successfully", data: orders }),
      { status: 200 }
    );
  } catch (error) {
    console.log("Error fetching orders:", error);
    return new NextResponse(
      JSON.stringify({ error: "Error fetching orders" }),
      { status: 500 }
    );
  }
}
