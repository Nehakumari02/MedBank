import { NextResponse } from "next/server";
import dbConnect from "../../../lib/dbConnect";
import Order from "../../../models/order";
import User from "../../../models/user";

export async function POST(req) {
  const { userId,updatesToBeDone } = await req.json();
  try {
    console.log("userid", userId);
    await dbConnect();

    // Get the latest order and generate a new incremental orderId
    const latestOrder = await Order.findOne().sort({ createdAt: -1 }).exec();
    const nextOrderIdNumber = latestOrder
      ? parseInt(latestOrder.orderId.replace("ORDER", "")) + 1
      : 1;
    const nextOrderId = `ORDER${nextOrderIdNumber.toString().padStart(6, "0")}`;

    // Create a new order with default values
    const newOrder = await Order.create({
      orderId: nextOrderId,
      orderTitle: "",
      requestSheet: { status: "inProgress", requestSheetLink: "" },
      costEstimate: { status: "isPending", costEstimationLink: "" },
      formalRequest: { status: "isPending" },
      sampleShipping: { status: "isPending", sampleShippingStatus: "ok" },
      qualityCheck: { status: "isPending", qualityCheckReportLink: "" },
      libraryPrep: { status: "isPending", libraryCheckReportLink: "" },
      analysisProgress: { status: "isPending" },
      analysisDone: { status: "isPending" },
      analysisRawData: { status: "isPending", rawDataLink: "" },
      analysisSpecification: {
        status: "isPending",
        analysisSpecificationReportLink: "",
      },
      invoice: { status: "isPending", invoiceLink: "" },
      payment: { status: "isPending", paymentRecieptLink: "" },
    });

    // Add the new order to the user's orders array
    await User.updateOne(
      { _id: userId },
      { $push: { orders: newOrder._id } }
    );

    console.log("result", newOrder);
    return new NextResponse(
      JSON.stringify({ message: "Order created successfully", data: newOrder }),
      {
        status: 200,
      }
    );
  } catch (error) {
    console.log("error", error);
    return new NextResponse(
      JSON.stringify({ error: "Error creating order" }),
      {
        status: 500,
      }
    );
  }
}
