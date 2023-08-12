
import { Link, NavLink, Outlet } from "react-router-dom";
import { SiGooglemeet } from "react-icons/si";
// import { MdManageAccounts, MdPayment, MdSportsScore } from "react-icons/md";
import { AiOutlineHome } from "react-icons/ai";
import { Helmet } from "react-helmet-async";

import DashNav from "../Pages/Dashboard/DashNav/DashNav";


const DashboardLayout = () => {


    const activeClass = "text-white bg-blue-700 shadow-lg py-2 hover:bg-blue-700 hover:text-white hover:shadow-lg hover:shadow-blue-200 shadow-blue-300 duration-300 focus:bg-blue-700";
    const inactiveClass = "py-2 hover:bg-blue-700 hover:text-white hover:shadow-lg hover:shadow-blue-200 shadow-blue-300 duration-300 focus:bg-blue-700";
    return (
        <>
         <Helmet>
        <title> ShopWave | Dashboard</title>
      </Helmet>
        {/* navbar  */}
       <DashNav></DashNav>

        <div className="drawer lg:drawer-open ">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col items-center justify-center overflow-x-auto">
    {/* Page content here */}
    {/* <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open side-Navbar</label> */}

    
    <Outlet></Outlet>
  
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 h-full text-xl bg-[#AC9C63] text-white bg-gradient-to-bl from-blue-500 to-purple-600">
      {/* Sidebar content here */}

      

      
       <li>
                            <NavLink
                                to='/dashboard/home'
                                className={({ isActive }) => isActive ? activeClass : inactiveClass}>
                                <AiOutlineHome />
                                Dashboard
                            </NavLink>
                        </li>
      <li><Link to='/dashboard/myclasses' > <SiGooglemeet></SiGooglemeet>  My classes</Link></li>

     
      
    {/* student  */}

      {/* {isStudent?.student && <> <li><Link to='/dashboard/myselectedclass' > <SiGoogleclassroom></SiGoogleclassroom>  My Selected classes</Link></li>
      
      <li><Link to='/dashboard/myenrollclasses' > <MdSportsScore></MdSportsScore>  My Enroll classes</Link></li>
      <li><Link to='/dashboard/paymenthistory' > <MdPayment></MdPayment> Payment History</Link></li>
       </>} */}


      {/* Admin  */}

      {/* {isAdmin?.admin && <><li><Link to='/dashboard/manageclasses' > <SiGoogleclassroom></SiGoogleclassroom> Manage Classes</Link></li>
      <li><Link to='/dashboard/manageuser' > <MdManageAccounts></MdManageAccounts> Manage User</Link></li></>} */}
      

    </ul>
  
  </div>
</div> 





         

        </>
    );
};

export default DashboardLayout;