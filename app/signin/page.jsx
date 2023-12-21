"use client";
import React from "react";
import Link from "next/link";
// import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
// import { useState } from "react";
// import toast from "react-hot-toast";

const page = () => {
//react hook form
const {
  register,
  handleSubmit,
  reset,
  formState: { errors ,isSubmitting},
} = useForm();

const Submission=()=>{

}

  

  return (
    <div className="bg-white mt-24 z-0">
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 z-10 relative">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl">
          we strive to provide a seamless shopping experience
        </h1>
        <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 ">
          Our platform is designed with you in mind, offering a user-friendly
          interface that ensures a delightful journey from browsing to checkout.
        </p>
        <form
          onSubmit={handleSubmit(Submission)}
          className="w-full max-w-md mx-auto"
        >
          <label
            htmlFor="default-email"
            className="mb-2 text-sm font-medium text-gray-900 sr-only "
          >
            Email sign-up
          </label>
          <div className="relative space-y-4">
            <input
              {...register("name")}
              type="name"
              id="name"
              name="name"
              className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-white focus:ring-blue-500 focus:border-blue-500   "
              placeholder="Name"
              required
            />

            <input
              {...register("email")}
              type="email"
              id="email"
              name="email"
              className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-white focus:ring-blue-500 focus:border-blue-500"
              placeholder="Email"
              required
            />

            <input
              {...register("password")}
              type="password"
              id="password"
              name="password"
              className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-white focus:ring-blue-500 focus:border-blue-500"
              placeholder="Password"
              required
            />

            <div>
              <button type="submit" className="btn btn-active btn-primary">
                Sign Up
              </button>
            </div>
          </div>

          <p className="text-sm font-light text-gray-500 mt-6">
            have an Account
            <Link
              href={"/login"}
              className="font-medium text-black hover:underline dark:text-primary-500"
            >
              Log In
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default page;
