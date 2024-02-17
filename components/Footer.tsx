import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-dark-300 rounded-lg shadow mx-10 max-md:mx-2">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm flex text-gray-500 sm:text-center">© 2023 <Link href="https://flowbite.com/"><p className="hover:underline">Blogify™</p></Link>. All Rights Reserved.</span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 sm:mt-0">
          <li>
            <Link href="#"><p className="hover:underline me-4 md:me-6">About</p></Link>
          </li>
          <li>
            <Link href="#"><p className="hover:underline me-4 md:me-6">Privacy Policy</p></Link>
          </li>
          <li>
            <Link href="#"><p className="hover:underline me-4 md:me-6">Licensing</p></Link>
          </li>
          <li>
            <Link href="#"><p className="hover:underline">Contact</p></Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
