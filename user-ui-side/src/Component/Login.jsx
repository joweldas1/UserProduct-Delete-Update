import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from './useAuth';

const Login = () => {
    const {login,user}=useAuth()
    const navigate=useNavigate();
    const location=useLocation()

    const email=user?.email
    const createTime=user?.metadata?.creationTime;
    const lastLogin=user?.metadata?.lastSignInTime;
    const currentUser={email,createTime,lastLogin}

    
    const handleSingIn=e=>{
        e.preventDefault()
        const form= new FormData(e.currentTarget)
        const email=form.get('email')
        const password=form.get('password')
        console.log(email,password);

        login(email,password)
        .then((result) => {
            console.log(result);
            const data=result.user
            if(data){
                    
                navigate(location?.state||'/')
            } 
        }).catch((err) => {
            console.log(err);
        });

            fetch('https://user-server-side.vercel.app/user',{
                method:"POST",
                headers:{"content-type":"application/JSON"},
                body:JSON.stringify(currentUser)
            })
            .then(res=>res.json())
            .then(data=>{
              console.log(data);
            })

       
        
    }
    return (
        <div>
        <h1>Please login</h1> 

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
    
     <div className="form-control mt-6">
       <button className="btn btn-primary">SingIn</button>
     </div>
   </form>
 </div>
        
         </div>


         <h1>Don't have an account? please  <Link to='/singIn' > SignIn</Link>  </h1>
     </div>
    );
};

export default Login;