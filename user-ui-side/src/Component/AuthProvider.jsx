import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from '../firebase';
export const AuthData=createContext(null)

const AuthProvider = ({children}) => {
    const [user,setUser]=useState('');
    const [loading,setLoading]=useState(true)


    const createUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const login=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
       
    }
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, user => {
            setLoading(false)
            console.log(user);
            setUser(user)
        });
        return () => unSubscribe();
    }, []);

    const logOut=()=>{
        alert('doneee')
        return signOut(auth)
    }



    const value={createUser ,setUser, user , loading , setLoading ,login,logOut}
    return (
        <AuthData.Provider value={value}>
            {children}
        </AuthData.Provider>
    );
};

export default AuthProvider;