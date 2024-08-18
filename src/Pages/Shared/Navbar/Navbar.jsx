import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
     const navItems = <div className='flex flex-col lg:flex-row'>
          <NavLink to={'/'}><li><a>Home</a></li></NavLink>
          <NavLink to={'/allProducts'}><li><a>All Products</a></li></NavLink>

        
     </div>
     return (
          <div className=' mb-3'>
               <div className="navbar bg-blue-100  container mx-auto ">
                    <div className="navbar-start">
                         <div className="dropdown">
                              <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                   <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor">
                                        <path
                                             strokeLinecap="round"
                                             strokeLinejoin="round"
                                             strokeWidth="2"
                                             d="M4 6h16M4 12h8m-8 6h16" />
                                   </svg>
                              </div>
                              <ul
                                   tabIndex={0}
                                   className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[10] mt-3 w-52 p-2 shadow">
                                        {navItems}
                              </ul>
                         </div>
                         <a className="btn btn-ghost text-xl">daisyUI</a>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                         <ul className="menu menu-horizontal px-1">
                            {navItems}
                         </ul>
                    </div>
                    <div className="navbar-end">
                         <a className="btn">Button</a>
                    </div>
               </div>
          </div>
     );
};

export default Navbar;