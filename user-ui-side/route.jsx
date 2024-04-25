import { createBrowserRouter } from "react-router-dom";
import Home from "./src/Component/Home";
import Login from "./src/Component/Login";
import SingIn from "./src/Component/SingIn";
import AddProduct from "./src/Component/AddProduct";
import MyCard from "./src/Component/MyCard";
import PrivateRoute from "./src/Component/PrivateRoute";
import ProductDetails from "./src/Component/ProductDetails";

const router=createBrowserRouter([
    {
        path:'/',
        element:<Home/>,
        children:[
            {
                path:'/',
                element:<Home/>,
                loader:()=>fetch('https://user-server-side.vercel.app/product')
            },
            {
                path:'/addProduct',
                element:<PrivateRoute> <AddProduct/> </PrivateRoute>
            },
            
            {
                path:'/myCard',
                element:<PrivateRoute><MyCard/></PrivateRoute>
            },
            
            {
                path:'/update/:id',
                element:<PrivateRoute><ProductDetails/></PrivateRoute>
            },
           
            {
                path:'/login',
                element: <Login/>,
            },
            {
                path:'/singIn',
                element:<SingIn/>,
            },
        ]
    }
])
export default router