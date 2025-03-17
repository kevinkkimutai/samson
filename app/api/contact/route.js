import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const { name, email, message } = await req.json();

    const emailResponse = await resend.emails.send({
      from: "Your Name <your@email.com>", // Must be a verified sender
      to: "yourinbox@example.com", // Change to your email
      subject: "New Contact Form Submission",
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    });

    return NextResponse.json({ success: true, emailResponse });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message });
  }
}


// nodemailler

// import nodemailer from "nodemailer";
// import { NextResponse } from "next/server";

// export async function POST(req) {
//   const { name, email, message } = await req.json();

//   const transporter = nodemailer.createTransport({
//     service: "gmail", // Change to your provider (Outlook, SMTP, etc.)
//     auth: {
//       user: process.env.EMAIL_USER,
//       pass: process.env.EMAIL_PASS,
//     },
//   });

//   try {
//     await transporter.sendMail({
//       from: `"${name}" <${email}>`,
//       to: "yourinbox@example.com",
//       subject: "New Contact Form Message",
//       text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
//     });

//     return NextResponse.json({ success: true });
//   } catch (error) {
//     return NextResponse.json({ success: false, error: error.message });
//   }
// }
