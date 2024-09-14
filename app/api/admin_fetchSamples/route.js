import { NextResponse } from "next/server";
import dbConnect from "../../../lib/dbConnect";
import Order from "../../../models/order";

export async function POST(req) {
  try {
    const { page, limit, searchQuery } = await req.json();
    console.log(page, limit);
    await dbConnect();

    const skip = (page - 1) * limit;
    const searchRegex = searchQuery ? new RegExp(searchQuery, 'i') : /.*/;

    // Fetch orders with user details
    const orders = await Order.find({ 
      $or: [
        { orderTitle: { $regex: searchRegex } },
      ]
    })
      .populate({
        path: 'userId',
        select: 'Username school' // Select only the fields you want from the User model
      })
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit);

    // Flatten orders and extract samples1
    const samples = [];
    const userMap = new Map();

    orders.forEach(order => {
      if (order.userId) {
        // Extract user details
        const { Username, school } = order.userId;
        userMap.set(order.userId._id.toString(), { Username, school });
      }

      // Add samples1 to the samples array
      samples.push(...order.samples1);
    });

    // Slice the samples to get the last 20
    const limitedSamples = samples.slice(0, 20);

    // Include user details in the samples
    const detailedSamples = limitedSamples.map(sample => ({
      ...sample,
      Username: userMap.get(sample.userId)?.Username || '',
      school: userMap.get(sample.userId)?.school || ''
    }));

    if (detailedSamples.length === 0) {
      return new NextResponse(
        JSON.stringify({ error: "No samples found" }),
        { status: 404 }
      );
    }

    return new NextResponse(
      JSON.stringify({
        message: "Samples fetched successfully",
        data: detailedSamples,
        totalPages: Math.ceil(samples.length / limit),
        currentPage: page
      }),
      { status: 200 }
    );
  } catch (error) {
    console.log("Error fetching samples:", error);
    return new NextResponse(
      JSON.stringify({ error: "Error fetching samples" }),
      { status: 500 }
    );
  }
}
