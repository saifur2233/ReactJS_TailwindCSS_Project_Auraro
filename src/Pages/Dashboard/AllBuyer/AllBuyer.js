import React from "react";
import Looding from "../../../Shared/Loading/Loading";
import { useQuery } from "@tanstack/react-query";

const AllBuyer = () => {
  const { data: allBuyers = [], isLoading } = useQuery({
    queryKey: ["allBuyers"],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/users/buyers`);
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
        <h1 className="text-5xl font-bold text-center">All Buyers</h1>
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
            {allBuyers.map((buyer, i) => (
              <tr key={buyer._id}>
                <th>{i + 1}</th>
                <td>
                  <div className="font-bold">{buyer.name}</div>
                </td>
                <td>{buyer.email}</td>
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

export default AllBuyer;
