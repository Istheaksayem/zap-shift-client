import React from 'react';
import Marquee from 'react-fast-marquee';
import amazon from '../../../../assets/brands/amazon.png'
import casio from '../../../../assets/brands/casio.png'
import moonstar from '../../../../assets/brands/moonstar.png'
import randstad from '../../../../assets/brands/randstad.png'
import star from '../../../../assets/brands/star.png'
import starPeople from '../../../../assets/brands/start_people.png'



const Brands = () => {
    return (

        <div>
            <h2 className='text-secondary text-center font-semibold mb-2'>
                We've helped thousands of sales teams
            </h2>
            <Marquee>
                <div className='flex gap-10 mb-2 items-center '>
                    <img src={casio} alt="" />
                    <img src={amazon} alt="" />
                    <img src={moonstar} alt="" />
                    <img src={randstad} alt="" />
                    <img src={star} alt="" />
                    <img src={starPeople} alt="" />
                </div>
            </Marquee>
        </div>
    );
};

export default Brands;