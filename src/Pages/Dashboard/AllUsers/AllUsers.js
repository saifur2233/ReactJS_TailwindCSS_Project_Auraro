import React, { useState } from "react";
import Looding from "../../../Shared/Loading/Loading";
import { useQuery } from "@tanstack/react-query";
import ConfirmationModal from "../../../Shared/ConfirmationModal/ConfirmationModal";
import toast from "react-hot-toast";

const AllUsers = () => {
  const [deletingUser, setDeletingUser] = useState(null);

  const closeModal = () => {
    setDeletingUser(null);
  };

  const {
    data: allUsers = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["allUsers"],
    queryFn: async () => {
      const res = await fetch(`https://auraro-server.vercel.app/users`);
      const data = await res.json();
      return data;
    },
  });

  if (isLoading) {
    return <Looding></Looding>;
  }

  const hnadleDeleteUser = (myuser) => {
    console.log(myuser);
    fetch(`https://auraro-server.vercel.app/users/${myuser._id}`, {
      method: "DELETE",
      // headers: {
      //   authorization: `bearer ${localStorage.getItem("accessToken")}`,
      // },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          closeModal();
          toast.success("User deleted succesfuly");
          refetch();
        }
      });
  };

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
                  <label
                    onClick={() => setDeletingUser(user)}
                    htmlFor="confirmationmodal"
                    className="btn btn-outline btn-error"
                  >
                    Delete
                  </label>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {deletingUser && (
        <ConfirmationModal
          title={`Are you sure you want to delete?`}
          message={`If you deleting user ${deletingUser.name}. You cannot undo it.`}
          closeModal={closeModal}
          successAction={hnadleDeleteUser}
          modalData={deletingUser}
        ></ConfirmationModal>
      )}
    </div>
  );
};

export default AllUsers;
