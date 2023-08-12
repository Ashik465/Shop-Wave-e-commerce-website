import {
    createBrowserRouter,
    
  } from "react-router-dom";
import MainLayOut from "../layout/MainLayOut";
import Home from "../Pages/Home/home/Home";
import LogIn from "../Pages/login/LogIn";
import SignUp from "../Pages/signup/SignUp";
import SingleProduct from "../Pages/Home/products/SingleProduct";
import Cart from "../Pages/Cart/Cart";
import DashboardLayout from "../layout/DashboardLayout";
import DashHome from "../Pages/Dashboard/home/DashHome";
import Customers from "../Pages/Dashboard/Customers/Customers";
import Productlist from "../Pages/Dashboard/Productlist/Productlist";
import AddProduct from "../Pages/Dashboard/AddProduct/AddProduct";
import Orderlist from "../Pages/Dashboard/Orderlist/Orderlist";


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
    {
        path: "/dashboard",
        element: <DashboardLayout></DashboardLayout>,
        //   errorElement: <ErrorPage />,
        children: [
          {
            path: "home",
            element: <DashHome></DashHome>,
          },
          {
            path: "customers",
            element: <Customers />,
          },
          {
            path: "productlist",
            element: <Productlist />,
          },
          {
            path: "addproduct",
            element: <AddProduct />,
          },
          {
            path: "orderlist",
            element: <Orderlist />,
          },
         
          {
            path: "manageuser",
            // element: <AdminRoute><ManageUser></ManageUser></AdminRoute> ,
          },
          {
            path: "myselectedclass",
            // element: <StudentRoute><MySelectedClass></MySelectedClass></StudentRoute> ,
          },
          {
            path: "payment",
            // element: <StudentRoute><Payment></Payment></StudentRoute> ,
          },
          {
            path: "myenrollclasses",
            // element: <StudentRoute><MyEnrollClasses></MyEnrollClasses></StudentRoute> ,
          },
          {
            path: "paymenthistory",
            // element: <StudentRoute><PaymentHistory></PaymentHistory></StudentRoute> ,
          },
         
         
         
        ],
      },
  ]);

