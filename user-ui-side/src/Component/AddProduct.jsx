import React from 'react';
import useAuth from './useAuth';

const AddProduct = () => {
    const {user}=useAuth()
    const email=user.email
    const handleUpload=e=>{
        e.preventDefault;
        const form=e.target
        const name=form.name.value;
        const area=form.area.value;
        const village=form.village.value;
        const image=form.image.value;
        const updata={email,name,area,village,image}

        fetch('https://user-server-side.vercel.app/product',{
            method:"POST",
            headers:{"content-type":"application/json"},
            body:JSON.stringify(updata)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.insertedId>0){
                alert('data added successfully')
            }
            console.log(data)
            alert('data inserted')
        })



    }
    return (
        <div className='w-full mx-auto'>

            <form className='space-y-5' onSubmit={handleUpload}>
            <input type="text" name='name' placeholder="Type here" className="input input-bordered input-error w-full max-w-xs" /> <br />
            <input type="text" name='area' placeholder="Lived Area" className="input input-bordered input-error w-full max-w-xs" /> <br />
            <input type="text" name='village' placeholder="Village area" className="input input-bordered input-error w-full max-w-xs" /><br />
            <input type="text" name='image' placeholder="Image link" className="input input-bordered input-error w-full max-w-xs" /><br />
            <button className='btn btn-warning'>Submit</button>
            </form>



        </div>
    );
};

export default AddProduct;