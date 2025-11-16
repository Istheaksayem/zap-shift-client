import React from 'react';

import { FaTruck, } from "react-icons/fa";
import ServicesCard from '../ServicesCard/ServicesCard';
import serviceImg from '../../assets/service.png'

const services = [
    {
        id: 1,
        image: <img src={serviceImg} alt="" />,
        title: "Express Delivery",
        desc: "Fast parcel delivery within 24–72 hours.",
    },
    {
        id: 2,
        image: <img src={serviceImg} alt="" />,
        title: "Express Delivery",
        desc: "Fast parcel delivery within 24–72 hours.",
    },
    {
        id: 3,
        image: <img src={serviceImg} alt="" />,
        title: "Express Delivery",
        desc: "Fast parcel delivery within 24–72 hours.",
    },
    {
        id: 4,
        image: <img src={serviceImg} alt="" />,
        title: "Express Delivery",
        desc: "Fast parcel delivery within 24–72 hours.",
    },
    {
        id: 5,
        image: <img src={serviceImg} alt="" />,
        title: "Express Delivery",
        desc: "Fast parcel delivery within 24–72 hours.",
    },
    {
        id: 6,
        image: <img src={serviceImg} alt="" />,
        title: "Express Delivery",
        desc: "Fast parcel delivery within 24–72 hours.",
    },
];

const OurServices = () => {
    return (
        <div className='bg-secondary py-16 px-6 mt-3 mb-3'>
            <div className="text-center text-white mb-12">
                <h2 className="text-3xl font-bold mb-3">Our Services</h2>
                <p className="text-gray-300 max-w-2xl mx-auto">
                    Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle.
                    From personal packages to business shipments — we deliver on time, every time.
                </p>
            </div>

            {/* grid */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {services.map(service => <ServicesCard
                    key={service.id}
                    icon={service.icon}
                    title={service.title}
                    desc={service.desc}

                ></ServicesCard>)}
            </div>
        </div>
    );
};

export default OurServices;
