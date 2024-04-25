import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from './useAuth';

const Navbar = () => {
    const {logOut}=useAuth()
    
    const nav= <>
    <NavLink to='/'> Home</NavLink>
    <NavLink to='/addProduct'> AddProduct</NavLink>
    <NavLink to='/myCard'> My Card</NavLink>
    <NavLink to='/login'>Login</NavLink>
    <NavLink to='/singIn'>SingIn</NavLink>

    </>
   
    return (
        <div className='text-blue-500 space-x-11'>
            {nav}
            <button onClick={logOut} className='btn btn-primary'>SignOut</button>

        </div>
    );
};

export default Navbar;