import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";


const DashHome = () => {
    const { data: users } = useQuery({
        queryKey: ["users"],
        queryFn: () =>
          fetch("http://localhost:5000/customers").then((res) =>
            res.json()
          ),
      });
      const customers = users?.length;
    return (
        <>   
        {/* statistic */}
        <div className="px-4 py-16 mx-auto  bg-slate-300 rounded-lg my-5 ">
      <div className="grid grid-cols-3 gap-8 ">
       
        <div className="text-center md:border-r">
          <h6 className="text-4xl font-bold lg:text-5xl xl:text-6xl">{customers}</h6>
          <p className="text-sm font-medium tracking-widest text-gray-800 uppercase lg:text-base">
           Users
          </p>
        </div>
        <div className="text-center md:border-r">
          <h6 className="text-4xl font-bold lg:text-5xl xl:text-6xl">48.3K</h6>
          <p className="text-sm font-medium tracking-widest text-gray-800 uppercase lg:text-base">
            Order
          </p>
        </div>
        <div className="text-center">
          <h6 className="text-4xl font-bold lg:text-5xl xl:text-6xl">24.5$</h6>
          <p className="text-sm font-medium tracking-widest text-gray-800 uppercase lg:text-base">
           Sell
          </p>
        </div>
      </div>
    </div>
    {/* customer */}
    <div>
        <h1 className="text-3xl font-bold my-5">Customer</h1>
    </div>
    <div className="overflow-x-auto">
              <table className="table">
                <thead>
                  <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Email</th>
                  </tr>
                </thead>
                <tbody>
                  {users?.slice(0, 5).map((user, index) => (
                    <tr key={index}>
                      <td>
                        <img
                          className="w-12 rounded-full"
                          src={user.image}
                          alt=""
                        />
                      </td>
                      <td>{user.name}</td>
                      <td>{user.email}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="my-5 flex justify-center">
                <Link to="/dashboard/customers">
                  <button className="btn bg-purple-500 btn-sm">
                    See all customers
                  </button>
                </Link>
              </div>
            </div>
        </>
    );
};

export default DashHome;