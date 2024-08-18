import { NavLink, useLoaderData } from "react-router-dom";


const CardDetails = () => {
     const product = useLoaderData();
     
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
               <div className=" ">
                    <div className="relative flex flex-col md:flex-row md:space-x-5 space-y-3  rounded-xl shadow-lg p-3 max-w-xs md:max-w-5xl h-[400px] mx-auto border border-white bg-white">
                         <div className="w-full md:w-1/3 bg-white grid place-items-center">
                              <img
                                   src={image}
                                   alt="The Majestic and Wonderful Bahamas"
                                   className="rounded-xl"
                              />
                         </div>
                         <div className="w-full md:w-2/3  bg-white flex flex-col space-y-7 p-3">
                              <div className="flex mt-6 justify-between  items-center">

                                   <p className="text-gray-500 font-bold text-xl hidden md:block"> {name} </p>

                                   <div className="flex items-center">
                                        <svg
                                             xmlns="http://www.w3.org/2000/svg"
                                             className="h-5 w-5 text-yellow-500"
                                             viewBox="0 0 20 20"
                                             fill="currentColor"
                                        >
                                             <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>

                                        <p className="text-gray-600 font-bold text-sm ml-1">
                                             {ratings}

                                        </p>

                                   </div>
                                   <p className="text-xl font-semibold text-yellow-600"> Creation Time : {CreateDate} </p>

                              </div>
                              <h3 className="font-black text-gray-800 md:text-3xl text-xl">
                                   {category}
                              </h3>
                              <p className="md:text-lg text-gray-500 text-base">
                                   {description}
                              </p>
                              <p className="text-xl  font-semibold text-amber-800">
                                   Price:  <span className="text-xl font-bold text-blue-500">  ${price} </span>

                              </p>
                              <div className="flex flex-col lg:flex-row justify-around">
                                   <NavLink to={'/'} className="btn btn-success w-1/4 text-white font-bold"> Go Back </NavLink>
                                   <button className="btn btn-primary w-1/4 text-white font-bold"> Buy  </button>
                              </div>
                         </div>

                    </div>
               </div>
          </div>
     );
};

export default CardDetails;