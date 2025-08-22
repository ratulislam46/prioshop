import Link from 'next/link'
import React from 'react'

export const Navbar = () => {

  const navLinks =
    <>
      <li><Link href='/'>Home</Link></li>
      <li><Link href='/products'>Products</Link></li>
      <li><Link href='/addproduct'>Add Products</Link></li>
    </>

  return (
    <div className="navbar shadow-sm dark:bg-gray-100 dark:text-gray-900">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content rounded-box z-1 mt-3 w-52 p-2 shadow bg-white">
            {navLinks}
          </ul>
        </div>
        <Link href='/' className="text-xl font-bold">Prio-Shop</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navLinks}
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Button</a>
      </div>
    </div>
  )
}
