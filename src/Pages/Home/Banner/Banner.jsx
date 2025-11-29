import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import bannerImg1 from '../../../assets/banner/banner1.png'
import bannerImg2 from '../../../assets/banner/banner2.png'
import bannerImg3 from '../../../assets/banner/banner3.png'
import { BsArrowUpRightSquareFill } from 'react-icons/bs';

const Banner = () => {
    return (
        <Carousel
            autoPlay={true}
            infiniteLoop={true}

        >
            <div className='relative'>
                <img src={bannerImg1} />

                {/* Buttons Wrapper */}
                <div className="absolute bottom-20 left-20 flex items-center gap-4">

                    {/* Button 1 */}
                    <button
                        className="bg-primary text-black px-5 py-2 rounded-lg shadow-lg 
            flex items-center gap-2"
                    >
                        Track your parcel
                        <BsArrowUpRightSquareFill />
                    </button>

                    {/* Button 2 */}
                    <button
                        className="bg-white text-black px-5 py-2 rounded-lg shadow-lg 
            flex items-center gap-2"
                    >

                        Be A Rider
                    </button>

                </div>

            </div>

            <div className='relative'>
                <img src={bannerImg2} />

                {/* Buttons Wrapper */}
                <div className="absolute bottom-20 left-20 flex items-center gap-4">

                    {/* Button 1 */}
                    <button
                        className="bg-primary text-black px-5 py-2 rounded-lg shadow-lg 
            flex items-center gap-2"
                    >
                        Track your parcel
                        <BsArrowUpRightSquareFill />
                    </button>

                    {/* Button 2 */}
                    <button
                        className="bg-white text-black px-5 py-2 rounded-lg shadow-lg 
            flex items-center gap-2"
                    >

                        Be A Rider
                    </button>

                </div>

            </div>
            <div className='relative'>
                <img src={bannerImg3} />

                {/* Buttons Wrapper */}
                <div className="absolute bottom-20 left-20 flex items-center gap-4">

                    {/* Button 1 */}
                    <button
                        className="bg-primary text-black px-5 py-2 rounded-lg shadow-lg 
            flex items-center gap-2"
                    >
                        Track your parcel
                        <BsArrowUpRightSquareFill />
                    </button>

                    {/* Button 2 */}
                    <button
                        className="bg-white text-black px-5 py-2 rounded-lg shadow-lg 
            flex items-center gap-2"
                    >

                        Be A Rider
                    </button>

                </div>

            </div>
        </Carousel>
    );
};

export default Banner;