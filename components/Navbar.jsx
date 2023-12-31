"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { PiShoppingCartFill } from "react-icons/pi";
import profilelogo from "../imgdata/img.png"
import mainlogo from "../imgdata/mainlogo.png"
import { useSession } from "next-auth/react";
const Navbar = () => {

  
  const {data:session , status} = useSession()

  return (
    <div className="shadow-md w-[97vw] rounded-md fixed lg:w-[80vw] z-10 top-0 ml-1">
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <Link href="/">
            <Image
              src={mainlogo}
              width={50}
              quality={100}
              alt="logo"
              className="rounded-full"
            ></Image>
          </Link>

          <Link href={"/"}>
            <h1 className="hidden md:inline-flex lg:text-2xl text-blue-700 ml-4">Colth Inference</h1>
          </Link>
        </div>
        <div className="flex-none gap-1">
          
          {
            status=='authenticated' ? <Link href={"/signin"}>
            <div className=" text-blue-400 ml-2 hover:cursor-pointer hover:text-blue-700">{session.user.name.split(' ')[0]}</div>
          </Link> : <Link href={"/signin"}>
          <div className=" text-blue-400 ml-2 hover:cursor-pointer hover:text-blue-700">signin</div>
          </Link>
          }

          <Link href={'/cart'}>
          <PiShoppingCartFill className="text-2xl text-blue-400 ml-2 hover:cursor-pointer hover:text-blue-700"/>
          </Link>
          <div className="flex-none">
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
              {
                status == 'authenticated'? 
                <div className="w-10 rounded-full">
                  <Image
                    src={session.user?.image}
                    width={50}
                    height={50}
                    alt="img"
                  ></Image>
                </div>

                :
                
                <div className="w-10 rounded-full">
                  <Image
                    src={profilelogo}
                    width={50}
                    height={50}
                    alt="img"
                  ></Image>
                </div>

              }
                
              </div>
              <ul
                tabIndex={0}
                className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content rounded-box bg-blue-50 h-52 w-48 space-y-9"
              >
               

                <Link href={"/about"}>
                  <li className="ml-3 mt-6 text-blue-600 font-medium">About Us</li>
                </Link>
                <Link href={"/feedback"}>
                  <li className="ml-3 text-blue-600 font-medium">Feedback</li>
                </Link>

                <Link href={"/signin"}>
                
{
  status== 'authenticated' ?    <li className="ml-3 text-blue-600 font-medium"> signout </li> :  <li className="ml-3 text-blue-600 font-medium"> signin </li>
}

                 
                </Link>

              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
