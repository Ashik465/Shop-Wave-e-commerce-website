import {
    createBrowserRouter,
    
  } from "react-router-dom";
import MainLayOut from "../layout/MainLayOut";
import Home from "../Pages/Home/home/Home";
import LogIn from "../Pages/login/LogIn";
import SignUp from "../Pages/signup/SignUp";
import SingleProduct from "../Pages/Home/products/SingleProduct";
import Cart from "../Pages/Cart/Cart";


 export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayOut />,
    //   errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
            path: "/login",
            element:<LogIn></LogIn>,
          },
          {
            path: "/signup",
            element:<SignUp></SignUp>,
          },
          {
            path: "/product/:id",
            element: <SingleProduct />,
            loader: ({ params }) =>
              fetch(`http://localhost:5000/product/${params.id}`),
          },
          {
            path: "/cart",
            element: <Cart />
       
           
          },
      ],
    },
  ]);

