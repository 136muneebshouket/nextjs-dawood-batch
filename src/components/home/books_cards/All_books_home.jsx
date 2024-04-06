import React from "react";
import axios from "axios";
import Image from "next/image";
import Link from 'next/link';


async function getdata() {
  let data = await axios
    .get(`${process.env.SITE_URL}/api/bookroutes/fetch_books`)
    .then((result) => {
      //   console.log(result.data);
      return result.data.payload;
    })
    .catch((err) => {
      console.log(err.response);
    });
  return data;
}

const All_books_home = async () => {
  const books = await getdata();

  // console.log(books);

  return (
    <>
      <div className="container">
        {books.map((card, index) => {
          return (
            <>
              <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <Link href={card.title}>
                  <Image
                    src={card?.imgs_url[0].img_url}
                    width={500}
                    height={500}
                    class="rounded-t-lg"
                    alt="Picture of the author"
                  />
                </Link>
                <div class="p-5">
                  <Link href={card.title+'-'+card._id}>
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                     {card.title}
                    </h5>
                  </Link>
                  
                  <a
                    href="#"
                    class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Read more
                    <svg
                      class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default All_books_home;
