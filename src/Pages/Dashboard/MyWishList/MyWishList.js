import React from "react";

const MyWishList = () => {
  return (
    <div className="bg-base-200">
      <div className="py-12">
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
            <tr>
              <th>{1}</th>
              <td>
                <div className="font-bold"></div>
              </td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyWishList;
