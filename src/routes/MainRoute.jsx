import {
    createBrowserRouter,
    
  } from "react-router-dom";
import MainLayOut from "../layout/MainLayOut";
import Home from "../Pages/Home/home/Home";
import LogIn from "../Pages/login/LogIn";
import SignUp from "../Pages/signup/SignUp";


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
      ],
    },
  ]);

