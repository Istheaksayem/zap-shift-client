import React from 'react';
import ErrorImg from '../../assets/Error404.png'
import { Link } from 'react-router';

const Error404 = () => {
    return (
        <div className='min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4 text-center'>
            <img src={ErrorImg} alt="" />
            <Link to="/">
                <button className='btn bg-[#CAEB66]'>Go Home</button>
            </Link>
        </div>
    );
};

export default Error404;