import React from 'react';
import { useForm, useWatch } from 'react-hook-form';
import UseAuth from '../../Hooks/UseAuth';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import { useLoaderData } from 'react-router';
import Swal from 'sweetalert2';

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

    const riderRegion = useWatch({ control, name: 'region' })

    const handleRiderApplication = data => {
        console.log(data)
        axiosSecure.post('/riders', data)
            .then(res => {
                if (res.data.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your application has been submitted.we will reach to you in 15 Days",
                        showConfirmButton: false,
                        timer: 2000
                    });
                }
            })
    }
    return (
        <div>
            <h2 className="text-4xl text-primary">Be a Rider</h2>
            <form onSubmit={handleSubmit(handleRiderApplication)} className='mt-12 p-4 text-black overflow-x-hidden'>

                {/* two column */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                    {/*rider Details */}
                    <div>
                        <fieldset className="fieldset">
                            <h4 className="text-2xl font-semibold mb-2">Rider Details</h4>
                            {/* rider Name  */}

                            <label className="label">Rider Name</label>
                            <input
                                type="text"
                                {...register('name')}
                                defaultValue={user?.displayName}
                                className="input w-full" placeholder="Rider Name" />
                            {/* rider Email  */}

                            <label className="label">Rider Email</label>
                            <input
                                type="email"
                                {...register('riderEmail')}
                                defaultValue={user?.email}
                                className="input w-full" placeholder="Rider Email" />
                            {/* rider Region */}
                            <fieldset className="fieldset">
                                <legend className="fieldset-legend">Region</legend>
                                <select {...register('region')} defaultValue="Pick a region" className="select">
                                    <option disabled={true}>Pick a region</option>

                                    {
                                        regions.map((r, i) => <option key={i} value={r}>{r}</option>)
                                    }
                                </select>

                            </fieldset>

                            {/* rider Districts */}
                            <fieldset className="fieldset">
                                <legend className="fieldset-legend">district</legend>
                                <select {...register('district')} defaultValue="Pick a district" className="select">
                                    <option disabled={true}>Pick a districts</option>

                                    {
                                        districtsByRegion(riderRegion).map((r, i) => <option key={i} value={r}>{r}</option>)
                                    }

                                </select>
                                {/* {
                                    console.log(districtsByRegion(riderRegion))
                                } */}

                            </fieldset>

                            {/* rider Address  */}

                            <label className="label mt-4">Your Address</label>
                            <input type="text" {...register('Address')} className="input w-full" placeholder="rider Address" />



                            <label className="label mt-4">rider Contact</label>
                            <input type="number" {...register('riderContact')} className="input w-full" placeholder="rider Contact" />

                            <label className="label">Driving License </label>
                            <input
                                type="text"
                                {...register('license')}

                                className="input w-full" placeholder="Driving License" />

                            <label className="label mt-4">NID</label>
                            <input type="number" {...register('nid')} className="input w-full" placeholder="NID" />
                            {/* BIKE INFORMATION */}
                            <label className="label mt-4">BIKE INFORMATION</label>
                            <input type="text" {...register('bike')} className="input w-full" placeholder="BIKE INFORMATION" />

                        </fieldset>
                    </div>



                </div>


                <input type="submit" className='btn btn-primary mt-8 text-black' value="Apply as a rider" />
            </form>
        </div>
    );
};

export default Rider;

{/* <textarea
    {...register('riderNote')}
    className="textarea w-full"
    placeholder="Write rider notes..."
    rows={4}
></textarea> */}