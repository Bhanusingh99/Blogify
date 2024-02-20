'use client'
import axios from 'axios'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

const LogIn = () => {
  const router = useRouter();

  const [email,setEmail]= useState("");
  const [password,setPassword]= useState("");


  async function logIn(e:any){
    e.preventDefault()

    try {
     const userdate = {
      email,
      password
     }
    console.log(userdate)
    const response =await axios.post('/api/user/log-in',userdate);
    console.log(response)
    if(response.statusText === "OK"){
      return router.push("/")
    }

    } catch (error:any) {
      console.log(error)
      throw error
    }
  }

  return (
    <section className="bg-dark-200">
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <Link href="#" className="flex items-center mb-6 text-2xl font-semibold text-white">
        <img className="w-8 h-8 mr-2" src="/icons/nerd.png" alt="logo" />
        Blogify
      </Link>
      <div className="w-full bg-dark-400 rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl text-white">
            Sign in to your account
          </h1>
          <form className="space-y-4 md:space-y-6" action="#">
            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-white">email</label>
              <input
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-transparent border border-gray-300 text-white sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                placeholder="Bhanu@gmail.com"
                required
              />
            </div>
            <div>
              <label htmlFor="password" className="block mb-2 text-sm font-medium text-white dark:text-white">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="bg-transparent border border-gray-300 text-white sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                required
              />
            </div>
            <button
              onClick={(e) => logIn(e)}
              className="w-full text-white btn bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              Sign in
            </button>
            <p className="text-sm font-light text-gray-500 ">
              Don’t have an account yet? <Link href="sign-up" className="font-medium text-blue-500 hover:underline ">
                Sign up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  </section>
  )
}

export default LogIn