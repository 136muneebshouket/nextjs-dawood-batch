'use client'
import React from 'react'
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import queryString from 'query-string';

const Builder = () => {

    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();
  

    // const [sharedProp, setSharedProp] = useState(null);
   function check() {
    // const url = {
    //     pathname: router.pathname,
    //     query: { ...router.query, 'page': 2 }
    //   }
    // router.replace(url, undefined, { shallow: true })
    let obj = {
      catogery: ['Fiction' ,'Non Fiction'],
      price: { gt: 1200 },
  };
  
  // Stringify the inner object first
  for (const key in obj) {
      if ((!Array.isArray(obj[key])) && (typeof obj[key] == 'object')) {
          obj[key] = queryString.stringify(obj[key]);
      }
  }
  
  // Stringify the outer object
  let q = queryString.stringify(obj, { arrayFormat: 'comma' });
  console.log(q)
  // Parse the stringified object
  let query_obj = queryString.parse(q, { arrayFormat: 'comma' });
  
  // Parse the inner object back to original structure
  for (const key in query_obj) {
      if (typeof query_obj[key] === 'string' && query_obj[key].includes('=')) {
          query_obj[key] = queryString.parse(query_obj[key]);
          let innerobj = query_obj[key]
          for (const key in innerobj) {
            innerobj['$'+key] = Number(innerobj[key]);
            delete innerobj[key]
          }
      }
  }
  
  console.log(query_obj);
    // console.log(q)
    const params = new URLSearchParams(searchParams);
    // params.set('name', 'muneeb');
    const asPath = `${pathname}?${q.toString()}`;
    router.replace(asPath, asPath, { shallow: true });
   }

  return (
    <div>
      <button onClick={check}>Check</button>
    </div>
  )
}

export default Builder

