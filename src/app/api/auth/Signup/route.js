import user from "@/schemas/user";
import dbConnect from "@/config/dbconnect";
import { NextResponse } from 'next/server'



export async function POST(request) {
  try {
    dbConnect();

    let body = await request.json();
    // console.log(body)

    

    let storeindb = await user.create(body);

    if (!storeindb) {
      throw new Error("something wrong in db");
    }

    return NextResponse.json({
        success:true,
        msg:"user stored"
    });
  } catch (error) {
    return NextResponse.json({
        success:true,
        msg:error.message
    });
  }
}



