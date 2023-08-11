/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import { MdShoppingCart } from "react-icons/md";
import Swal from "sweetalert2";

import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const ProductCard = ({ product }) => {
  const [axiosSecure] = useAxiosSecure();
  const { user } = useAuth();
  const { name, price, img,  _id } = product;
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
    <div className="card w-full h-full bg-base-100 shadow-xl">
      <figure>
        <img src={img} alt="" />
      </figure>
      <div className="card-body p-4 space-y-2">
        <h2 className="card-title">{name}</h2>
        <div className="flex justify-between">
          <p>Price: ${price}</p>
          {/* <p className="badge badge-secondary">Available</p> */}
         
        </div>
        <div className="flex justify-between items-center">
          <Link to={`/product/${_id}`}>
            <button className="p-3 bg-slate-300 text-black font-bold hover:text-white hover:bg-purple-500 rounded-full">View Details</button>
          </Link>
          <button
            onClick={() => handleAddToCart(product)}
            className="p-3 bg-slate-300 text-black font-bold hover:text-white hover:bg-purple-500 rounded-full flex items-center justify-center  "
          >
            <MdShoppingCart></MdShoppingCart>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
