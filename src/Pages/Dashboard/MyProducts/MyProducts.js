import React, { useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import Looding from "../../../Shared/Loading/Loading";
import { AuthContext } from "../../../Context/UserContext";

const MyProducts = () => {
  const { user } = useContext(AuthContext);
  const email = user?.email;

  const { data: myProducts = [], isLoading } = useQuery({
    queryKey: ["myProducts"],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/products/seller?email=${email}`
      );
      const data = await res.json();
      return data;
    },
  });

  if (isLoading) {
    return <Looding></Looding>;
  }
  return (
    <div className="bg-base-200">
      <div className="py-12">
        <h1 className="text-5xl font-bold text-center">My Products</h1>
      </div>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Index</th>
              <th>Name</th>
              <th>Price</th>
              <th>Category</th>
              <th>Ads</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {myProducts.map((product, i) => (
              <tr key={product._id}>
                <th>{i + 1}</th>
                <td>
                  <div className="font-bold">{product.name}</div>
                </td>
                <td>{product.sellPrice}</td>
                <td>{product.category}</td>
                <td>
                  <button className="btn btn-outline btn-info">
                    Make Advertise
                  </button>
                </td>
                <td>
                  <button className="btn btn-outline btn-error">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyProducts;
