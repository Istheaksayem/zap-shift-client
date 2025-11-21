import React from 'react';
import { useForm } from 'react-hook-form';
import UseAuth from '../../../Hooks/UseAuth';
import { Link } from 'react-router';
import SocialLogin from '../SocialLogin/SocialLogin';
import axios from 'axios';

const Register = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const { registerUser,updateUserProfile } = UseAuth()

    const handleRegistration = (data) => {
        console.log("After register", data.photo[0])
        const profileImg=data.photo[0]
        registerUser(data.email, data.password)
            .then(result => {
                console.log(result.user);
                // store the img and get the photo
                const formData =new FormData();
                formData.append('image',profileImg)
                const image_API_URL =`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_image_host}`
                axios.post(image_API_URL,formData)
                .then(res =>{
                    console.log("after image upload",res.data.data.url)

                    // update profile
                    const userProfile ={
                        displayName :data.name,
                        photoURL :res.data.data.url
                    }
                    updateUserProfile(userProfile)
                    .then(()=>{
                        console.log("user profile updated done")
                    })
                    .catch(error =>{
                        console.log(error)
                    })

                })
            })
            .catch(error => {
                console.log(error)
            })

    }
    return (
        <div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl">
            <h3 className="text-3xl  font-bold">Create An Account</h3>
            <p className="font-semibold">Register with ZapShift</p>
            <form className="card-body" onSubmit={handleSubmit(handleRegistration)}>
                <fieldset className="fieldset">
                    {/* Email field */}
                    <label className="label">Email</label>
                    <input
                     type="email" 
                     {...register("email", 
                     { required: true })} 
                     className="input"
                      placeholder="Email" 
                      />

                    {errors.email?.type === "required" && <p className='text-red-500'>Email is required</p>}
                    {/* name field */}
                    <label className="label">name</label>
                    <input
                     type="text" 
                     {...register("name", 
                     { required: true })} 
                     className="input"
                      placeholder="Your name" 
                      />

                    {errors.name?.type === "required" && <p className='text-red-500'>Name is required</p>}
                    {/* image field */}
                    <label className="label">photo</label>
                    {/* <input type="file" className="file-input file-input-secondary" /> */}
                    <input
                     type="file" 
                     {...register("photo", 
                     { required: true })} 
                     className="file-input file-input-info"
                      placeholder="Your photo" 
                      />

                    {errors.name?.type === "required" && <p className='text-red-500'>Name is required</p>}

                    {/* password */}
                    <label className="label">Password</label>
                    <input type="password"  {...register("password", {
                        required: true,
                        minLength: 6,
                        // eslint-disable-next-line no-useless-escape
                        pattern: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&^#()\-_=+{}\[\]|;:'",.<>\/]).{6,}$/
                        // pattern: {
                        //     value: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&^#()\-_=+{}\[\]|;:'",.<>/]).{6,}$/,
                        //     message: "Password must meet complexity requirements"
                        // }
                    })} className="input" placeholder="Password" />


                    {
                        errors.password?.type === "required" && <p className='text-red-500'>password is required</p>
                    }
                    {
                        errors.password?.type === "minLength" && <p className='text-red-500'>password must be 6 characters</p>
                    }
                    {
                        errors.password?.type === "pattern" && <p className='text-red-500'>password at least one uppercase ,at least one lowercase ,at least one number at least one special characters</p>

                    }

                    <div><a className="link link-hover">Forgot password?</a></div>
                    <button className="btn btn-neutral mt-4">Register</button>
                    <p>Already have an account? <Link to="/login" className='text-blue-400'>Login</Link></p>
                </fieldset>

            </form>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;