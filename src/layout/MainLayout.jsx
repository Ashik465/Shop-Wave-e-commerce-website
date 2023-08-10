import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";


const MainLayOut = () => {
    return (
        <>
            <Navbar></Navbar>
            <div className=" min-h-[calc(100vh-136px)]">
        <Outlet></Outlet>
      </div>
        </>
    );
};

export default MainLayOut;