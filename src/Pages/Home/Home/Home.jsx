import React from 'react';
import Banner from '../Banner/Banner';
import HowItsWork from '../HowItsWork/HowItsWork';
import OurServices from '../../OurServices/OurServices';

const Home = () => {
    return (
        <div>
          <Banner></Banner>
          <HowItsWork></HowItsWork>
          <OurServices></OurServices>
        </div>
    );
};

export default Home;