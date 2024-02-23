'use client'
import Link from 'next/link';
import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation'
import toast, { Toaster } from 'react-hot-toast';


const SignIn = () => {
  const router = useRouter()
  const[error,setError] = useState("")
  const [email, setEmail] = useState("")
  const [username, setUsername] = useState("")
  const [firstname, setFirstname] = useState("")
  const [lastname, setLastname] = useState("")
  const [password, setPassword] = useState("")


  const createAccount = async (e:any) => {
    e.preventDefault()

    try {
      const userData = {
        email,
        username,
        firstname,
        lastname,
        password
      };

      const response = await axios.post("/api/user/sign-up", userData);
      console.log(response.data)
      console.log(response.data.message)
      setError(response.data.message)
      if(response.data.success){
        localStorage.setItem("token",response.data.token)
        return router.push('/log-in')
      }
      
    } catch (error:any) {
      console.log(error)
    }
  }

  return (
    <section className="bg-dark-300 ">
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <Link href="/" className="flex items-center mb-6 text-2xl font-semibold text-white">
        <img className="w-8 h-8 mr-2" src="/icons/nerd.png" alt="logo" />
        Blogify
      </Link>
      <div className="w-full bg-dark-400 rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-white md:text-2xl ">
            Create an account
          </h1>
          <form className="space-y-4 md:space-y-6">
          <div>
              <label htmlFor="firstname" className="block mb-2 text-sm font-medium text-white">Firstname</label>
              <input
                type="text"
                name="firstname"
                id="firstname"
                value={firstname}
                onChange={(e) => (setFirstname(e.target.value))}
                className="border border-gray-300 text-white bg-transparent sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Bhanu"
                required
              />
            </div>
            <div>
              <label htmlFor="lastname" className="block mb-2 text-sm font-medium text-white">Lastname</label>
              <input
                type="text"
                name="lastname"
                id="lastname"
                value={lastname}
                onChange={(e) => (setLastname(e.target.value))}
                className="border border-gray-300 text-white bg-transparent sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Singh"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-white">Your email</label>
              <input
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={(e) => (setEmail(e.target.value))}
                className="border border-gray-300 text-white bg-transparent sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="name@company.com"
                required
              />
            </div>
            <div>
              <label htmlFor="username" className="block mb-2 text-sm font-medium text-white">username</label>
              <input
                type="text"
                name="text"
                id="username"
                value={username}
                onChange={(e) => (setUsername(e.target.value))}
                placeholder="username"
                className="bg-transparent border border-gray-300 text-white sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                required
              />
            </div>
            <div>
              <label htmlFor="confirm-password" className="block mb-2 text-sm font-medium text-white">Confirm password</label>
              <input
                type="password"
                name="confirm-password"
                id="confirm-password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => (setPassword(e.target.value))}
                className="bg-transparent border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
            </div>
            {
              error && <p className='text-red-500'>{error}</p>
            }
            <button
              onClick={(e) => createAccount(e)}
              className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center btn">
              Create an account
            </button>
            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
              Already have an account? <Link href="log-in" className="font-medium text-primary-600 hover:underline text-blue-500">Login here</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  </section>
  );
}

export default SignIn;
