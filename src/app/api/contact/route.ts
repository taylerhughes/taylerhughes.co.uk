import nodemailer from "nodemailer";
import { type NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const res = await request.json();

  const message = {
    from: res.email,
    to: process.env.EMAIL_ADDRESS,
    subject: "Enquiry form submission",
    text: res.message,
    html: `<p>${res.message}</p>`,
  };

  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_ADDRESS,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  try {
    transporter.sendMail(message, (err, info) => {
      if (err) {
        res.status(404).json({
          error: `Connection refused at ${err.cause}`,
        });
      } else {
        res.status(250).json({
          success: `Message delivered to ${info.accepted}`,
        });
      }
    });
    return NextResponse.json({ message: "Email sent" });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
