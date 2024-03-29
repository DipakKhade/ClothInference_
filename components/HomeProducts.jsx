'use client';
import { useState, useEffect, Suspense, lazy } from "react";
import Link from "next/link";


const LazyImage = lazy(() => import("next/image"));

const HomeProducts = () => {
  const [trendingProducts, setTrendingProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const local = "http://localhost:3000";
      const domain ='https://cloth-inference-cd5c.vercel.app/'
      try {
        const res = await fetch(`${domain}/api/products`);
        const alldata = await res.json();
        const tr = alldata["products"].filter((item) => item.category === "trending");
        setTrendingProducts(tr);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <p className="mt-8 ml-60 text-blue-500">Loading...</p>;
  }

  return (
    <div>
      <div className="lg:flex lg:flex-wrap lg:space-x-11 content-center lg:ml-24 mt-2 ml-4 w-[90vw] md:w-full">
        {trendingProducts.map((t, index) => (
          <div key={t._id}>
            <div className="mt-12 hover:shadow-lg md:ml-10">
              <div className="card card-compact bg-base-100 shadow-xl w-86 md:w-96">
                <Suspense fallback={<p>Loading</p>}>
                  <Link href={`/trending/${t._id}`} passHref>
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
                  <Link href={`/trending/${t._id}`} passHref>
                    <h2 className="card-title">{t.name}</h2>
                    <h2 className="text-xl">₹{t.price}</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio ab fuga excepturi.</p>
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
      <div className="join grid grid-cols-2 mt-6 md:ml-44 md:w-[60vw] ml-12 ">
      <Link href={'/'}>

  <button className="join-item btn btn-outline">Previous page</button>
      </Link>
      <Link href={'/trending'}>
  <button className="join-item btn btn-outline md:ml-80">Next</button>
  </Link>
</div>
    </div>
  );
};

export default HomeProducts;
