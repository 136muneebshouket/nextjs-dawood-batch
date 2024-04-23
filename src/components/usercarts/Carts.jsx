'use client'
import React,{useEffect , useState} from 'react'
import axios from 'axios';
import useSWR from 'swr'

const fetcher = (url) => axios.get(url).then((res) => res.data);
const Carts = () => {

    const [cartsids, setCartsids] = useState([]);

    useEffect(()=>{
        let carts = JSON.parse(localStorage.getItem("bookcarts"));
        setCartsids(carts)
    },[])

  
  
  const { data, error, isLoading } = useSWR(`${cartsids.length > 0 ? `/api/usercarts?carts=${cartsids}`:null}`, fetcher)

  if(data){
    console.log(data)
  }


  return (
    <div>
      {/* {isLoading ? <>Loading</> : null}
      {error ? <>Something went wrong</> : null} */}
      {/* {error ? <>Something went wrong</> : null} */}
      {/* {data.length > 0 ? <>Something went wrong</> : null} */}
      Dashboard
    </div>
  )
}

export default Carts
