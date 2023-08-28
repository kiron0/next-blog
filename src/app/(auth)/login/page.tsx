"use client"

import React from 'react'
import { signIn } from 'next-auth/react'
import { FcGoogle } from "react-icons/fc";
import { HiOutlineArrowLongLeft } from "react-icons/hi2";
import Link from 'next/link';

export default function Login() {
          const googleSignIn = async () => {
                    await signIn('google', {
                              callbackUrl: '/dashboard',
                              redirect: true,
                    })
          }

          return (
                    <div className='flex flex-col justify-center items-center h-screen gap-5'>
                              <button
                                        onClick={googleSignIn}
                                        className="btn btn-outline rounded-full duration-500"
                              >
                                        <FcGoogle size={22} /> Continue with Google
                              </button>
                              <Link
                                        href='/'
                                        className="btn btn-outline rounded-full duration-500"
                              >
                                        <HiOutlineArrowLongLeft size={22} /> Home
                              </Link>
                    </div>
          )
}
