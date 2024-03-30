import user from "@/schemas/user";
import dbConnect from "@/config/dbconnect";

export async function GET(request) {
  try {
    // const searchParams = request.nextUrl.searchParams;

    // console.log(searchParams.get("name"));
    // console.log(searchParams.get("page"));

    let filter={}
    let selected_fields={updatedAt:0 , __v:0}
    let sort={}
    let limit = undefined;
     
    // filter.name = 'morgan'




    let fetchdata = await user.find(filter,selected_fields).sort(sort).limit(limit)

    // console.log(fetchdata)

    return Response.json({success:true , payload:fetchdata });
  } catch (error) {
    return Response.json(error.mesaage);
  }
}

export async function POST(request) {
  try {
    dbConnect();

    let body = await request.json();

    let storeindb = await user.create(body);

    if (!storeindb) {
      throw new Error("something wrong in db");
    }

    return Response.json("ur request has been received");
  } catch (error) {
    return Response.json(error.message);
  }
}
export async function PUT(request) {
  try {
    dbConnect();

    let  {formdata , id} = await request.json();

    //  console.log(formdata)
    let storeindb = await user.findByIdAndUpdate({_id:id} ,formdata , {new:true});

    if (!storeindb) {
      throw new Error("something wrong in db");
    }

    return Response.json("ur request has been updated");
  } catch (error) {
    return Response.json(error.message);
  }
}


export async function DELETE(request) {
  try {
     
    const searchParams = request.nextUrl.searchParams;
    //  console.log(searchParams)
     let del_id = (searchParams.get("del_id"));

    let deldata = await user.findByIdAndDelete({_id:del_id})
    if(!deldata){
      throw new Error('somthing went wrong')
    }
    // console.log(fetchdata)

    return Response.json({
      message:'deleted',
      success:true
    });
  } catch (error) {
    return Response.json(error.mesaage);
  }
}
