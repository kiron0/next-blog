import React from 'react'
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/options';
import Image from 'next/image';
import Link from 'next/link';
import { BiHomeHeart } from 'react-icons/bi';

export default async function Dashboard() {
          const session = await getServerSession(authOptions);
          const user = session?.user;

          return (
                    <div className="flex flex-col justify-center items-center h-screen bg-gradient-to-br from-pink to-blue">
                              <div className="text-center card md:w-1/2 lg:w-1/4 shadow-lg select-none bg-gray-200 p-4 py-12 md:p-6 md:py-12 mx-3 mb-6">
                                        <div className='flex justify-center items-center pb-5'>
                                                  <Image src={user?.image as string} alt="user image" width={100} height={100} className='rounded-full border-2 border-success' />
                                        </div>
                                        <h1 className="md:text-xl">Hi, <span className='font-semibold'>{user?.name}</span></h1>
                                        <p className="text-xs md:text-sm lowercase font-semibold pb-4">@{user?.email?.split('@')[0]}</p>
                                        <p className="md:text-xl">Your email is <span className='font-semibold'>{user?.email}</span></p>
                              </div>
                              <Link href={'/'} className='btn btn-sm md:btn-md btn-outline text-white'>
                                        <BiHomeHeart size={20} /> Home
                              </Link>
                    </div>
          )
}
