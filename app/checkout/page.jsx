"use client";
import React from "react";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";
const Page = () => {
  const [Mounted, setMounted] = useState(false);

  useEffect(() => {
    toast.success("CheckOut and get instent delivery");
    setMounted(true);
  }, []);

  if (!Mounted) {
    return null;
  }

  return (
    <div className="mt-28 mr-5">
      <h2 className=" text-3xl m-auto ml-[36vw] text-blue-500"> CheckOut</h2>

      <div className="space-y-6 ml-8 mt-7">
        <h2 className="text-blue-600 text-xl">Delivery Details</h2>
        <input
          type="text"
          placeholder="Name"
          className="input input-bordered input-info w-full max-w-xs lg:mr-6"
        />

        <input
          type="text"
          placeholder="mobile number"
          className="input input-bordered input-info w-full max-w-xs lg:mr-6"
        />

        <input
          type="text"
          placeholder="Pincode"
          className="input input-bordered input-info w-full max-w-xs"
        />

        <input
          type="text"
          placeholder="Locality"
          className="input input-bordered input-info w-full max-w-xs"
        />

        <textarea
          className="textarea textarea-info h-[20vh] lg:m-24 mb-0"
          placeholder="Address (Area and Street)"
        ></textarea>
      </div>
      <button className="btn btn-info ml-7 md:ml-40 mt-8">SAVE AND DELIVER HERE</button>
    </div>
  );
};

export default Page;
