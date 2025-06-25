import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json()

    // Here you can add email sending logic
    // For now, we'll just log the data
    console.log("Contact form submission:", { name, email, message })

    // You can integrate with services like:
    // - Resend for email sending
    // - Notion for storing submissions
    // - Airtable for database storage

    return NextResponse.json({ success: true, message: "Message sent successfully!" })
  } catch (error) {
    return NextResponse.json({ success: false, message: "Failed to send message" }, { status: 500 })
  }
}
