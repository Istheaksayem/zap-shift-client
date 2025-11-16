import React from 'react';
import Banner from '../Banner/Banner';
import HowItsWork from '../HowItsWork/HowItsWork';
import OurServices from '../../OurServices/OurServices';
import Brands from './Brands/Brands';
import Reviews from '../Reviews/Reviews';

const reviewsPromise =fetch('/reviews.json')
.then(res =>res.json())


const Home = () => {
    return (
        <div>
          <Banner></Banner>
          <HowItsWork></HowItsWork>
          <OurServices></OurServices>
          <Brands></Brands>
          <Reviews reviewsPromise={reviewsPromise}></Reviews>
        </div>
    );
};

export default Home;