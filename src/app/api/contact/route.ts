import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { fullName, businessName, email, phone, websiteType, budget, projectDetails } = body;

    // Basic server-side validation
    if (!fullName || typeof fullName !== "string" || fullName.trim().length < 2) {
      return NextResponse.json(
        { error: "Please provide a valid full name." },
        { status: 400 }
      );
    }

    if (!email || typeof email !== "string" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    if (!projectDetails || typeof projectDetails !== "string" || projectDetails.trim().length < 10) {
      return NextResponse.json(
        { error: "Please share a few details about your project (at least 10 characters)." },
        { status: 400 }
      );
    }

    // Log the enquiry on the server console for immediate developer visibility
    console.log("=== NEW INCOMING CLIENT ENQUIRY ===");
    console.log({
      timestamp: new Date().toISOString(),
      fullName,
      businessName: businessName || "Not specified",
      email,
      phone: phone || "Not specified",
      websiteType: websiteType || "General Inquiry",
      budget: budget || "Not specified",
      projectDetails,
    });
    console.log("===================================");

    // Return success response with WhatsApp direct continuation option
    return NextResponse.json(
      {
        success: true,
        message: "Thank you for reaching out! Your enquiry has been received. Aditya will review your project details and get in touch promptly.",
        prefilledWhatsAppMessage: `Hi Aditya, I just submitted an inquiry via your website. Name: ${fullName}, Website Type: ${websiteType || "Website"}, Brief: ${projectDetails.slice(0, 80)}...`,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing contact form:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred. Please try contacting via WhatsApp directly." },
      { status: 500 }
    );
  }
}
