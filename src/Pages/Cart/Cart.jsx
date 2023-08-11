
import { FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useCart from "../../hooks/useCart";

const Cart = () => {
  const [axiosSecure] = useAxiosSecure();
  const [data, isLoading, refetch] = useCart();
  const handleDelete = (id) => {
    axiosSecure.delete(`/cart/${id}`).then((res) => {
      if (res.data.deletedCount > 0) {
        Swal.fire({
          icon: "success",
          title: "Deleted",
          text: "Product deleted from cart",
          showCloseButton: false,
          showCancelButton: false,
          showConfirmButton: false,
          timer: 1500,
        });
        refetch();
      }
    });
  };

  return (
    <div>
        <h1 className="text-3xl font-bold text-center my-10">Cart</h1>
      {isLoading ? (
        <div className="flex justify-center">
          <span className="loading loading-ball loading-lg"></span>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="table">
            <thead>
              <tr>
                <th></th>
                <th>Product Name</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data?.map((item) => (
                <tr key={item._id}>
                  <td>
                    <img src={item?.img} alt={item.name} className="w-20" />
                  </td>
                  <td>{item.name}</td>
                  <td>{item.price}</td>
                  <td>
                    <button
                      onClick={() => handleDelete(item._id)}
                      className="btn btn-sm btn-warning btn-circle"
                    >
                      <FaTrash />
                    </button>
                   
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Cart;
