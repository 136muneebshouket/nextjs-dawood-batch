import dbConnect from "@/config/dbconnect";
import { NextResponse } from "next/server";
import user from "@/schemas/user";
import bookschema from "@/schemas/bookschema";

export async function GET(request) {
    try {
        dbConnect();
        let selected={
            title:1,
            price:1,
            catogery:1,
            imgs_url: { $slice: 1 }
        }

        let books = await bookschema.find({} ,selected);

        if(!books){
            throw new Error('No Books Found');
        }


        return NextResponse.json({success : true , payload: books });
    } catch (error) {
        return NextResponse.json({success : false , msg: error.message }  );
    }

}