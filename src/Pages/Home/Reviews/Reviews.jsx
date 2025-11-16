import React, { use } from 'react';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import ReviewCard from './ReviewCard';



const Reviews = ({ reviewsPromise }) => {
    const reviews = use(reviewsPromise)
    console.log(reviews)
    return (
        <div>
            <div className='text-center'>
                <h3 className="text-3xl text-center">Reviews</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam similique harum facilis consequuntur, voluptate iure quasi et nobis sequi inventore illum tenetur sunt neque voluptatum atque nemo cum vero nisi!   </p>
            </div>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={3}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper"
            >
                {
                    reviews.map(review => <SwiperSlide
                    key={review.id}
                    >
                        <ReviewCard review={review}></ReviewCard>
                    </SwiperSlide>)
                }

            </Swiper>
        </div>
    );
};

export default Reviews;