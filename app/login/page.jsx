"use client";
import { useState, useEffect } from 'react'
import mainlogo from "../../imgdata/mainlogo.png";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import connectToMongoDB from "../../lib/mongodb";
import User from "../../models/users"
import { FieldValues, useForm } from 'react-hook-form';
import toast from "react-hot-toast";

const Page = () => {
  const [isSubmtting, SetIsSubmtting] = useState(false)
const router = useRouter()
const [Mounted, setMounted] = useState(false);

const {
  register,
  handleSubmit,
  reset,
  formState: { errors ,isSubmitting},
} = useForm();

  useEffect(() => {
    // toast.success("CheckOut and get instent delivery");
    setMounted(true);
  }, []);

  if (!Mounted) {
    return null;
  }



const Submission = async (data) => {
  try {
    await connectToMongoDB();
    const { password } = data; // Fix: Use the 'data' parameter
    const user = await User.findOne({ email });
    const passwordMatch = await password === user.password;
    console.log(user); // Log the user before returning
    SetIsSubmtting(true); // Fix: Use setIsSubmitting to update the state
    return NextResponse.json({ user }); //
  } catch (error) {
    toast.error('some error occured')
  }
}


  return (
    <div className='min-h-screen'>
      <div className="bg-blue-50 mt-24 lg:mt-8 lg:ml-8">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0  mr-3">
          <Link
            href={"/"}
            className="flex items-center mb-6 text-2xl font-semibold text-gray-900"
          >
            <Image
              src={mainlogo}
              width={50}
              height={50}
              alt="logo"
              className="rounded-full mr-2"
            ></Image>
            Cloths Inference
          </Link>
          <div className="w-full p-6 text-blue-500 rounded-lg shadow dark:border md:mt-0 sm:max-w-md   space-y-4 md:space-y-6">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
                Log in to your account
              </h1>
              <form onSubmit={handleSubmit(Submission)} className="space-y-4 md:space-y-6" action="#">
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Your email
                  </label>
                  <input
                    {...register('email',{
                required:'Email is required'
              })
             
            }
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                    placeholder=""
                    required=""
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Password
                  </label>
                  <input
                    {...register('password',{
                required:'please enter your password'
              })
             
            }
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                    required=""
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-start">
                    
                   
                  </div>
                  <Link
                    href={'/forgotpassword'}
                    className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Forgot password?
                  </Link>
                </div>

                <button
                  type="submit"
                  className="w-full text-white bg-blue-600 mt-6 bg-primary-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
                >
                  Log in
                </button>
                {/* {
    error && 
<div className='bg-red-700 py-1 px-3 text-white'>{error}</div>
} */}

                <div className="text-sm font-light text-gray-500 ">
                  Dont have an account yet?
                  <Link href={"/signin"}  className="font-medium text-black hover:underline ml-2">
                   
                     
                      Sign up
                    
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      
    </div>
  );
};

export default Page;
