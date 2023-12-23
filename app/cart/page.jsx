"use client";
import React from "react";
import { useState, useEffect,Suspense,lazy } from "react";
import Link from "next/link";
const LazyImage = lazy(() => import('next/image'));
const page = () => {
  const [cartItem, setCartItem] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const arr = [];
        for (let i = 0; i <= localStorage.length; i++) {
          const keys = localStorage.key(i);
          arr.push(JSON.parse(localStorage.getItem(keys)));
          setCartItem(arr);
        }
      } catch (error) {
        console.error("Error fetching and parsing data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []); // Empty dependency array to run the effect only once

  if (isLoading) {
    return <p>Loading...</p>;
  }

  const domain =
    "https://cloth-inference-cd5c-git-main-dipak-khades-projects.vercel.app";
  const local = "http://localhost:3000";


  return (
 

<div className='mt-40 mb-48 min-h-screen flex flex-col'>
      <div className="relative overflow-x-auto sm:rounded-lg ">
        {cartItem.map((item) => (
          <div key={(Math.random() * 100)} className="bg-blue-200 shadow-md mb-4 p-4">
           
<div className="flex flex-col">

            <div className="flex items-center mb-2">
         

              <div className="w-1/4 font-medium">Product name :</div>
              <div className="md:font-medium text-gray-900 mb-2 ml-2">
              <Link href={`${domain}/${item && item.category}/${item && item.id}`}>
                {item && item.name}
              </Link>
            </div>
            </div>
            <div className="flex items-center mb-2">
              <div className="w-1/4 font-medium">Color:</div>
              <div className="w-3/4 flex">{item && item.color}
             
              </div>
            </div>
            <div className="flex items-center mb-2">
              <div className="w-1/4 font-medium">Category:</div>
              <div className="w-3/4">{item && item.category}</div>
            </div>
            <div className="flex items-center">
              <div className="w-1/4 font-medium">Price:</div>
              <div className="w-3/4">{item && item.price}</div>
            </div>
            <div className="flex items-center">
              <div className="w-1/4 font-medium">size:</div>
              <div className="w-3/4">-</div>
            </div>
            <div className="flex items-center">
              <div className="w-1/4 font-medium">Product id:</div>
              <div className="w-3/4">{item && item.id}</div>
            </div>
          
            <div className="px-6 py-4">
              <Link href={`${local}/${item && item.category}/${item && item.id}`} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                Edit
              </Link>
            </div>

            

</div>



          </div>
        ))}

        {!cartItem.length && <div className='m-6'>no cart item found</div>}
      </div>

      
      <button className="btn btn-info bg-blue-200 text-blue-800 hover:bg-blue-400 hover:text-white w-24 ml-4">
        Pay
      </button>



    </div>

    
  
  );
};

export default page;

// http://localhost:3000/tshirts/65845d3a8155cf38099e3857
// http://localhost:3000/tshirt/65845d3a8155cf38099e3857
