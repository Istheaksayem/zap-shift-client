import React from 'react';
import { useForm, useWatch } from 'react-hook-form';
import UseAuth from '../../Hooks/UseAuth';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import {  useLoaderData } from 'react-router';

const Rider = () => {
    const {
        register,
        handleSubmit,
        control,
        // formState: { errors }
    } = useForm()

    const { user } = UseAuth()

    const axiosSecure = useAxiosSecure();

    const serviceCenters = useLoaderData();

    const regionsDuplicate = serviceCenters.map(c => c.region)

    const regions = [...new Set(regionsDuplicate)]
    const districtsByRegion = region => {
        const regionDistrict = serviceCenters.filter(c => c.region === region)
        console.log(regionDistrict)
        const districts = regionDistrict.map(d => d.district);
        return districts;
    }

    const senderRegion = useWatch({ control, name: 'senderRegion' })

    const handleRiderApplication = data => {
        console.log(data)
    }
    return (
        <div>
            <h2 className="text-4xl text-primary">Be a Rider</h2>
            <form onSubmit={handleSubmit(handleRiderApplication)} className='mt-12 p-4 text-black overflow-x-hidden'>
             
                {/* two column */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                    {/* LEFT SIDE — Sender Details */}
                    <div>
                        <fieldset className="fieldset">
                            <h4 className="text-2xl font-semibold mb-2">Rider Details</h4>
                            {/* sender Name  */}

                            <label className="label">Sender Name</label>
                            <input
                                type="text"
                                {...register('senderName')}
                                defaultValue={user?.displayName}
                                className="input w-full" placeholder="Sender Name" />
                            {/* sender Email  */}

                            <label className="label">Sender Email</label>
                            <input
                                type="email"
                                {...register('senderEmail')}
                                defaultValue={user?.email}
                                className="input w-full" placeholder="Sender Email" />
                            {/* sender Region */}
                            <fieldset className="fieldset">
                                <legend className="fieldset-legend">Sender Region</legend>
                                <select {...register('senderRegion')} defaultValue="Pick a region" className="select">
                                    <option disabled={true}>Pick a region</option>

                                    {
                                        regions.map((r, i) => <option key={i} value={r}>{r}</option>)
                                    }
                                </select>

                            </fieldset>

                            {/* sender Districts */}
                            <fieldset className="fieldset">
                                <legend className="fieldset-legend">Sender district</legend>
                                <select {...register('senderDistrict')} defaultValue="Pick a district" className="select">
                                    <option disabled={true}>Pick a districts</option>

                                    {
                                        districtsByRegion(senderRegion).map((r, i) => <option key={i} value={r}>{r}</option>)
                                    }

                                </select>
                                {
                                    console.log(districtsByRegion(senderRegion))
                                }

                            </fieldset>




                            {/* sender Address  */}

                            <label className="label mt-4">Sender Address</label>
                            <input type="text" {...register('senderAddress')} className="input w-full" placeholder="Sender Address" />



                            <label className="label mt-4">Sender Contact</label>
                            <input type="number" {...register('senderContact')} className="input w-full" placeholder="Sender Contact" />

                            <label className="label mt-4">Sender Note</label>
                            <textarea
                                {...register('senderNote')}
                                className="textarea w-full"
                                placeholder="Write sender notes..."
                                rows={4}
                            ></textarea>
                        </fieldset>
                    </div>



                </div>


                <input type="submit" className='btn btn-primary mt-8 text-black' value="send parcel" />
            </form>
        </div>
    );
};

export default Rider;