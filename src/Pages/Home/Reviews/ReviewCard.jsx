import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';

const ReviewCard = ({review}) => {
    const {userName,review:testimonial,user_photoURL} =review;
    return (
        <div className="max-w-md p-6 rounded-xl shadow-md bg-base-100 border">
      {/* Quote Icon */}
      <FaQuoteLeft className="text-4xl text-primary/40 mb-3" />

      {/* Description */}
      <p className="text-gray-600 leading-relaxed">
       {testimonial}
      </p>

      {/* Divider */}
      <div className="border-t border-dashed my-4"></div>

      {/* User Info */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-primary">
          <img src={user_photoURL} alt="" />
        </div>

        <div>
          <h4 className="font-bold text-gray-800">{userName}</h4>
          <p className="text-sm text-gray-500">Senior Product Designer</p>
        </div>
      </div>
    </div>
    );
};

export default ReviewCard;