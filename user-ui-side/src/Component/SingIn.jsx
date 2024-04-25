import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from './useAuth';

const SingIn = () => {
    const {createUser}=useAuth()

    const [error,setError]=useState('')

    const handleSingIn=e=>{
        e.preventDefault()
        const form= new FormData(e.currentTarget)
        const email=form.get('email')
        const password=form.get('password')
        const confirmPassword=form.get('confirmPassword')
        console.log(email,password,confirmPassword);

        if(password!==confirmPassword){
            return setError('Password not match')
        }setError('')


        createUser(email,password)
        .then(data=>{
            console.log(data);
        })
        .catch(error=>console.log(error))


        

    }
    return (
        <div>
                <h1 className='text-center text-2xl font-semibold mt-5'>Please SignIn</h1>

<div>
<div className="card shrink-0 w-full mx-auto max-w-sm shadow-2xl bg-base-100">
<form className="card-body" onSubmit={handleSingIn}>
<div className="form-control">
<label className="label">
<span className="label-text">Email</span>
</label>
<input type="email" name='email' placeholder="email" className="input input-bordered" required />
</div>
<div className="form-control">
<label className="label">
<span className="label-text">Password</span>
</label>
<input type="password" name='password' placeholder="password" className="input input-bordered" required />
</div>
<div className="form-control">
<label className="label">
<span className="label-text">Confirm Password</span>
</label>
<input type="password" name='confirmPassword' placeholder="password" className="input input-bordered" required />
<span className='text-red-500 font-bold'>{error}</span>

</div>
<div className="form-control mt-6">
<button className="btn btn-primary">SingIn</button>
</div>
<h3>Already have an account , Please  <Link to='/login'>Login</Link> </h3>
</form>
</div>

</div>
        </div>
    );
};

export default SingIn;