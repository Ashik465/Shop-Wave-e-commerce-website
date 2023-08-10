import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";


const MainLayOut = () => {
    return (
        <>
            <Navbar></Navbar>
            <div className=" min-h-[calc(100vh-136px)]">
        <Outlet></Outlet>
      </div>
     <Footer></Footer>
        </>
    );
};

export default MainLayOut;