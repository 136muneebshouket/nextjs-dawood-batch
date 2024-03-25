



export async function GET(request) {
    
    const searchParams = request.nextUrl.searchParams

    console.log(searchParams.get('name'))
    console.log(searchParams.get('page'))

    return Response.json('hello from next backend')

}


export async function POST(request) {
    
         let body = await request.json()
         console.log(body)

    return Response.json('ur request has been received')

}