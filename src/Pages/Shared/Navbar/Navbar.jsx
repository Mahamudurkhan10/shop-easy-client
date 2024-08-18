import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import { LuLogOut } from 'react-icons/lu';
import { FaShoppingCart } from 'react-icons/fa';

const Navbar = () => {
     const { user, logOut } = useContext(AuthContext)
     console.log(user);
     const navItems = <div className='flex flex-col text-xl lg:flex-row'>
          <NavLink className={({ isActive }) => isActive ? 'font-bold text-primary' : 'font-semibold'} to={'/'}> <li><a> Home</a></li></NavLink>
          <NavLink className={({ isActive }) => isActive ? 'font-bold text-primary' : 'font-semibold'} to={'/allProducts'}> <li><a> Products </a></li></NavLink>
          <NavLink className={({ isActive }) => isActive ? 'font-bold text-primary' : 'font-semibold'} to={'/contactUs'}> <li><a> Contact Us </a></li></NavLink>


     </div>
     return (
          <div className=' mt-3 mb-3'>
               <div className="navbar  lg:w-[1700px] lg:mx-auto ">
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
                         <div>
                              <Link to={'/'} className="btn btn-ghost text-2xl font-bold text-blue-600">  <FaShoppingCart></FaShoppingCart>    Shop <span className='text-2xl font-bold text-yellow-600'>Easy</span>  </Link>
                            
                         </div>
                         <div className="navbar-end hidden lg:flex">
                                   <ul className="menu menu-horizontal px-1">
                                        {navItems}
                                   </ul>
                              </div>
                    </div>

                    <div className="navbar-end">

                         {user ?
                              <>
                                   <div className="tooltip" data-tip={user?.displayName || 'not fount'}> <span> <img className="rounded-full size-10 mr-3 border-2 border-red-600" src={user?.photoURL || "https://i.ibb.co/YX7cm4v/bd886d7ccc6f8dd8db17e841233c9656.jpg"} alt="" /> </span></div>
                                   <button onClick={() => logOut()} className="btn btn-primary"> <LuLogOut></LuLogOut> LogOUt</button>
                              </>
                              :

                              <Link to={'/login'}> <button className='btn px-6  btn-info font-bold text-white'> Login </button> </Link>}

                    </div>
               </div>
          </div>
     );
};

export default Navbar;