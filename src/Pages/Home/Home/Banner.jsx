
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
const Banner = () => {
     const user = true
     return (
          <div className='container mx-auto'>
               <Swiper
                    cssMode={true}
                    navigation={true}
                    pagination={true}
                    mousewheel={true}
                    keyboard={true}
                    modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                    className="mySwiper"
               >
                    <SwiperSlide>
                         <img className=' h-[600px] relative opacity-80 rounded-2xl lg:w-full' src="https://i.ibb.co/85LksVN/1711465034587.jpg" alt="" />

                         <div className='text-center lg:w-4/5 absolute -mt-[400px] '>
                              <h1 className='lg:text-4xl text-3xl   font-extrabold text-yellow-500'>Your One-Stop Tech Shop</h1>
                              <h1 className='lg:text-xl text-lg   font-semibold text-slate-900 lg:w-3/5 mx-auto'>Your one-stop destination for cutting-edge technology. Explore our curated collection of the latest gadgets and devices. Innovation and convenience, all in one place</h1>
                              {
                                   user ? <>
                                        <button className='btn  border-b-4 bg-blue-500 uppercase text-white text-2xl font-semibold mt-5 '> WelCome </button>
                                   </> : <>
                                        <NavLink to={'/login'}><button className='btn btn-outline  border-b-4 btn-error uppercase text-white text-2xl font-semibold mt-5 '> Join Us  </button></NavLink>
                                   </>
                              }
                         </div>
                    </SwiperSlide>
                    <SwiperSlide><img className=' h-[600px] relative opacity-100 rounded-2xl lg:w-full' src="https://i.ibb.co/6gjmRN8/Desktop-2560x2040-3-2160x.webp" alt="" />
                         <div className='text-center lg:w-4/5  absolute -mt-[400px] '>
                              <h1 className='lg:text-4xl text-3xl   font-extrabold text-yellow-700'>Your One-Stop Tech Shop</h1>
                              <h1 className='lg:text-xl text-lg   font-semibold text-slate-50 lg:w-3/5 mx-auto'>Your one-stop destination for cutting-edge technology. Explore our curated collection of the latest gadgets and devices. Innovation and convenience, all in one place</h1>
                              {
                                   user ? <>
                                        <button className='btn  border-b-4  bg-slate-500 uppercase text-white text-2xl font-semibold mt-5 '> WelCome </button>
                                   </> : <>
                                        <NavLink to={'/login'}><button className='btn btn-outline  border-b-4 btn-error uppercase text-white text-2xl font-semibold mt-5 '> Join Us  </button></NavLink>
                                   </>
                              }
                         </div></SwiperSlide>
                    <SwiperSlide><img className=' h-[600px] relative opacity-100 rounded-2xl lg:w-full' src="https://i.ibb.co/S56HXw0/1679638788377.jpg" alt="" />
                         <div className=' text-center   lg:w-4/5 absolute -mt-[400px] '>
                              <h1 className='lg:text-4xl text-3xl font-extrabold text-yellow-500'>Your One-Stop Tech Shop</h1>
                              <h1 className='lg:text-xl text-lg   font-semibold text-slate-900 lg:w-3/5 mx-auto'>Your one-stop destination for cutting-edge technology. Explore our curated collection of the latest gadgets and devices. Innovation and convenience, all in one place</h1>
                              {
                                   user?<>
                                   <button className='btn  border-b-4 bg-stone-400 uppercase text-white text-2xl font-semibold mt-5 '> WelCome </button>
                                   </>: <>
                                        <NavLink to={'/login'}><button className='btn btn-outline  border-b-4 btn-error uppercase text-white text-2xl font-semibold mt-5 '> Join Us  </button></NavLink>
                                   </>
                              }
                         </div></SwiperSlide>


               </Swiper>
          </div>
     );
};

export default Banner;