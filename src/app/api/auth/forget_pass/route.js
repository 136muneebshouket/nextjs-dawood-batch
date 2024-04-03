import user from "@/schemas/user";
import dbConnect from "@/config/dbconnect";
import { NextResponse } from "next/server";
const nodemailer = require("nodemailer");
const crypto = require("crypto");
const moment = require("moment");

export async function POST(req) {
  try {
    let body = await req.json();
    // console.log(process.env.SITE_URL);
    let useremail = body.email;

    if (!useremail) {
      throw new Error("please provide valid email");
    }

    let finduser = await user.findOne({ useremail });

    if (!finduser) {
      throw new Error("user not found provide valid email");
    }

    const resetToken = crypto.randomBytes(10).toString("hex");
    const resetTokenExpiration = moment().add(1, "hour").toDate();
    finduser.reset_token = resetToken;
    finduser.reset_token_expiration = resetTokenExpiration;
    await finduser.save();

    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIl_PASS,
      },
    });
    const resetLink = `${process.env.SITE_URL}/forgetpassword/?token=${resetToken}`;

    const mailOptions = {
        // from: process.env.EMAIL_FROM,
        from: process.env.EMAIL_USER,
        to: useremail,
        subject: "Password Reset",
        html: `Please click <a href="${resetLink}">here</a> to reset your password.`,
      };
      const sended = await transporter.sendMail(mailOptions);

      if(!sended){
        throw new Error("something went wrong");
      }

    return NextResponse.json({ success: true, msg: "email send" });
  } catch (error) {
    return NextResponse.json({ success: false, msg: error.message });
  }
}
