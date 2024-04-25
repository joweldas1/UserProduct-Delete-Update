import React, { useEffect, useState } from "react";
import useAuth from "./useAuth";
import { Link } from "react-router-dom";

const MyCard = () => {
  const { user } = useAuth();
  const [data, setData] = useState();
  const [control,setControl]=useState(false)

  console.log(user?.email);
  useEffect(() => {
    fetch(`https://user-server-side.vercel.app/product/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [user,control]);


  const handleDelete=id=>{
    fetch(`https://user-server-side.vercel.app/delete/${id}`,{
       method:"DELETE"
    })
    .then((res)=>res.json())
    .then(data=>{
      if(data.deletedCount>0){
        setControl(!control)
      }
    })

}


  return (
    <div>
      {data?.map((d) => (
        <div key={d._id}>
          <h1>{d?.area }</h1>
          <h1>{d?.village }</h1>
          <h1>{d?.email}</h1>
          <img src={d?.image }  />
          <Link to={`/update/${d._id}`}> <button>Update</button> </Link>
          <button className=' bg-blue-600' onClick={()=>handleDelete(d._id)}>Delete</button>          
        </div>
      ))}
    </div>
  );
};

export default MyCard;
