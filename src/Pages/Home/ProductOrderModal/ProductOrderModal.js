import React, { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../../Context/UserContext";

const ProductOrderModal = ({ order, setOrder }) => {
  const { user } = useContext(AuthContext);
  const { name, sellPrice } = order;
  //console.log(order);

  const handleConfirmOrder = (event) => {
    event.preventDefault();
    const form = event.target;
    const mobile = form.mobile.value;
    const location = form.location.value;

    const orderObj = {
      buyerName: user?.displayName,
      buyerEmail: user?.email,
      productName: name,
      productPrice: sellPrice,
      buyerMobile: mobile,
      buyerLocation: location,
    };

    console.log(orderObj);

    fetch("https://auraro-server.vercel.app/orders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(orderObj),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          setOrder(null);
          toast.success("Item is Booked");
        } else {
          setOrder(null);
          toast.error(data.message);
        }
      });
  };

  return (
    <>
      <input type="checkbox" id="order-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="order-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg mb-5 text-primary font-bold">{name}</h3>
          <form onSubmit={handleConfirmOrder}>
            <div className="form-control mt-3">
              <input
                type="text"
                disabled
                value={user?.displayName}
                className="input input-bordered"
              />
            </div>

            <div className="form-control mt-3">
              <input
                type="text"
                disabled
                defaultValue={user?.email}
                className="input input-bordered"
              />
            </div>
            <div className="form-control mt-3">
              <input
                type="text"
                name="productName"
                value={name}
                className="input input-bordered"
              />
            </div>
            <div className="form-control mt-3">
              <input
                type="text"
                name="price"
                value={sellPrice}
                className="input input-bordered"
              />
            </div>
            <div className="form-control mt-3">
              <input
                type="text"
                name="mobile"
                placeholder="Phone Number"
                className="input input-bordered"
              />
            </div>
            <div className="form-control mt-3">
              <input
                type="text"
                name="location"
                placeholder="Meeting Location"
                className="input input-bordered"
              />
            </div>
            <div className="form-control mt-3">
              <button className="btn btn-info">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ProductOrderModal;
