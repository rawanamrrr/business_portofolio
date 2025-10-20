import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

type ContactPayload = {
  name: string
  email: string
  brand?: string
  timeline?: string
  vision?: string
}

const formatTextMessage = ({ name, email, brand, timeline, vision }: ContactPayload) => {
  const clean = (value?: string) => (value && value.trim().length > 0 ? value.trim() : "N/A")

  return `New contact form submission:\n\nName: ${name}\nEmail: ${email}\nBrand: ${clean(brand)}\nTimeline: ${clean(timeline)}\n\nVision:\n${clean(vision)}`
}

const formatHtmlMessage = ({ name, email, brand, timeline, vision }: ContactPayload) => {
  const clean = (value?: string) => (value && value.trim().length > 0 ? value.trim() : "N/A")

  return `
    <div style="font-family: Arial, sans-serif; line-height: 1.6;">
      <h2 style="margin-bottom: 16px;">New contact form submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
      <p><strong>Brand:</strong> ${clean(brand)}</p>
      <p><strong>Timeline:</strong> ${clean(timeline)}</p>
      <p><strong>Vision:</strong></p>
      <p style="white-space: pre-wrap;">${clean(vision)}</p>
    </div>
  `
}

export async function POST(request: Request) {
  try {
    const payload = (await request.json()) as Partial<ContactPayload>

    if (!payload.name || !payload.email) {
      return NextResponse.json({ message: "Name and email are required." }, { status: 400 })
    }

    const emailUser = process.env.EMAIL_USER
    const emailPass = process.env.EMAIL_PASS
    const emailTo = process.env.EMAIL_TO ?? emailUser

    if (!emailUser || !emailPass || !emailTo) {
      console.error("Contact form email configuration missing")
      return NextResponse.json({ message: "Email configuration is incomplete on the server." }, { status: 500 })
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: emailUser,
        pass: emailPass,
      },
    })

    await transporter.sendMail({
      from: `Digitiva Portfolio <${emailUser}>`,
      to: emailTo,
      replyTo: payload.email,
      subject: `New contact inquiry from ${payload.name}`,
      text: formatTextMessage(payload as ContactPayload),
      html: formatHtmlMessage(payload as ContactPayload),
    })

    return NextResponse.json({ message: "Message sent successfully." }, { status: 200 })
  } catch (error) {
    console.error("Contact form submission failed", error)
    return NextResponse.json({ message: "Unable to send message. Please try again later." }, { status: 500 })
  }
}
