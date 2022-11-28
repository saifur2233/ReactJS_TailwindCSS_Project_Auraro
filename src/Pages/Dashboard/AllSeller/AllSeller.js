import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import Looding from "../../../Shared/Loading/Loading";
import toast from "react-hot-toast";
import ConfirmationModal from "../../../Shared/ConfirmationModal/ConfirmationModal";

const AllSeller = () => {
  const [deletingUser, setDeletingUser] = useState(null);

  const closeModal = () => {
    setDeletingUser(null);
  };

  const {
    data: allSellers = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["allSellers"],
    queryFn: async () => {
      const res = await fetch(`https://auraro-server.vercel.app/users/sellers`);
      const data = await res.json();
      return data;
    },
  });

  if (isLoading) {
    return <Looding></Looding>;
  }

  const hnadleDeleteUser = (myuser) => {
    console.log(myuser);
    fetch(`http://localhost:5000/users/${myuser._id}`, {
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
                  <label
                    onClick={() => setDeletingUser(seller)}
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

export default AllSeller;
