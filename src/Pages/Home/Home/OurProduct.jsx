import React from 'react';
import useProducts from '../../../components/Hooks/useProducts';
import Card from '../../Shared/Card/Card';

const OurProduct = () => {
     const products = useProducts();
     console.log(products);
     return (
          <div className='container mx-auto '>
               <div className='text-center mt-7 mb-4'>
                    <h1 className='text-5xl font-bold uppercase'> Our Products </h1>
                    <p className='w-3/5 text-lg font-normal mx-auto'> Our products are carefully curated to bring you the latest in innovation and quality. Explore our selection for reliable, cutting-edge solutions that meet your every need. </p>
               </div>
               <div className='grid grid-cols-1 lg:grid-cols-4  gap-4'>
                    {
                         products.slice(0,12).map((product) => <Card key={product.id} product={product} ></Card> )
                    }
               </div>
               <div className='text-center mt-6'>
                    <button className='btn btn-primary px-7 font-bold border-b-4 btn-outline'> See more </button>
               </div>
          </div>
     );
};

export default OurProduct;