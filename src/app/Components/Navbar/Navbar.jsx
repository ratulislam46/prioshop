import React from 'react'
import { RiMenuFill } from "react-icons/ri";

export const Navbar = () => {

  const navLink =
    <>
      <li className="flex">
        <a rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 border-b-2 dark:border-">Link</a>
      </li>
      <li className="flex">
        <a rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 border-b-2 dark:border-">Link</a>
      </li>
      <li className="flex">
        <a rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 border-b-2 dark:border-">Link</a>
      </li>
    </>

  return (
    <header className="p-4 border-b border-blue-500 dark:bg-gray-100 dark:text-gray-900">
      <div className="container flex justify-between h-16 mx-auto">
        <a rel="noopener noreferrer" href="#" aria-label="Back to homepage" className="flex items-center p-2">
          <h1>Icon</h1>
        </a>
        <ul className="items-stretch hidden space-x-3 lg:flex">
         {navLink}
        </ul>
        <div className="items-center flex-shrink-0 hidden lg:flex">
          <button className="self-center px-8 py-3 rounded">Sign in</button>
          <button className="self-center px-8 py-3 font-semibold rounded dark:bg-violet-600 dark:text-gray-50">Sign up</button>
        </div>
        <button className="p-4 lg:hidden">
          <RiMenuFill />
        </button>
      </div>
    </header>
  )
}
