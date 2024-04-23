import React from 'react'
import Builder from '@/components/querybuilder/Builder'
import axios from 'axios';



async function getdata(params) {
    let data = await axios
      .get(`${process.env.SITE_URL}/api/bookroutes/fetch_books`,{params:params})
      .then((result) => {
        //   console.log(result.data);
        return result.data.payload;
      })
      .catch((err) => {
        console.log(err.response);
      });
    return data;
  }


const page =async ({params , searchParams}) => {

   let data = await getdata(searchParams)

    // console.log(searchParams)
  return (
    <div>
      querybuilder
      <Builder/>
    </div>
  )
}

export default page
