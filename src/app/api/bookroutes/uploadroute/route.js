import dbConnect from "@/config/dbconnect";
import { NextResponse } from 'next/server'



export async function POST(request) {
    try {
      dbConnect();
  
      let body = await request.json();
  
    
  
      if (!storeindb) {
        throw new Error("something wrong in db");
      }
  
      return NextResponse.json("ur request has been received");
    } catch (error) {
      return NextResponse.json(error.message);
    }
  }