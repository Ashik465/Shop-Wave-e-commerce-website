import { useQuery } from "@tanstack/react-query";



import Swal from "sweetalert2";
import { useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";

const Productlist = () => {
  const { user, loading } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const [uniqueid, setUniqueId] = useState(null);

  const { data, isLoading, refetch } = useQuery({
    queryKey: ["products", user?.email],
    enabled: !!user?.email && !loading,
    queryFn: async () => {
      const res = await axiosSecure.get(`/allproducts`);
      return res.data;
    },
  });

  const { data: product } = useQuery({
    queryKey: ["product", uniqueid],
    enabled: !!uniqueid,
    queryFn: async () => {
      const res = await axiosSecure.get(`/product/${uniqueid}`);
      return res.data;
    },
  });

  const handleDelete = (id) => {
    axiosSecure.delete(`/deleteproduct/${id}`).then((res) => {
      if (res.data.deletedCount > 0) {
        Swal.fire({
          icon: "success",
          title: "Product Deleted Successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        refetch();
      }
    });
  };

  return (
    <div className="w-9/12 mx-auto">
      <div>
      <div>
        <h1 className="text-3xl font-bold my-5 text-center text-purple-400">Product List</h1>
    </div>
        {isLoading ? (
          <div className="flex justify-center items-center">
            <span className="loading loading-spinner loading-lg"></span>
          </div>
        ) : (
          <>
            <div className="overflow-x-auto">
              <table className="table">
                <thead>
                  <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Rating</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {data?.map((product, index) => (
                    <tr key={index}>
                      <td>
                        <img className="w-16" src={product.img} alt="" />
                      </td>
                      <td>{product.name}</td>
                      <td>{product.price}</td>
                      <td>{product.rating}</td>
                      <td>
                        <button
                          onClick={() => {
                            window.my_modal_4.showModal();
                            setUniqueId(product._id);
                          }}
                          className="btn bg-purple-500 btn-sm mr-2"
                        >
                          See Details
                        </button>
                        <button
                          onClick={() => handleDelete(product._id)}
                          className="btn btn-sm btn-warning"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <dialog id="my_modal_4" className="modal">
                <div method="dialog" className="modal-box w-11/12 max-w-5xl">
                  {product && (
                    <>
                      {/* show Product details */}
                      <div className="flex justify-between items-center">
                        <h1 className="text-2xl font-bold text-primary">
                          {product.name}
                        </h1>
                        <button
                          onClick={() => window.my_modal_4.close()}
                          className="btn btn-sm bg-purple-500"
                        >
                          Close
                        </button>
                      </div>

                      <div className="flex justify-between items-center">
                        <div className="w-1/2">
                          <img className="w-full" src={product.img} alt="" />
                        </div>
                        <div className="w-1/2 p-4">
                          <p className="text-xl font-bold">
                            Price: {product.price}
                          </p>
                          <p className="text-xl font-bold">
                            Rating: {product.rating}
                          </p>
                          <p className="text-xl font-bold">
                            Category: {product.category}
                          </p>
                          <p className="text-xl font-bold">
                            Description: {product.description}
                          </p>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </dialog>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Productlist;
