import { Outlet, useLoaderData } from 'react-router-dom';
import Navbar from './Navbar';

const Home = () => {
    const pData=useLoaderData()
    
    return (
        <div>
                <Navbar/>

<div className='w-1/2 mx-auto'>
    {
        pData?.map((p)=>(
            <div key={p._id} className='flex items-center space-x-10'>
                <h1>{p.area}</h1>
                <h1>{p.village}</h1>
                <h1>{p.email}</h1>
                
<img src={p.image} alt="" />            </div>
        ))
    }

</div>


            <h1></h1>
            <Outlet/>
        </div>
    );
};

export default Home;