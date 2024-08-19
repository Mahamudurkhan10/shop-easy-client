import React from 'react';
import { FaStar } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
const Card = ({ product }) => {
     const { name,
          _id,
          image,
          description,
          price,
          category,
          ratings,
          created_at } = product;
          const CreateDate = new Date(created_at).toISOString().split('T')[0];
     return (
          <div>
               <div className="flex flex-col   bg-white border shadow-sm rounded-xl">
                    <img
                         className="w-full h-[200px] rounded-t-xl"
                         src={image}
                         alt="Card Image"
                    />
                    <div className="p-4 md:p-5">
                    <h3 className="text-xl text-center  font-bold text-gray-800">
                              {category}
                         </h3>
                         <h3 className="text-lg font-bold text-gray-800">
                              {name}
                         </h3>
                         
                         <p className="mt-1 text-gray-500">
                              {description}
                         </p>
                         <div className='flex gap-4'>
                              <p className='text-lg font-semibold'> Price : <span className='text-lg font-medium text-blue-500'>${price} </span></p>
                              <p className='flex items-center gap-1 text-lg font-semibold justify-center'> ratings : <FaStar className='text-yellow-300'></FaStar> <FaStar className='text-yellow-200'></FaStar> {ratings} </p>
                         </div>
                         <p className='text-lg font-normal text-yellow-700'> Creation Time : {CreateDate}  </p>
                         <div className='text-center mt-3 '>
                             <NavLink to={`/cardDetails/${_id}`}> <button className="btn btn-primary text-white"> Buy Now </button></NavLink>
                             <NavLink to={`/cardDetails/${_id}`}> <button className="btn btn-error text-white"> View Details </button></NavLink>
                         </div>
                    </div>

               </div>

          </div>
     );
};

export default Card;