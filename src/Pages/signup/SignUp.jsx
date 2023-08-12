import Lottie from "lottie-react";
import signUpimg from '../../assets/lotte/signup.json'
import { Helmet } from "react-helmet-async";

import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import { AuthContext } from "../../provider/AuthProvider";

const SignUp = () => {
  const [error, setError] = useState(null);
  const {createEmailUser,updateUserProfile,setUser} = useContext(AuthContext)
  const navigate = useNavigate()
  // react form hook 
  const { register, handleSubmit , formState: { errors } } = useForm();
  const onSubmit = (data) => {
  
if(data.password !== data.confirmPassword){
  
  setError("Password and Confirm Password must be same")
  return;}
  else{
    setError(null)
  }

  // email and password signup

  createEmailUser(data.email, data.password)
  .then((result)=>{
    const loggedUser = result.user;
    console.log(loggedUser);
    
    
    
    updateUserProfile(data.name, data.photoURL)
    .then(()=>{
      // Profile updated!
      setUser(loggedUser => {
        const updatedLoggedUser = {...loggedUser}
        updatedLoggedUser.displayName = data.name;
        updatedLoggedUser.photoURL = data.photoURL;

     return updatedLoggedUser 
      })

      //axios post request to add user to database
      
      axios.post('http://localhost:5000/adduser', {
        name: data.name, email: data.email,role:'customer',image:data.photoURL
      })
      .then((data)=>{

        // console.log(data);
        if (data.data.insertedId) {
         
          navigate("/");

          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "sign up succcess",
            showConfirmButton: false,
            timer: 1500,
          });
        }


      }
      ) 
      
    }
    )
    .catch((err)=>{
      console.log(err)
    }
    )

  })
  .catch((err)=>{
    console.log(err)
    setError(err.message)
    
  })


    
       
  
  }
    return (
        <>
         <Helmet>
        <title> Shop-Wave | SignUp</title>
      </Helmet>
           <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
  <div className="w-1/2 lg:pr-20">
  <Lottie animationData={signUpimg} loop={true} />
    </div>
    <div className="card rounded-none flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleSubmit(onSubmit)}   className="card-body">
      <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
              Create an account
            </h1>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="Name" {...register("name", { required: true, maxLength: 20 })} className="input input-bordered" />
          {errors.name?.type === "required" && (
                  <p className="text-red-500"> Name is required</p>
                )}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text"  placeholder="email" {...register("email", { required: true, maxLength: 20 })} className="input input-bordered" />
          {errors.email?.type === "required" && (
                  <p className="text-red-500"> Email is required</p>
                )}
        </div>
        <div className="form-control ">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password"  placeholder="password"
          {...register("password", {
            required: true,
            minLength: 6,
            pattern: /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+])\S+$/,
          })}
           className="input input-bordered" />
          {errors.password?.type === "required" && (
                  <p className="text-red-500"> password is required</p>
                )}
                {errors.password?.type === "minLength" && (
                  <p className="text-red-500">
                    {" "}
                    password must be six character
                  </p>
                )}
 {errors.password?.type === "pattern" && (
                  <p className="text-red-500">
                    {" "}
                    password should have one uppercase letter and one special
                  </p>
                )}
        </div>
        <div className="form-control ">
          <label className="label">
            <span className="label-text">Confirm password</span>
          </label>
          <input type="password" placeholder="Confirm password" {...register("confirmPassword", { required: true, maxLength: 20 })}className="input input-bordered" />
          {error && (
                  <p className="text-red-500"> {error}</p>
                )}
        </div>
        <div className="form-control">
                  <label className="label">
                    <span className="label-text">Photo-URL</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Photo-URL"
                    {...register("photoURL", )}
                    className="input input-bordered"
                  />
                </div>
        <div className="form-control mt-6">
        <input type="submit" className="btn  border-[#AC9C63] border-2 rounded-none bg-black text-white hover:bg-[#AC9C63]"  value="SignUp" />
        </div>
        
        <p className="text-sm font-light text-gray-500">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="font-medium link text-[#AC9C63] 
                  hover:text-red-500"
                >
                  Login 
                </Link>
              </p>
      </form>
     
    </div>
  </div>
</div> 
        </>
    );
};

export default SignUp;