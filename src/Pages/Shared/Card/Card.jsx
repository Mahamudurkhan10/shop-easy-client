import React from 'react';

const Card = ({ product }) => {
     const { name,
          image,
          description,
          price,
          category,
          ratings,
          created_at } = product;
     return (
          <div>
               <div className="flex flex-col bg-white border shadow-sm rounded-xl">
                    <img
                         className="w-full h-auto rounded-t-xl"
                         src="https://images.unsplash.com/photo-1680868543815-b8666dba60f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&q=80"
                         alt="Card Image"
                    />
                    <div className="p-4 md:p-5">
                         <h3 className="text-lg font-bold text-gray-800">
                              {name}
                         </h3>
                         <p className="mt-1 text-gray-500">
                              {description}
                         </p>
                         
                    </div>
               </div>

          </div>
     );
};

export default Card;