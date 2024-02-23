"use client"
import axios from 'axios';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const Dropdown = () => {
  const [frontValue, setFrontValue] = useState('Menu');
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [user, setUser] = useState('');

  // Use async/await for clarity and maintainability
  useEffect(()=> {
    const fetchDataFromUser = async() => {
      const res = await axios.get('/api/user/me');
      setUser(res.data.data._id);
    }
  }, []);

  const toggleDropdown = () => setDropdownOpen(!isDropdownOpen);

  return (
    <div className="relative inline-block text-left">
      <button
        id="dropdownDefaultButton"
        onClick={toggleDropdown}
        className="text-white btn hover:bg-pruple-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
        type="button"
      >
        {frontValue}
        <svg
          className="w-2.5 h-2.5 ms-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>

      {/* Use conditional rendering for visibility and styling */}
      {isDropdownOpen && (
        <div
          id="dropdown"
          className={`flex flex-col justify-start items-start gap-1 py-1 px-2 z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 absolute`}
        >
          {user && (
            <Link href="/profile">
            <button className="hover:bg-purple-500 w-full">Profile</button>
            </Link>
          )}

          {user && (
            <button className="hover:bg-purple-500 w-full">Log-out</button>
          )}

          {!user && (
            <Link href="/log-in">
            <button className="hover:bg-purple-500 w-full">
              Log-in
            </button>
            </Link>
          )}

          {!user && (
            <Link href="/sign-up">
            <button className="hover:bg-purple-500 w-full">
              Sign-up
            </button>
            </Link>
          )}
        </div>
      )}
    </div>
  );
}

export default Dropdown;
