import {
     createBrowserRouter,
     RouterProvider,
} from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home/Home";
import ALLProducts from "../Pages/AllProducts/Products/ALLProducts";
import Login from "../Pages/Shared/Login/Login";
import SingUp from "../Pages/Shared/SingUp/SingUp";
export const router = createBrowserRouter([
     {
          path: "/",
          element: <Root></Root>,
          children: [
               {
                    path: '/',
                    element: <Home></Home>
               },
               {
                    path:'/allProducts',
                    element: <ALLProducts></ALLProducts>
               },
               {
                    path:'/login',
                    element:<Login></Login>
               },
               {
                    path:'/SingUp',
                    element: <SingUp></SingUp>
               }
          ]
     },
]);