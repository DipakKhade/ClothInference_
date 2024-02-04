'use client'
import React, { useState, useEffect ,Suspense} from "react";
import Link from "next/link";
import ProductSection from "../../components/ProductSection";
import { lazy } from "react";
const LazyImage=lazy(()=>import('next/image'))
const ShirtsPage = () => {
  const [shirtProducts, setShirtProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const domain ='https://cloth-inference-cd5c.vercel.app/'
        const local='http://localhost:3000'
        const res = await fetch(`${domain}/api/products`);
        const alldata = await res.json();
        const shirts = alldata["products"].filter((item) => item.category === "shirts");
        setShirtProducts(shirts);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
<div className="mt-24">
    <ProductSection/>
    <div className="lg:flex lg:flex-wrap lg:space-x-11 content-center lg:ml-24 w-[90vw] ml-3 md:w-full">
      {shirtProducts.map((t,index) => (
        <div key={t._id}>
          <div className="mt-12 hover:shadow-lg md:w-full md:ml-10 ml-6">
              <div className="card card-compact bg-base-100 shadow-xl w-86 md:w-96">
              <Suspense fallback={<p>Loading...</p>}>
                  <Link href={`/shirts/${t._id}`} passHref>
                  
                      <LazyImage
                        src={t.img}
                        width={300}
                        height={400}
                        alt="img"
                        className="w-[300px] h-[400px] rounded-md m-auto"
                        priority={index === 0 && index === 1}
                      />
                
                  </Link>
                </Suspense>
                <div className="card-body">
                <Link href={`/shirts/${t._id}`} passHref>
                  <h2 className="card-title">{t.name}</h2>
                  <h2 className="text-xl">₹{t.price}</h2>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Odio ab fuga excepturi.
                  </p>
                </Link>
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
    </div>
  );
};

export default ShirtsPage;
