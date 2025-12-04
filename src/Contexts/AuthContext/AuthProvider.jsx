import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { auth } from '../../Firebase/Firebase.init';

const googleProvider = new GoogleAuthProvider()

const AuthProvider = ({ children }) => {
    const [user,setUser]=useState(null);
    const [loading,setLoading]=useState(true)

    const registerUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // logOut

    const logOut =() =>{
        setLoading(true)
        return signOut(auth)
    }
    // updater User Profile
    const updateUserProfile =(profile) =>{
        return updateProfile(auth.currentUser,profile)
    }

    const signInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    //    Sign in with google

    const signInGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }
    useEffect(() =>{
        const unSubscribe=onAuthStateChanged(auth, (currentUser) =>{
            setUser(currentUser);
            setLoading(false)
            console.log(currentUser)
        })
        return () =>{
            unSubscribe()
        }
    },[])


    const authInfo = {
        user,
        loading,
        registerUser,
        logOut,
        updateUserProfile,

        signInUser,
        // login er 
        signInGoogle
    }
    return (
        <AuthContext value={authInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;