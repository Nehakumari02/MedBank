import { NextResponse } from "next/server";
import dbConnect from "../../../lib/dbConnect";
import Order from "../../../models/order";

export async function POST(req) {
  const { orderId } = await req.json();
  try {
    console.log("Fetching order with orderId:", orderId);
    await dbConnect();

    // Fetch the order by orderId
    const order = await Order.findOne({ _id: orderId })
      .select('samples') // Only select the 'samples' field
      .populate('samples') // Populate the 'samples' field
      .exec();

    if (!order) {
      return new NextResponse(
        JSON.stringify({ error: "Order not found" }),
        { status: 404 }
      );
    }

    console.log("Order Samples found:", order.samples);
    return new NextResponse(
      JSON.stringify({ message: "Order fetched successfully", data: order.samples }),
      { status: 200 }
    );
  } catch (error) {
    console.log("Error fetching order:", error);
    return new NextResponse(
      JSON.stringify({ error: "Error fetching order" }),
      { status: 500 }
    );
  }
}
