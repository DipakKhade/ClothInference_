'use client'
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import ProductSection from "../../components/ProductSection";
const DressPage = () => {
  const [dressesProducts, setDressesProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const domain ='https://cloth-inference-cd5c-git-main-dipak-khades-projects.vercel.app'
        const res = await fetch(`${domain}/api/products`);
        const alldata = await res.json();
        const dresses = alldata["products"].filter((item) => item.category === "dresses");
        setDressesProducts(dresses);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
<>
<div className="mt-24">
    <ProductSection/>
    </div>
    <div className="lg:flex lg:flex-wrap lg:space-x-11 content-center lg:ml-24 w-[80vw] md:w-full">
      {dressesProducts.map((t,index) => (
        <div key={t._id}>
          <div className="mt-12 hover:shadow-lg md:ml-10 ml-6">
              <div className="card card-compact bg-base-100 shadow-xl w-86 md:w-96">

            <Link href={`/dresses/${t._id}`} passHref>
               
                  <Image
                     src={t.img}
                  width={300}
                  height={400}
                  alt="img"
                  className="w-[300px] h-[400px] rounded-md m-auto"
                  priority={index == 0 && index==1}
                  />
               
                  </Link>
                <div className="card-body">
                  <h2 className="card-title">{t.name}</h2>
                  <h2 className="text-xl">₹{t.price}</h2>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Odio ab fuga excepturi.
                  </p>
                  <div className="card-actions justify-end">
                    <Link href={`/checkout`} passHref>
                      <button className="btn bg-blue-400">Buy Now</button>
                    </Link>
                  </div>
                </div>
              </div>
            
          </div>
        </div>
      ))}
    </div>
    </>
  );
};

export default DressPage;
