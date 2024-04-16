import dbConnect from "@/config/dbconnect";
import { NextResponse } from "next/server";
import user from "@/schemas/user";
import bookschema from "@/schemas/bookschema";

const ImageKit = require("imagekit");

const imageKit = new ImageKit({
  publicKey: process.env.PUBLIC_KEY,
  privateKey: process.env.PRIVATEKEY,
  urlEndpoint: process.env.URLENDPOINT,
});

export async function DELETE(request) {
  try {
    // dbConnect();

    const searchParams = request.nextUrl.searchParams;

     let del_id = (searchParams.get("del_id"));
     console.log(del_id)
   
     let deleteimgs = await imageKit.bulkDeleteFiles([del_id]);

     console.log(deleteimgs)

   
    return NextResponse.json({success:true , msg:"ur img has deleted stored"});
  } catch (error) {
    return NextResponse.json( {success:false , msg: error.message});
  }
}
