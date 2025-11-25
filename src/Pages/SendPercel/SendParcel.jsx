import React from 'react';
import { useForm, useWatch } from 'react-hook-form';
import { useLoaderData } from 'react-router';

const SendParcel = () => {
    const { register, handleSubmit, control, formState: { errors } } = useForm()
    const serviceCenters = useLoaderData();
    const regionsDuplicate = serviceCenters.map(c => c.region)
    const regions = [...new Set(regionsDuplicate)]
    const senderRegion = useWatch({ control, name: 'senderRegion' })
    
    const receiverRegion=useWatch({control, name:'receiverRegion'})
   

    const districtsByRegion = region => {
        const regionDistrict = serviceCenters.filter(c => c.region === region)
        const districts = regionDistrict.map(d => d.districts);
        return districts;
    }


    const handleSendParcel = (data) => {
        console.log(data)
        const sameDistrict =data.senderDistrict === data.receiverDistrict
        console.log(sameDistrict)
    }

    return (
        <div>
            <h2 className="text-5xl font-bold">Send A Parcel</h2>
            <form onSubmit={handleSubmit(handleSendParcel)} className='mt-12 p-4 text-black'>
                {/* document */}
                <div>
                    <label className="label mr-4">
                        <input type="radio"{...register('parcelType')}
                            value="document" className="radio radio-secondary" defaultChecked />
                        Document
                    </label>
                    <label className="label">
                        <input type="radio"{...register('parcelType')}
                            value="non-document" className="radio radio-secondary" />
                        Non-Document
                    </label>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
                    {/* parcel info :name,weight */}
                    <fieldset className="fieldset">
                        <label className="label">Parcel Name</label>
                        <input type="text"{...register('parcelName')} className="input w-full" placeholder="Parcel Name" />

                    </fieldset>
                    <fieldset className="fieldset">
                        <label className="label">Parcel Weight (kg)</label>
                        <input type="number"{...register('parcelWeight')} className="input w-full" placeholder="Parcel Weight" />

                    </fieldset>
                </div>
                {/* two column */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                    {/* LEFT SIDE — Sender Details */}
                    <div>
                        <fieldset className="fieldset">
                            <h4 className="text-2xl font-semibold mb-2">Sender Details</h4>
                            {/* sender Name  */}

                            <label className="label">Sender Name</label>
                            <input type="text" {...register('senderName')} className="input w-full" placeholder="Sender Name" />
                            {/* sender Email  */}

                            <label className="label">Sender Email</label>
                            <input type="email" {...register('senderEmail')} className="input w-full" placeholder="Sender Email" />
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
                                <legend className="fieldset-legend">Sender districts</legend>
                                <select {...register('senderDistricts')} defaultValue="Pick a districts" className="select">
                                    <option disabled={true}>Pick a districts</option>

                                    {
                                        districtsByRegion(senderRegion).map((r, i) => <option key={i} value={r}>{r}</option>)
                                    }
                                </select>

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

                    {/* RIGHT SIDE — Receiver Details */}
                    <div>
                        <fieldset className="fieldset">
                            <h4 className="text-2xl font-semibold mb-2">Receiver Details</h4>
                            {/* receiver Name */}
                            <label className="label">Receiver Name</label>
                            <input type="text" {...register('receiverName')} className="input w-full" placeholder="Receiver Name" />
                            {/* receiver Email */}
                            <label className="label">Receiver Email</label>
                            <input type="email" {...register('receiverEmail')} className="input w-full" placeholder="Receiver Email" />
                            {/* Receiver Region */}
                            <fieldset className="fieldset">
                                <legend className="fieldset-legend">Receiver Region</legend>
                                <select {...register('receiverRegion')} defaultValue="Pick a region" className="select">
                                    <option disabled={true}>Pick a region</option>

                                    {
                                        regions.map((r, i) => <option key={i} value={r}>{r}</option>)
                                    }
                                </select>

                            </fieldset>
                            {/* Receiver districts */}
                            <fieldset className="fieldset">
                                <legend className="fieldset-legend">Sender district</legend>
                                <select {...register('receiverDistricts')} defaultValue="Pick a district" className="select">
                                    <option disabled={true}>Pick a districts</option>

                                    {
                                        districtsByRegion(receiverRegion).map((d,i) =><option value={d} key={i}>{d}</option>)
                                    }
                                </select>

                            </fieldset>


                            <label className="label mt-4">Receiver Address</label>
                            <input type="text" {...register('receiverAddress')} className="input w-full" placeholder="Receiver Address" />



                            <label className="label mt-4">Receiver Contact</label>
                            <input type="number" {...register('receiverContact')} className="input w-full" placeholder="Receiver Contact" />

                            <label className="label mt-4">Receiver Note</label>
                            <textarea
                                {...register('receiverNote')}
                                className="textarea w-full"
                                placeholder="Write receiver notes..."
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

export default SendParcel;