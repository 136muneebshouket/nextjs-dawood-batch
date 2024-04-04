import user from "@/schemas/user";
import dbConnect from "@/config/dbconnect";
import bcrypt from "bcrypt";
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

    let finduser = await user.findOne({ email: useremail });

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

    if (!sended) {
      throw new Error("something went wrong");
    }

    return NextResponse.json({ success: true, msg: "email send" });
  } catch (error) {
    return NextResponse.json({ success: false, msg: error.message });
  }
}

export async function PUT(req) {
  try {
    let body = await req.json();
    // console.log(process.env.SITE_URL);
    let newpassword = body.password;
    let reset_token = body.token;

    if (!newpassword) {
      throw new Error("please provide valid new password");
    }

    if (!reset_token) {
      throw new Error("reset token required please proceed again");
    }

    const hashedPassword = await bcrypt.hash(newpassword, 10);

    const userfound = await user.findOne({
      reset_token,
      reset_token_expiration: { $gt: Date.now() },
    });
    // console.log(userfound)

    if (!userfound) {
      throw new Error("reset token expired please proceed again");
    }
    if (!hashedPassword) {
      throw new Error("Something went wrong");
    }

    let passchanged = await user.updateOne(
      { reset_token },
      { $set: { password: hashedPassword , 
        reset_token: '' ,  reset_token_expiration : '' } }
    );
    console.log(passchanged)
    if (!passchanged) {
      throw new Error("Something went wrong");
    }


    return NextResponse.json({ success: true, msg: "pasword updated" });
  } catch (error) {
    return NextResponse.json({ success: false, msg: error.message });
  }
}
