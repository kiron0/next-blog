"use client"

import React from 'react'
import Image from 'next/image';
import { signOut } from "next-auth/react";
import toast from 'react-hot-toast';

export default function HomePage({ session }: any) {
          const user = session?.user;
          return (
                    <div className="flex flex-col justify-center items-center h-screen bg-gray-200">
                              <div className="text-center card md:w-1/2 lg:w-1/4 shadow-lg select-none bg-gray-100 p-4 md:p-6 mx-3 mb-6">
                                        <div className='flex justify-center items-center pb-5'>
                                                  <Image src={user?.image} alt="user image" width={100} height={100} className='rounded-full border-2 border-success' />
                                        </div>
                                        <h1 className="md:text-xl">Hi, <span className='font-semibold'>{user?.name}</span></h1>
                                        <p className="md:text-xl">Your email is <span className='font-semibold'>{user?.email}</span></p>
                              </div>
                              <button className='btn btn-sm md:btn-md btn-outline' onClick={() => {
                                        signOut({ callbackUrl: "/login", redirect: true })
                                        toast.success('Successfully sign out!')
                              }
                              }>
                                        Sign Out
                              </button>
                    </div>
          )
}
