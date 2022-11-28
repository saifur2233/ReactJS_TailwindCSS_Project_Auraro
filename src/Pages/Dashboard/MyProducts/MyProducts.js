import React, { useContext, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import Looding from "../../../Shared/Loading/Loading";
import { AuthContext } from "../../../Context/UserContext";
import ConfirmationModal from "../../../Shared/ConfirmationModal/ConfirmationModal";
import toast from "react-hot-toast";

const MyProducts = () => {
  const { user } = useContext(AuthContext);
  const email = user?.email;
  const [deletingProduct, setDeletingProduct] = useState(null);

  const closeModal = () => {
    setDeletingProduct(null);
  };

  const {
    data: myProducts = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["myProducts"],
    queryFn: async () => {
      const res = await fetch(
        `https://auraro-server.vercel.app/products/seller?email=${email}`
      );
      const data = await res.json();
      return data;
    },
  });

  if (isLoading) {
    return <Looding></Looding>;
  }

  const handleDeleteProduct = (myproduct) => {
    console.log(myproduct);
    fetch(`http://localhost:5000/users/${myproduct._id}`, {
      method: "DELETE",
      // headers: {
      //   authorization: `bearer ${localStorage.getItem("accessToken")}`,
      // },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          closeModal();
          toast.success("Product deleted succesfuly");
          refetch();
        }
      });
  };

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
                  <label
                    onClick={() => setDeletingProduct(product)}
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
      {deletingProduct && (
        <ConfirmationModal
          title={`Are you sure you want to delete?`}
          message={`If you deleting user ${deletingProduct.name}. You cannot undo it.`}
          closeModal={closeModal}
          successAction={handleDeleteProduct}
          modalData={deletingProduct}
        ></ConfirmationModal>
      )}
    </div>
  );
};

export default MyProducts;
