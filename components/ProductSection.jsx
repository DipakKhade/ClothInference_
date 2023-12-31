"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import classnames from "classnames";

const ProductSection = () => {
  const currentPath = usePathname();
  // console.log(currentPath, Link.href);

 const Links=[
  {label:"Home",href:'/'},
  {label:"Trending", href:'/trending'},
   {label: "T-Shirts",href:'/tshirts'},
   {label: "Shirts",href:'/shirts'},
   {label: "Dresses",href:'/dresses'}
 ]
  return (
    <div className="flex flex-col w-[96vw] md:w-[80vw] lg:mt-4 p-4 bg-gray-200 lg:flex-row space-x-8 font-semibold">
      {Links.map((link,index) => (
        <Link
          key={link.href}
          href={link.href}
          className={classnames({
            "ml-8":index==0,
            "text-blue-800": currentPath === link.href ,
            "text-blue-400": currentPath !== link.href,
            "hover:transition-colors hover:text-blue-600":true
          })}
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
};

export default ProductSection;
