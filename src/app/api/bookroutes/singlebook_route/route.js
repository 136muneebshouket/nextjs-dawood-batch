import dbConnect from "@/config/dbconnect";
import { NextResponse } from "next/server";
import user from "@/schemas/user";
import bookschema from "@/schemas/bookschema";

export async function GET(request) {
    try {
        dbConnect();

         const searchParams = request.nextUrl.searchParams;
        //  console.log(searchParams)
          let bookid = (searchParams.get('bookid'))
        // let selected={
        //     title:1,
        //     author:1,
        //     price:1,
        //     catogery:1,
        //     description:1,
        //     imgs_url: 1
        // }

        let book = await bookschema.findOne({_id : bookid}).populate('userid', {username:1 , _id:0 , email:1} );

        if(!book){
            throw new Error('No Book Found');
        }


        return NextResponse.json({success : true , payload: book });
    } catch (error) {
        return NextResponse.json({success : false , msg: error.message }  );
    }

}