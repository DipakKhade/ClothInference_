"use client";
import React, { useState, useEffect, lazy, Suspense } from "react";
import ProductSection from "../../../components/ProductSection";
import classnames from "classnames";
import toast from "react-hot-toast";

const LazyImage = lazy(() => import("next/image"));

function Page({ params }) {
  const [dress, setDress] = useState(null);
  const [Mounted, setMounted] = useState(false);
  const [Loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      setMounted(true);
      const domain =
        "https://cloth-inference-cd5c-git-main-dipak-khades-projects.vercel.app";
      const local = "http://localhost:3000";
      const res = await fetch(`${domain}/api/products`, {
        next: {
          revalidate: 60,
        },
      });
      const data = await res.json();
      const filteredDress = data["products"].filter(
        (obj) => obj._id === params.id
      )[0];
      setDress(filteredDress);
      setLoading(false)
    };

    fetchData();
  }, [params.id]);

  if (!dress) {
    return <p className="mt-[45vh] ml-[42vw] min-h-screen text-blue-600">Loading...</p>;
  }

  if (Loading) {
    return <p className="mt-8 ml-60 text-blue-500">Loading...</p>;
  }

  const addToCart = () => {
    localStorage.setItem(
      dress._id,
      JSON.stringify({
        name: dress.name,
        price: dress.price,
        color: dress.color,
        category: dress.category,
        id: dress._id,
        image: dress.img,
      })
    );
    toast.success("added to cart");
  };

  if (!Mounted) {
    return null;
  }

  return (
    <div className="mt-8 mr-9 min-h-screen">
      <div className="mt-20 mb-9">
        <ProductSection />
      </div>
      <div className="mt-0">
        <section className="text-gray-600 body-font overflow-hidden">
          <div className="container px-5 py-2 mx-auto">
            <div className="lg:w-4/5 mx-auto flex flex-wrap">
              <Suspense fallback={<p>Loading...</p>}>
                <LazyImage
                  src={dress.img}
                  width={300}
                  height={400}
                  alt="img"
                  className="w-[300px] h-[400px] rounded-md m-auto"
                />
              </Suspense>
              <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                <h2 className="text-sm title-font text-gray-500 tracking-widest">
                  Cloth Inference
                </h2>
                <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                  {dress.name}
                </h1>

                <p className="leading-relaxed">{dress.desc}</p>
                <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                  <div className="flex">
                    <span className="mr-3">
                      {" "}
                      Available Colors : {dress.color}
                    </span>
                    <div
                      className={classnames({
                        "w-5 h-5 rounded-full  m-2": true,
                        "bg-red-500": dress.color == "Red",
                        "bg-black": dress.color == "Black",
                        "bg-yellow-500": dress.color == "Yellow",
                        "bg-green-500": dress.color == "Green",
                        "bg-blue-600": dress.color == "Blue",
                      })}
                    ></div>
                  </div>
                  <div className="flex ml-6 items-center">
                    <span className="mr-3">Size</span>
                    <div className="relative">
                      <select className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10">
                        <option>SM</option>
                        <option>M</option>
                        <option>L</option>
                        <option>XL</option>
                      </select>
                      <span className="absolute right-0 top-0 h-full w-10 text-center text-blue-600 pointer-events-none flex items-center justify-center">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          className="w-4 h-4"
                          viewBox="0 0 24 24"
                        >
                          <path d="M6 9l6 6 6-6"></path>
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex">
                  <span className="title-font font-medium text-2xl text-blue-900">
                    ₹{dress.price}
                  </span>
                  <button
                    onClick={addToCart}
                    className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Page;
