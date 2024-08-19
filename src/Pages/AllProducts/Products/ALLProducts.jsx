import React, { useState, useEffect } from 'react';
import Card from '../../Shared/Card/Card';
import { Helmet } from 'react-helmet-async';
import { FaSearch } from 'react-icons/fa';

const ALLProducts = () => {
     const [products, setProducts] = useState([]);
     const [page, setPage] = useState(1);
     const [totalPages, setTotalPages] = useState(1);
     const [limit, setLimit] = useState(15);
     const [category, setCategory] = useState('');
     const [minPrice, setMinPrice] = useState(0);
     const [maxPrice, setMaxPrice] = useState(1000);
     const [searchQuery, setSearchQuery] = useState('');
     const [sortOrder, setSortOrder] = useState('');
     console.log(products);
     useEffect(() => {
          fetchProducts();
     }, [page, category, minPrice, maxPrice, searchQuery, sortOrder]);

     const fetchProducts = async () => {
          try {
               const query = new URLSearchParams({
                    page,
                    limit,
                    category,
                    minPrice,
                    maxPrice,
                    searchQuery,
                    sortOrder
               }).toString();

               const response = await fetch(`https://shop-easy-server.vercel.app/product?${query}`);
               const data = await response.json();
               setProducts(data.products);
               setTotalPages(data.totalPages);
          } catch (error) {
               console.error('Error fetching products:', error);
          }
     };

     const handleNextPage = () => {
          if (page < totalPages) {
               setPage(page + 1);
          }
     };

     const handlePreviousPage = () => {
          if (page > 1) {
               setPage(page - 1);
          }
     };

     const handleCategoryChange = (e) => {
          setCategory(e.target.value);
          setPage(1);
     };

     const handlePriceChange = (e) => {
          const { name, value } = e.target;
          if (name === 'minPrice') {
               setMinPrice(value);
          } else if (name === 'maxPrice') {
               setMaxPrice(value);
          }
          setPage(1);
     };

     const handleSearchChange = (e) => {
          setSearchQuery(e.target.value);
          setPage(1);
     };
     const handleSortChange = (e) => {
          setSortOrder(e.target.value);
          setPage(1);
     };

     return (
          <div className="container mx-auto p-4">
               <Helmet>
                    <title> Products </title>
               </Helmet>
               <h1 className="text-5xl font-bold text-center mb-8">Our Products </h1>

               {/* Filters */}
               <div className="mb-8">
                    <div className="flex lg:flex-row flex-col lg:items-center lg:justify-between">
                         {/* Category Filter */}
                         <div className="mb-4 md:mb-0">
                              <label className="mr-2 font-bold">Category:</label>
                              <select
                                   value={category}
                                   onChange={handleCategoryChange}
                                   className="p-2 border rounded"
                              >
                                   <option value="">All</option>
                                   <option value="Electronics">Electronics</option>
                                   <option value="Gaming">Gaming</option>
                                   <option value="Home Entertainment">Home Entertainment</option>
                                   <option value="Home Decor">Home Decor</option>
                                   <option value="Kitchen Appliances">Kitchen Appliances</option>
                                   <option value="Fitness Equipment">Fitness Equipment</option>
                                   <option value="Personal Care">Personal Care</option>
                                   <option value="Home Security">Home Security</option>
                                   <option value="Wearable Technology">Wearable Technology</option>
                                   <option value="Audio">Audio</option>
                                   <option value="Home Appliances">Home Appliances</option>
                                   <option value="Office Supplies">Office Supplies</option>
                                   <option value="Home Automation">Home Automation
                                   </option>

                              </select>
                         </div>

                         {/* Price Range Filter */}
                         <div className="mb-4 md:mb-0">
                              <label className="mr-2 font-bold">Price Range:</label>
                              <input
                                   type="number"
                                   name="minPrice"
                                   value={minPrice}
                                   onChange={handlePriceChange}
                                   placeholder="Min"
                                   className="p-2 border rounded mr-2"
                              />
                              <input
                                   type="number"
                                   name="maxPrice"
                                   value={maxPrice === Infinity ? '' : maxPrice}
                                   onChange={handlePriceChange}
                                   placeholder="Max"
                                   className="p-2 mt-3 lg:ml-0 ml-[103px] border rounded"
                              />
                         </div>

                         {/* Search Filter */}
                         <div className='flex  items-center gap-2'>
                              <FaSearch></FaSearch>
                              <input
                                   type="text"
                                   value={searchQuery}
                                   onChange={handleSearchChange}
                                   placeholder="Search products..."
                                   className="p-2 border mt-1 rounded w-full md:w-64"
                              />
                         </div>
                         <div>
                              <label className="mr-2  font-bold">Sort By:</label>
                              <select
                                   value={sortOrder}
                                   onChange={handleSortChange}
                                   className="p-2 mt-4 border rounded"
                              >
                                   <option value="">Default</option>
                                   <option value="price-desc">Price: High to Low</option>
                                   <option value="price-asc">Price: Low to High</option>
                                   <option value="date-desc">Date: Newest First</option>
                                   <option value="date-asc">Date: Oldest First</option>
                              </select>
                         </div>
                    </div>
               </div>

               {/* Product Grid */}
               <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {products?.map((product) => (
                         <Card key={product.id} product={product} ></Card>
                    ))}
               </div>

               {/* Pagination Controls */}
               <div className="flex justify-center items-center mt-8 space-x-4">
                    <button
                         onClick={handlePreviousPage}
                         disabled={page === 1}
                         className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded disabled:opacity-50"
                    >
                         Previous
                    </button>
                    <span className="text-gray-700">
                         Page {page} of {totalPages}
                    </span>
                    <button
                         onClick={handleNextPage}
                         disabled={page === totalPages}
                         className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded disabled:opacity-50"
                    >
                         Next
                    </button>
               </div>
          </div>
     );
};

export default ALLProducts;
