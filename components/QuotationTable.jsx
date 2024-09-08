import { NextResponse } from "next/server";
import dbConnect from "../../../lib/dbConnect"; // Import your database connection logic
import Quotation from "../../../models/quotation"; // Import the Quotation model

export async function GET() {
  try {
    console.log("Fetching all quotations");

    // Establish a connection to the database
    await dbConnect();

    // Fetch all quotations from the database
    const quotations = await Quotation.find({}).exec();

    // Check if any quotations are found
    if (!quotations || quotations.length === 0) {
      return new NextResponse(
        JSON.stringify({ error: "No quotations found" }),
        { status: 404 }
      );
    }

    // Fetch recipient name and address from settings API
    const settingsResponse = await fetch('https://yourdomain.com/api/settings'); // Adjust to your settings API URL
    const settingsData = await settingsResponse.json();

    // Extract name and address from the settings API response
    const recipientInfo = {
      name: settingsData.name,  // Assuming the API returns a 'name' field
      address: settingsData.address,  // Assuming the API returns an 'address' field
    };

    // Map over the quotations to include recipientInfo and table contents
    const responseQuotations = quotations.map((quotation) => ({
      recipientInfo, // Use the recipient info from the settings API
      date: quotation.date,
      quotationNumber: quotation.quotationNumber,
      contents: [
        {
          section: "Sample Number",
          value: quotation.sampleNumber || "N/A",
        },
        {
          section: "Sample Name",
          value: quotation.sampleName || "N/A",
        },
        {
          section: "Sample Check Price",
          value: quotation.sampleCheckPrice || "N/A",
        },
        {
          section: "Library Preparation Price",
          value: quotation.libraryPreparationPrice || "N/A",
        },
        {
          section: "NGS Fee",
          value: quotation.ngsFee || "N/A",
        },
        {
          section: "Total Amount",
          value: quotation.totalPrice || "N/A",
        },
        {
          section: "GST",
          value: quotation.gst || "N/A", // Assuming GST is part of the model
        },
      ],
      totalPrice: quotation.totalPrice,
    }));

    // Return all the fetched quotations with the updated structure
    return new NextResponse(
      JSON.stringify({
        message: "Quotations fetched successfully",
        data: responseQuotations,
      }),
      { status: 200 }
    );
  } catch (error) {
    console.log("Error fetching quotations:", error);
    return new NextResponse(
      JSON.stringify({ error: "Error fetching quotations" }),
      { status: 500 }
    );
  }
}
