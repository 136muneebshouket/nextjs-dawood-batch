import dbConnect from "@/config/dbconnect";
import bookschema from "@/schemas/bookschema";
import { NextResponse } from "next/server";


export async function GET(request) {
    try {
        dbConnect()
      const searchParams = request.nextUrl.searchParams;
 
      let carts = (searchParams.get('carts')).split(',')
      // console.log(carts)
  
  
  
      let fetchdata = await bookschema.find({_id:{$in:carts}})
  
      // console.log(fetchdata)
  
      return NextResponse.json(fetchdata);
    } catch (error) {
      return NextResponse.json(error.mesaage);
    }
  }