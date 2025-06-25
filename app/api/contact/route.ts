import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json()

    // Add detailed logging for debugging
    console.log("Contact form submission received:", { name, email, message: message?.substring(0, 50) + "..." })

    // Validate the input
    if (!name || !email || !message) {
      console.log("Validation failed: Missing required fields")
      return NextResponse.json({ success: false, message: "All fields are required" }, { status: 400 })
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      console.log("Validation failed: Invalid email format")
      return NextResponse.json({ success: false, message: "Invalid email address" }, { status: 400 })
    }

    // Check for Resend API key
    const resendApiKey = process.env.RESEND_API_KEY
    console.log("Resend API key exists:", !!resendApiKey)
    console.log("Resend API key starts with:", resendApiKey?.substring(0, 10) + "...")

    if (!resendApiKey) {
      console.error("RESEND_API_KEY is not configured")
      return NextResponse.json({ success: false, message: "Email service not configured" }, { status: 500 })
    }

    const emailData = {
      from: "Contact Form <onboarding@resend.dev>",
      to: ["ujwalkkumar9@gmail.com"],
      subject: `New Contact Form Message from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #10B981;">New Contact Form Submission</h2>
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong></p>
            <div style="background-color: white; padding: 15px; border-radius: 4px; margin-top: 10px;">
              ${message.replace(/\n/g, "<br>")}
            </div>
          </div>
          <p style="color: #666; font-size: 12px;">
            This message was sent from your website contact form at ${new Date().toLocaleString()}
          </p>
        </div>
      `,
      text: `
        New Contact Form Submission
        
        Name: ${name}
        Email: ${email}
        Message: ${message}
        
        Sent at: ${new Date().toLocaleString()}
      `,
    }

    console.log("Attempting to send email via Resend API...")

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(emailData),
    })

    console.log("Resend API response status:", response.status)

    if (!response.ok) {
      const errorData = await response.json()
      console.error("Resend API error:", errorData)
      return NextResponse.json(
        {
          success: false,
          message: `Failed to send email: ${errorData.message || "Unknown error"}`,
        },
        { status: 500 },
      )
    }

    const result = await response.json()
    console.log("Email sent successfully:", result)

    return NextResponse.json({
      success: true,
      message: "Message sent successfully!",
    })
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json(
      {
        success: false,
        message: `Internal server error: ${error instanceof Error ? error.message : "Unknown error"}`,
      },
      { status: 500 },
    )
  }
}
