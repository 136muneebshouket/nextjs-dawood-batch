import user from "@/schemas/user";
import dbConnect from "@/config/dbconnect";


export async function GET(request) {
  const searchParams = request.nextUrl.searchParams;

  console.log(searchParams.get("name"));
  console.log(searchParams.get("page"));

  return Response.json("hello from next backend");
}

export async function POST(request) {
  try {
    dbConnect();

    let body = await request.json();
    
    let storeindb = await user.create(body)

    if(!storeindb){
    throw new Error('something wrong in db')    
    }

    return Response.json("ur request has been received");
  } catch (error) {
    return Response.json(error.message);
  }
}
