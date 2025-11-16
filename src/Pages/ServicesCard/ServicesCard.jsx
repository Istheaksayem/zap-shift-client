import React from 'react';

const ServicesCard = ({icon,title,desc}) => {
    return (
         <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl 
                        duration-300 text-center border border-gray-100 hover:bg-[#CAEB66]">

            <div className="w-16 h-16 mx-auto mb-4 bg-green-200 rounded-full 
                            flex items-center justify-center text-3xl text-green-700">
                {icon}
            </div>

            <h3 className="text-lg font-semibold mb-2">{title}</h3>

            <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
        </div>
    );
};

export default ServicesCard;