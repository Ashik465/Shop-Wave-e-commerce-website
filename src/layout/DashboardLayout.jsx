
import { Link, Outlet } from "react-router-dom";
import { SiGoogleclassroom,SiGooglemeet } from "react-icons/si";
// import { MdManageAccounts, MdPayment, MdSportsScore } from "react-icons/md";

import { Helmet } from "react-helmet-async";
import Navbar from "../components/navbar/Navbar";


const DashboardLayout = () => {



    return (
        <>
         <Helmet>
        <title> ShopWave | Dashboard</title>
      </Helmet>
        {/* navbar  */}
        <Navbar></Navbar>

        <div className="drawer lg:drawer-open ">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col items-center justify-center overflow-x-auto">
    {/* Page content here */}
    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open side-Navbar</label>

    
    <Outlet></Outlet>
  
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 h-full text-xl bg-[#AC9C63] text-white">
      {/* Sidebar content here */}

      {/* instructor  */}

       <li><Link to='/dashboard/home' > <SiGoogleclassroom></SiGoogleclassroom>   Add A Class</Link></li>
       <li><Link to='/dashboard/addclass' > <SiGoogleclassroom></SiGoogleclassroom>   Add A Class</Link></li>
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