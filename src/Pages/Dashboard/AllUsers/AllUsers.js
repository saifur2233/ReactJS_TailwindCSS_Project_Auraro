import React from "react";
import Looding from "../../../Shared/Loading/Loading";
import { useQuery } from "@tanstack/react-query";

const AllUsers = () => {
  const { data: allUsers = [], isLoading } = useQuery({
    queryKey: ["allUsers"],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/users`);
      const data = await res.json();
      return data;
    },
  });

  if (isLoading) {
    return <Looding></Looding>;
  }
  return (
    <div>
      <div className="text-center my-12">
        <h1 className="text-5xl font-bold">All Users</h1>
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
            {allUsers.map((user, i) => (
              <tr key={user._id}>
                <th>{i + 1}</th>
                <td>
                  <div className="font-bold">{user.name}</div>
                </td>
                <td>{user.email}</td>
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

export default AllUsers;
