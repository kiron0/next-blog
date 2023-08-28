"use client"

import React from 'react'
import { signIn } from 'next-auth/react'
import { FcGoogle } from "react-icons/fc";

export default function Login() {
          const googleSignIn = async () => {
                    await signIn('google', {
                              callbackUrl: '/',
                              redirect: true,
                    })
          }

          return (
                    <div className='flex justify-center items-center h-screen'>
                              <button
                                        onClick={googleSignIn}
                                        className="btn btn-outline rounded-full duration-500"
                              >
                                        <FcGoogle size={22} /> Continue with Google
                              </button>
                    </div>
          )
}
