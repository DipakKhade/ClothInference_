"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import classnames from "classnames";

const ProductSection = () => {
  const currentPath = usePathname();
  // console.log(currentPath, Link.href);

 const Links=[
  {label:"Trending", href:'/'},
   {label: "T-Shirts",href:'/tshirts'},
   {label: "Shirts",href:'/shirts'},
   {label: "Dresses",href:'/dresses'},
   {label: "Bottoms",href:'/bottoms'},
   {label: "Accessories",href:'/accessories'}
 ]
  return (
    <div className="flex flex-col lg:mt-4 p-4 bg-gray-200 lg:flex-row space-x-8 font-semibold">
      {Links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={classnames({
            "text-blue-800": currentPath === link.href,
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
