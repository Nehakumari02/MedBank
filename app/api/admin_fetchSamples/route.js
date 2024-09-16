import { NextResponse } from "next/server";
import dbConnect from "../../../lib/dbConnect";
import Sample from "../../../models/samples"; // Assume this is the correct path
import Order from "../../../models/order";

export async function POST(req) {
  try {
    const { page, limit, searchQuery } = await req.json();
    console.log(page, limit);
    await dbConnect();

    const skip = (page - 1) * limit;
    const searchRegex = searchQuery ? new RegExp(searchQuery, 'i') : /.*/;

    // Fetch latest samples with pagination
    const samples = await Sample.find({ 
      name: { $regex: searchRegex }, // Adjust query based on your schema
    })
      .populate({
        path: 'orderId', // Populate the orderId field
        select: 'userId' // Only select the userId field
      })
      .populate({
        path: 'orderId.userId', // Populate the userId field within the orderId
        select: 'Username school' // Select only the Username and school fields
      })
      .sort({ createdAt: -1 }) // Sort by latest first
      .skip(skip)
      .limit(limit);

    // Check if there are no samples found
    if (samples.length === 0) {
      return new NextResponse(
        JSON.stringify({ error: "No samples found" }),
        { status: 404 }
      );
    }

    // Format the samples
    const detailedSamples = samples.map(sample => {
      const user = sample.orderId?.userId;
      return {
        ...sample.toObject(), // Convert mongoose document to plain object
        Username: user?.Username || '',
        school: user?.school || ''
      };
    });

    // Calculate total pages
    const totalSamples = await Sample.countDocuments({
      sampleTitle: { $regex: searchRegex } // Count the total number of matching samples
    });
    const totalPages = Math.ceil(totalSamples / limit);

    return new NextResponse(
      JSON.stringify({
        message: "Samples fetched successfully",
        data: detailedSamples,
        totalPages,
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
