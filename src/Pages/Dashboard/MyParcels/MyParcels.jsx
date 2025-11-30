import { useQuery } from '@tanstack/react-query';
import React from 'react';
import UseAuth from '../../../Hooks/UseAuth';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { FaEdit } from "react-icons/fa";
import { FaMagnifyingGlass, FaTrashCan } from "react-icons/fa6";
import Swal from 'sweetalert2';


const MyParcels = () => {
    const { user } = UseAuth()
    const axiosSecure = useAxiosSecure();
    const { data: parcels = [], refetch } = useQuery({
        queryKey: ['myParcels', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/parcels?email=${user.email}`)
            return res.data;
        }
    })
    const handleParcelDelete = id => {
        console.log(id)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                axiosSecure.delete(`/parcels/${id}`)
                    .then(res => {
                        console.log(res.data)
                        if (res.data.deletedCount) {
                            // refresh the data
                            refetch()
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Parcel has been deleted.",
                                icon: "success"
                            });
                        }
                    })

            }
        });
    }
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
                            parcels.map((parcel, index) => <tr key={parcel._id}>
                                <th>{index + 1}</th>
                                <td>{parcel.parcelName}</td>
                                <td>{parcel.cost}</td>
                                <td>Blue</td>
                                <td>
                                    <button className='btn btn-square hover:bg-primary'>
                                        <FaMagnifyingGlass />
                                    </button>
                                    <button className='btn btn-square hover:bg-primary mx-2'>
                                        <FaEdit />
                                    </button>
                                    <button
                                        onClick={() => handleParcelDelete(parcel._id)}
                                        className='btn btn-square hover:bg-primary'>
                                        <FaTrashCan />
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

export default MyParcels;