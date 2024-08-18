import React, { useState, useEffect } from 'react';
import Card from '../../Shared/Card/Card';

const ALLProducts = () => {
     const [products, setProducts] = useState([]);
     const [page, setPage] = useState(1);
     const [totalPages, setTotalPages] = useState(1);
     const [limit, setLimit] = useState(10);
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

               const response = await fetch(`http://localhost:5000/product?${query}`);
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
               <h1 className="text-3xl font-bold text-center mb-8">Product List</h1>

               {/* Filters */}
               <div className="mb-8">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                         {/* Category Filter */}
                         <div className="mb-4 md:mb-0">
                              <label className="mr-2 font-bold">Category:</label>
                              <select
                                   value={category}
                                   onChange={handleCategoryChange}
                                   className="p-2 border rounded"
                              >
                                   <option value="">All</option>
                                   {
                                        products.map((product) => <>
                                             <option value={product.category}> {product.category} </option>
                                        </>)
                                   }
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
                                   className="p-2 border rounded"
                              />
                         </div>

                         {/* Search Filter */}
                         <div>
                              <input
                                   type="text"
                                   value={searchQuery}
                                   onChange={handleSearchChange}
                                   placeholder="Search products..."
                                   className="p-2 border rounded w-full md:w-64"
                              />
                         </div>
                         <div>
                              <label className="mr-2 font-bold">Sort By:</label>
                              <select
                                   value={sortOrder}
                                   onChange={handleSortChange}
                                   className="p-2 border rounded"
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
