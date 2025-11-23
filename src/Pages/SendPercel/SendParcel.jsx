import React from 'react';
import { useForm } from 'react-hook-form';
import { data } from 'react-router';

const SendParcel = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()

    const handleSendParcel = (data) => {
        console.log(data)
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

                            <label className="label">Sender Name</label>
                            <input type="text" {...register('senderName')} className="input w-full" placeholder="Sender Name" />

                            <label className="label mt-4">Sender Address</label>
                            <input type="text" {...register('senderAddress')} className="input w-full" placeholder="Sender Address" />

                            <label className="label mt-4">Sender District</label>
                            <input type="text" {...register('senderDistrict')} className="input w-full" placeholder="Sender District" />

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

                            <label className="label">Receiver Name</label>
                            <input type="text" {...register('receiverName')} className="input w-full" placeholder="Receiver Name" />

                            <label className="label mt-4">Receiver Address</label>
                            <input type="text" {...register('receiverAddress')} className="input w-full" placeholder="Receiver Address" />

                            <label className="label mt-4">Receiver District</label>
                            <input type="text" {...register('receiverDistrict')} className="input w-full" placeholder="Receiver District" />

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


                <input type="submit" className='btn btn-primary text-black' value="send parcel" />
            </form>
        </div>
    );
};

export default SendParcel;