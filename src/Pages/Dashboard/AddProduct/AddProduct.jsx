import { useNavigate } from "react-router-dom";

import { useForm } from "react-hook-form";

import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const AddProduct = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, reset } = useForm();
  const [axiosSecure] = useAxiosSecure();

  const onSubmit = (data) => {
    const name = data.name;
    const price = data.price;
    const rating = data.rating;
    const image = data.image;
    const description = data.description;
    const product = { name, price, rating, image, description };
    axiosSecure.post("/addproduct", product).then((res) => {
      console.log(res);
      reset();
      navigate("/dashboard/productlist");
      Swal.fire({
        icon: "success",
        title: "Product added successfully",
        showConfirmButton: false,
        timer: 1500,
      });
    });
  };
  return (
    <div className="w-9/12 mx-auto">
       <div>
        <h1 className="text-3xl font-bold my-5 text-purple-400 text-center">Add Product</h1>
    </div>
      <form onSubmit={handleSubmit(onSubmit)} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            {...register("name", { required: true })}
            type="text"
            placeholder="Product Name"
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Price</span>
          </label>
          <input
            {...register("price", { required: true })}
            type="number"
            placeholder="Product Price"
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Rating</span>
          </label>
          <input
            {...register("rating", { required: true })}
            type="number"
            placeholder="Product Rating"
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Image</span>
          </label>
          <input
            {...register("image", { required: true })}
            type="text"
            placeholder="Product Image"
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Description</span>
          </label>
          <input
            {...register("description", { required: true })}
            type="text"
            placeholder="Product Description"
            className="input input-bordered"
          />
        </div>
        <input type="submit" value="Add Product" className="btn bg-yellow-300" />
      </form>
    </div>
  );
};

export default AddProduct;
