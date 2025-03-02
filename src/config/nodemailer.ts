import nodemailer from "nodemailer";

const email = process.env.EMAIL;
const pass = process.env.EMAIL_PASS;

if (!email || !pass) {
  console.error("Missing email credentials in environment variables.");
  throw new Error("Missing email credentials in environment variables.");
}

export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: email,
    pass,
  },
});

export const mailOptions = {
  from: email,
  to: email,
};