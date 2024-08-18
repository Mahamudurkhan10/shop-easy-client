
import Banner from './Banner';
import React, { useRef, useState } from 'react';
import OurProduct from './OurProduct';
import Pricing from './Pricing';

const Home = () => {
     return (
          <div>
               <Banner></Banner>
               <OurProduct></OurProduct>
               <Pricing></Pricing>
          </div>
     );
};

export default Home;