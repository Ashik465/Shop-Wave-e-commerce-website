import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";

const Orderlist = () => {
  const { user, loading } = useAuth();
  const [axiosSecure] = useAxiosSecure();

  const { data, isLoading, refetch } = useQuery({
    queryKey: ["orders", user?.email],
    enabled: !!user?.email && !loading,
    queryFn: async () => {
      const res = await axiosSecure.get(`/allorders`);
      return res.data;
    },
  });

  const handleStatus = (id) => {
    console.log(id);
    axiosSecure.put(`/updateorder/${id}`).then((res) => {
      console.log(res.data);
      if (res.data.modifiedCount > 0) {
        Swal.fire({
          icon: "success",
          title: "Order Delivered Successfully",
          showConfirmButton: false,
          timer: 1500,
        });
      }
      refetch();
    });
  };

  const formatOrderTime = (timestamp) => {
    const orderTime = new Date(timestamp);
    return orderTime.toLocaleString("en-GB", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  };
  return (
    <div className="w-9/12 mx-auto">
      <div>
        <div>
          <h1 className="text-3xl font-bold my-5 text-purple-400 text-center">
            Order list
          </h1>
        </div>
        {isLoading ? (
          <span className="loading loading-infinity loading-lg text-center"></span>
        ) : (
          <>
            <div className="overflow-x-auto">
              <table className="table">
                {/* head */}
                <thead>
                  <tr>
                    <th></th>
                    <th>Product Name</th>
                    <th>Price</th>
                    <th>Ordered Date</th>
                    <th>Status</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {data?.map((order, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{order.name}</td>
                      <td>{order.price}</td>
                      <td>{formatOrderTime(order.orderTime)}</td>
                      <td>{order.status}</td>
                      <td>
                        <button
                          className="btn bg-purple-400"
                          onClick={() => handleStatus(order._id)}
                          disabled={order.status === "delivered"}
                        >
                          Delivered
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Orderlist;
