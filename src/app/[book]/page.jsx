// "use client";
import React from "react";
import axios from "axios";

// import { useRouter, useSearchParams, usePathname } from "next/navigation";

async function getdata(id) {
  // console.log(id +"-")
  let data = await axios
    .get(`${process.env.SITE_URL}/api/bookroutes/singlebook_route`,{params:{bookid:id}})
    .then((result) => {
      //   console.log(result.data);
      return result.data.payload;
    })
    .catch((err) => {
      console.log(err.response);
    });
  return data;
}

const page = async ({ params }) => {
  // let router = useRouter();
  // let params = useSearchParams();
  // let path = usePathname();
  console.log(params)
  let id = params.book.split("-")[params.book.split("-").length - 1];
  // console.log(id)
  const book = await getdata(id);

  // console.log(book);

  return (
    <div>
      <div class="bg-gray-100 dark:bg-gray-800 py-8">
        <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex flex-col md:flex-row -mx-4">
            <div class="md:flex-1 px-4">
              <div class="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
                {book?.imgs_url?.map((v) => {
                  return (
                    <>
                      <img
                        class="w-full h-full object-cover"
                        src={v.img_url}
                        alt="Product Image"
                      />
                    </>
                  );
                })}
              </div>
              <div class="flex -mx-2 mb-4">
                <div class="w-1/2 px-2">
                  <button class="w-full bg-gray-900 dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700">
                    Add to Cart
                  </button>
                </div>
                <div class="w-1/2 px-2">
                  <button class="w-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white py-2 px-4 rounded-full font-bold hover:bg-gray-300 dark:hover:bg-gray-600">
                    Add to Wishlist
                  </button>
                </div>
              </div>
            </div>
            <div class="md:flex-1 px-4">
              <h2 class="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                {book?.title}
              </h2>
              <p class="text-gray-600 dark:text-gray-300 text-sm mb-4">
                {book?.description}
              </p>
              <div class="flex mb-4">
                <div class="mr-4">
                  <span class="font-bold text-gray-700 dark:text-gray-300">
                    Price:
                  </span>
                  <span class="text-gray-600 dark:text-gray-300">
                    {book?.price}
                  </span>
                </div>
                <div>
                  <span class="font-bold text-gray-700 dark:text-gray-300">
                    Availability:
                  </span>
                  <span class="text-gray-600 dark:text-gray-300">In Stock</span>
                </div>
              </div>

              <div>
                <span class="font-bold text-gray-700 dark:text-gray-300">
                  Product Description:
                </span>
                <p class="text-gray-600 dark:text-gray-300 text-sm mt-2">
                  {book?.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
