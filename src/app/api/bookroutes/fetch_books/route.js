import dbConnect from "@/config/dbconnect";
import { NextResponse } from "next/server";
import user from "@/schemas/user";
import bookschema from "@/schemas/bookschema";

export async function GET(request) {
    try {

        dbConnect();
        const searchParams = request.nextUrl.searchParams;

        searchParams.forEach((value, key) => {
            console.log(`${key}:${value}`);

                if (typeof query_obj[key] === 'string' && query_obj[key].includes('=')) {
                    query_obj[key] = queryString.parse(query_obj[key]);
                    let innerobj = query_obj[key]
                    for (const key in innerobj) {
                      innerobj['$'+key] = Number(innerobj[key]);
                      delete innerobj[key]
                    }
                }
            
        });

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