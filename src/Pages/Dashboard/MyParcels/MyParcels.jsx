import { useQuery } from '@tanstack/react-query';
import React from 'react';
import UseAuth from '../../../Hooks/UseAuth';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';


const MyParcels = () => {
    const { user } = UseAuth()
    const axiosSecure = useAxiosSecure();
    const { data: parcels = [] } = useQuery({
        queryKey: ['myParcels', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/parcels?email=${user.email}`)
            return res.data;
        }
    })
    return (
        <div>
            <h2>All of my parcels: {parcels.length}</h2>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>cost</th>
                            <th>Payment status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            parcels.map((parcel,index) => <tr key={parcel._id}>
                            <th>{index +1}</th>
                            <td>{parcel.parcelName}</td>
                            <td>{parcel.cost}</td>
                            <td>Blue</td>
                            <td>{}</td>
                        </tr>)
                        }
                        {/* row 1 */}
                       
                        
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyParcels;