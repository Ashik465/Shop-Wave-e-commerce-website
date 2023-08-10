import { ScaleLoader } from "react-spinners";


const LoadingSpiner = () => {
    return (
        <div className="flex items-center justify-center h-screen">
        {/* <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-[#AC9C63] "></div> */}
        <div className=" h-16 w-16"><ScaleLoader color="#AC9C63" /></div>
      </div>
    );
};

export default LoadingSpiner;