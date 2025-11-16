import React from 'react';
import { FaTruck } from 'react-icons/fa';

const HowItsWork = () => {
    return (
        <div>
            <h2 className='font-bold text-secondary'>How it Works</h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-3 mb-3'>
                <div>
                    {/* Icon */}
                    <div className="text-primary text-5xl mb-4">
                        <FaTruck />
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-semibold mb-2">
                        Booking Pick & Drop
                    </h3>

                    {/* Paragraph */}
                    <p className="text-gray-600 text-sm">
                        From personal packages to business shipments — we deliver on time, every time.
                    </p>
                </div>
                <div>
                    {/* Icon */}
                    <div className="text-primary text-5xl mb-4">
                        <FaTruck />
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-semibold mb-2">
                        Cash On Delivery
                    </h3>

                    {/* Paragraph */}
                    <p className="text-gray-600 text-sm">
                        From personal packages to business shipments — we deliver on time, every time.
                    </p>
                </div>
                <div>
                    {/* Icon */}
                    <div className="text-primary text-5xl mb-4">
                        <FaTruck />
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-semibold mb-2">
                        Delivery Hub
                    </h3>

                    {/* Paragraph */}
                    <p className="text-gray-600 text-sm">
                        From personal packages to business shipments — we deliver on time, every time.
                    </p>
                </div>
                <div>
                    {/* Icon */}
                    <div className="text-primary text-5xl mb-4">
                        <FaTruck />
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-semibold mb-2">
                        Booking SME & Corporate
                    </h3>

                    {/* Paragraph */}
                    <p className="text-gray-600 text-sm">
                        From personal packages to business shipments — we deliver on time, every time.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default HowItsWork;