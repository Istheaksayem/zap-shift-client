import React from 'react';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { FaUserCheck } from 'react-icons/fa6';
import { IoPersonRemove } from 'react-icons/io5';
import { FaTrashAlt } from 'react-icons/fa';

const ApproveRider = () => {
    const axiosSecure = useAxiosSecure()
    const { data: riders = [] } = useQuery({
        queryKey: ['riders', 'pending'],
        queryFn: async () => {
            const res = await axiosSecure.get('/riders')
            return res.data
        }
    })
    const handleApproval =id =>{

    }

    return (
        <div>
            <h2 className="text-5xl">Rider pending approval: {riders.length}</h2>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Status</th>
                            <th>District</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            riders.map((rider, index) => <tr>
                                <th>{index + 1}</th>
                                <td>{rider.name}</td>
                                <td>{rider.riderEmail}</td>
                                <td>{rider.status}</td>
                                <td>{rider.district}</td>
                                <td>
                                    <button onClick={() => handleApproval(rider._id)} className='btn'>
                                        <FaUserCheck />

                                    </button>
                                    <button className='btn'>
                                        <IoPersonRemove />

                                    </button>
                                    <button className='btn'>
                                        <FaTrashAlt />

                                    </button>
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ApproveRider; 