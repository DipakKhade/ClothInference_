import { Suspense ,lazy } from "react";
import ProductSection from "../components/ProductSection";
import { FaLongArrowAltRight } from "react-icons/fa";
import Link from "next/link";
import HomeProducts from "../components/HomeProducts";



export default function Home() {
  return (
    <>
      <div className="pt-24 text-2xl lg:text-4xl ml-6 lg:pt-28 pb-6 ">
        <div className="font-semibold text-blue-500 md:hidden">
          Cloth Inference
        </div>
        Your Closet, <span className="text-blue-500">Redefined</span>.
      </div>
      <h1 className="mb-6 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl">
        we strive to provide a seamless shopping experience
      </h1>
      <div>
      <Link href={'/explore'}>
      <button className="btn btn-neutral border-blue-400 mb-6 ml-10 bg-blue-500 text-white">explore <span><FaLongArrowAltRight /></span></button></Link>
      </div>

      <ProductSection />
     
     <div className="min-h-screen">
      
      
       <HomeProducts/>
      
     </div>
    </>
  );
}
