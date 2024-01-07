"use client";
import React from "react";
import { useState, useEffect,Suspense,lazy } from "react";
import Link from "next/link";
import { Router, useRouter } from "next/navigation";
const LazyImage = lazy(() => import('next/image'));

const Page = () => {
  
const router = useRouter()
  const [cartItem, setCartItem] = useState(null);
  const [Loading, setLoading] = useState(true)

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
        setLoading(false);
      }
    };

    fetchData();
  }, []); // Empty dependency array to run the effect only once

  if (Loading) {
    return <div className="md:mt-60 md:ml-48 text-blue-600 mb-80 mt-40 ml-8 flex">fetching your cart <span className="loading loading-spinner loading-sm ml-3"></span></div>;
  }

  const domain =
    "https://cloth-inference-cd5c-git-main-dipak-khades-projects.vercel.app";
  const local = "http://localhost:3000";


  const removeFromCart = (itemId) => {
    // console.log(itemId)
    const ar = [];
  
    for (let i = 0; i < localStorage.length; i++) {
      const localkeys = localStorage.key(i);
      const localitems = JSON.parse(localStorage.getItem(localkeys));
 
      if (localitems && localitems.id) {
        ar.push(localitems);
      }
    }
  
    const filteredArray = ar.filter((item) => item.id !== itemId);
  localStorage.clear();

  filteredArray.map((fitem)=>{
    localStorage.setItem(fitem.id, JSON.stringify(fitem));
  })
window.location.reload();
  };

  
  

  return (
 


<div className='mt-24 mb-48 min-h-screen flex flex-col'>
<h1 className="font-extrabold text-xl m-6 text-green-500">Your Cart</h1>
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
          
            <div className="px-6 py-4 flex space-x-8">
              <Link href={`${domain}/${item && item.category}/${item && item.id}`}  className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                Edit
              </Link>
              <button
              onClick={()=>removeFromCart(item && item.id)}
             className="text-red-500 hover:underline">
                Remove from Cart
              </button>
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

export default Page;

// http://localhost:3000/tshirts/65845d3a8155cf38099e3857
// http://localhost:3000/tshirt/65845d3a8155cf38099e3857
