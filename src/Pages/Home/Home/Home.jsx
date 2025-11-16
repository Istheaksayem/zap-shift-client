import React from 'react';
import Banner from '../Banner/Banner';
import HowItsWork from '../HowItsWork/HowItsWork';
import OurServices from '../../OurServices/OurServices';
import Brands from './Brands/Brands';

const Home = () => {
    return (
        <div>
          <Banner></Banner>
          <HowItsWork></HowItsWork>
          <OurServices></OurServices>
          <Brands></Brands>
        </div>
    );
};

export default Home;