import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from './useAuth';

const PrivateRoute = ({children}) => {
    const location=useLocation()
    const locateRoute=location.pathname

    const{user,loading}=useAuth()

    if(loading){
        return <div className='w-full text-center'><span className="loading loading-spinner  mx-auto mt-10 loading-lg"></span></div>
    }
    
    if(!user){
        return <Navigate to='/login' state={locateRoute || '/'} ></Navigate>
    }
    return children
    }
export default PrivateRoute;