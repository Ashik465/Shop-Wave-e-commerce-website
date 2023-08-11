
import { useLoaderData } from "react-router-dom";


import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { MdShoppingCart } from "react-icons/md";

const SingleProduct = () => {
  const [axiosSecure] = useAxiosSecure();
  const { user } = useAuth();
  const product = useLoaderData();
  console.log(product);
  const { name, price,  description, availability, img } = product;
  const handleAddToCart = (product) => {
    if (!user) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "You need to login first!",
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      const cartItem = {
        productId: product._id,
        img: product.img,
        name: product.name,
        price: product.price,
        email: user.email,
        userName: user.displayName,
      };
      console.log(cartItem);
      axiosSecure.post("/addtocart", cartItem).then((res) => {
        console.log(res);
        Swal.fire({
          icon: "success",
          title: "Success",
          text: "Product added to cart!",
          showConfirmButton: false,
          timer: 1500,
        });
      });
    }
  };

  return (
    <div className="w-9/12 mx-auto my-10 bg-base-200">
      <div className="hero">
        <div className="hero-content flex-col justify-center gap-5 lg:flex-row">
          <img src={img} className="w-96 rounded-lg shadow-2xl" />
          <div>
            <h2 className=" text-2xl  md:text-4xl font-bold text-purple-300">{name}</h2>
            <div className="flex flex-col justify-center items-center mt-2 space-y-2">
            

             <h1 className="text-xl md:text-2xl font-semibold textarea-accent">
             Availability: {availability}
            </h1>
          
             <h1 className="text-xl md:text-2xl font-semibold textarea-accent">
              Price: ${price}
            </h1>
          
           

            <div>
        <h3 className="text-xl md:text-2xl font-semibold text-center">Description:</h3>
        <p className=" mx-auto text-base pb-5">{description}</p>
      </div>

      <button
              onClick={() => handleAddToCart(product)}
              className="p-3 bg-slate-300 text-black font-bold hover:text-white hover:bg-purple-500 rounded-full flex items-center justify-center"
            >

<MdShoppingCart></MdShoppingCart>
              Add to cart
            </button>
            </div>
           
           
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default SingleProduct;
