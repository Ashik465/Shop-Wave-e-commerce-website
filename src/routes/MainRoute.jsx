import {
    createBrowserRouter,
    
  } from "react-router-dom";
import MainLayOut from "../layout/MainLayOut";
import Home from "../Pages/Home/home/Home";


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
      ],
    },
  ]);

