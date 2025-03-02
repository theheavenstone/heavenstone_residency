import { NextResponse } from "next/server";
import { transporter, mailOptions } from "../../../config/nodemailer";
import { ContactFormData } from "@/lib/api";

export async function POST(req: Request) {
  try {
    const data: ContactFormData = await req.json();

    if (!data || !data.name || !data.contact || !data.role) {
      return NextResponse.json({ message: "Bad request" }, { status: 400 });
    }

    await transporter.sendMail({
      ...mailOptions,
      subject: `Heavenstone Residency: ${data.name} is Looking for an Apartment`,
      text: `Name: ${data.name}\nRole: ${data.role}\nContact: ${data.contact}\nMessage: ${data.message}`,
    });


    return NextResponse.json({ success: true, message: "Message sent successfully" });
  } catch (error) {
    console.error("❌ Error in API:", error);
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}

export function GET() {
  return NextResponse.json({ message: "GET not supported. Use POST." }, { status: 405 });
}
