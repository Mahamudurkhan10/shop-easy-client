import {
     createBrowserRouter,
     RouterProvider,
} from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home/Home";
import ALLProducts from "../Pages/AllProducts/Products/ALLProducts";
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
               }
          ]
     },
]);