import Lottie from "lottie-react";
import logimg from '../../assets/lotte/login.json'
import { Helmet } from "react-helmet-async";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { useForm } from "react-hook-form";
import { AuthContext } from "../../provider/AuthProvider";


const LogIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const {signInEmailUser} = useContext(AuthContext)
  const [error ,setError] =useState('')
  const navigate = useNavigate()
  //react-hook-form
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {console.log(data);
  
  
  // email and password login
  
  signInEmailUser(data.email, data.password)
  .then((result)=>{
    const loggedUser = result.user;
    console.log(loggedUser);
    // setLoader(false)

    navigate("/")
  })
  .catch((err)=>{
    console.log(err)
    setError(err.message)
    // setLoader(false)
    
  })

  
  }
    return (
        <>   
         <Helmet>
        <title>Shop-Wave | LogIn</title>
      </Helmet> 
         <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
  <div className="w-1/2 lg:pr-20">
  <Lottie animationData={logimg} loop={true} />
    </div>
    <div className="card rounded-none w-full max-w-sm shadow-2xl bg-base-100">
   
      <form onSubmit={handleSubmit(onSubmit)} className="card-body ">
      {error &&  <p className='mb-3 text-red-600'> {error}  </p>}
      <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
              Sign in to your account
            </h1>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" placeholder="email" {...register("email", { required: true, maxLength: 20 })} className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <div className=" relative">
          <input type={showPassword? "text": "password"} placeholder="password" {...register("password", { required: true, maxLength: 20 })} className="input input-bordered w-full" />
          <button onClick={(e)=>{
             e.preventDefault();
            setShowPassword(!showPassword)}} className="btn bg-black text-white  absolute top-0 right-0 rounded-l-none hover:bg-black"> {showPassword  ?  <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash> }  </button>
          </div>
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          
          <input type="submit" className="btn  border-[#AC9C63] border-2 rounded-none bg-black text-white hover:bg-[#AC9C63]"  value="Login" />
        </div>
        <p className="text-sm font-light text-gray-500">
                Don’t have an account yet?{" "}
                <Link
                  to="/signup"
               
                  className="font-medium link text-[#AC9C63] 
                  hover:text-red-500 "
                >
                  Sign up
                </Link>
              </p>
              
      </form>
     
    </div>
  </div>
</div>
        </>
    );
};

export default LogIn;