'use client'
import React, { useState, useEffect ,Suspense,lazy} from "react";
import Link from "next/link";
import ProductSection from "../../components/ProductSection";
const LazyImage=lazy(()=>import('next/image'))
const ShirtsPage = () => {
  const [Data, SetData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const domain ='https://cloth-inference-cd5c.vercel.app/'
        const local='http://localhost:3000'
        const res = await fetch(`${domain}/api/products`);
        const alldata = await res.json();
       
        SetData(alldata["products"]);
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

 <Suspense fallback={<p>loading ...</p>} >
 {/* @js-except-error Async server component */}
<div className=" flex flex-wrap-reverse  min-h-screen">
    
      {Data.map((t,index) => (
        <div key={t._id}>
          <div className="mt-12 hover:shadow-lg md:w-80 w-80 ml-8 md:ml-10 flex">
              <div className="card card-compact bg-base-100 shadow-xl">

              <Suspense fallback={<p>Loading...</p>}>
                  <Link href={`/explore/${t._id}`} passHref>
                  
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
                <Link href={`/explore/${t._id}`} passHref>
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
    </Suspense>
    </>
  
  );
};

export default ShirtsPage;
