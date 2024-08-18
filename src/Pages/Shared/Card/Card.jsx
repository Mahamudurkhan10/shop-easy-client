import React from 'react';
import { FaStar } from "react-icons/fa";
const Card = ({ product }) => {
     const { name,
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
                         className="w-full h-auto rounded-t-xl"
                         src="https://images.unsplash.com/photo-1680868543815-b8666dba60f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&q=80"
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
                              <button className="btn btn-primary text-white"> Buy Now </button>
                         </div>
                    </div>

               </div>

          </div>
     );
};

export default Card;