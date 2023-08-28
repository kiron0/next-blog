"use client"

import { signOut } from 'next-auth/react'
import Link from 'next/link'
import React from 'react'
import toast from 'react-hot-toast'
import { IoMdLogOut } from 'react-icons/io'
import { PiHandWavingBold } from 'react-icons/pi';
import { MdSpaceDashboard } from 'react-icons/md';

export default function HomePage({ user }: any) {
          return (
                    <div className='flex flex-col justify-center items-center h-screen bg-gradient-to-br from-pink to-blue'>
                              <h1 className='text-xl md:text-3xl font-semibold text-center text-white'>Welcome to Next Blog</h1>
                              <p className='text-xs md:text-sm text-center text-white'>by <span className='font-semibold'>TOUFIQ HASAN KIRON</span></p>
                              {
                                        user?.email ? (
                                                  <div className='mt-4'>
                                                            <Link href={'/dashboard'} className='btn btn-sm md:btn-md btn-outline text-white'>
                                                                      <MdSpaceDashboard size={20} />Dashboard
                                                            </Link> <br />
                                                            <button className='btn btn-sm md:btn-md btn-outline text-white mt-3 flex mx-auto' onClick={() => {
                                                                      signOut({ callbackUrl: "/", redirect: true })
                                                                      toast.success('Successfully sign out!')
                                                            }
                                                            }>
                                                                      <IoMdLogOut size={20} /> Log Out
                                                            </button>
                                                  </div>
                                        ) : (
                                                  <Link href={'/login'} className='btn btn-sm md:btn-md btn-outline mt-4 flex items-center gap-2 text-white'>
                                                            Get Started <PiHandWavingBold size={20} />
                                                  </Link>
                                        )
                              }
                    </div>
          )
}
