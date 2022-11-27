import React from "react";
import { useQuery } from "@tanstack/react-query";
import Looding from "../../../Shared/Loading/Loading";

const AllSeller = () => {
  const { data: allSellers = [], isLoading } = useQuery({
    queryKey: ["allSellers"],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/users/sellers`);
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
        <h1 className="text-5xl font-bold text-center">All Sellers</h1>
      </div>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Index</th>
              <th>Name</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {allSellers.map((seller, i) => (
              <tr key={seller._id}>
                <th>{i + 1}</th>
                <td>
                  <div className="font-bold">{seller.name}</div>
                </td>
                <td>{seller.email}</td>
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

export default AllSeller;
