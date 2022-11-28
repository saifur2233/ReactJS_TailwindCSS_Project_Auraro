import React, { useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../../../Context/UserContext";
import Looding from "../../../Shared/Loading/Loading";

const MyOrders = () => {
  //const [myOrders, setMyOrders] = useState([]);
  const { user } = useContext(AuthContext);
  const email = user?.email;
  const { data: myOrders = [], isLoading } = useQuery({
    queryKey: ["myOrders", email],
    queryFn: async () => {
      const res = await fetch(
        `https://auraro-server.vercel.app/orders?email=${email}`
      );
      const data = await res.json();
      return data;
    },
  });

  if (isLoading) {
    return <Looding></Looding>;
  }

  return (
    <div className="">
      <div className="my-12">
        <h1 className="text-5xl font-bold text-center">My Orders</h1>
      </div>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <td></td>
              <th>Title</th>
              <th>Price</th>
              <th>Pay</th>
            </tr>
          </thead>
          <tbody>
            {myOrders.map((order, i) => (
              <tr key={order._id}>
                <th>{i + 1}</th>

                <td>
                  <div className="font-bold">{order.productName}</div>
                </td>
                <td>{order.productPrice}</td>
                <td>
                  <button className="btn btn-outline btn-info">PAY</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrders;
