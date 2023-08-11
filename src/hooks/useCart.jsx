import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useCart = () => {
  const { user } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["cart", user?.email],
    enabled: !!user,
    queryFn: async () => {
      const res = await axiosSecure.get(`/cart?email=${user.email}`);
      return res.data;
    },
  });
  return [data, isLoading, refetch];
};

export default useCart;