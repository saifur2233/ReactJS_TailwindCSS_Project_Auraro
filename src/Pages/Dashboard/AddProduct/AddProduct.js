import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Context/UserContext";

const AddProduct = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [productImg, setProductImg] = useState(null);
  const imageHostKey = "35af1b312a92b1e804c7d90da7d847fa";

  const handleAddProduct = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const sellPrice = form.sellPrice.value;
    const orginalPrice = form.orginalPrice.value;
    const condition = form.condition.value;
    const category = form.category.value;
    const mobileNumber = form.mobile.value;
    const location = form.location.value;
    const description = form.description.value;
    const yearOfPurchase = form.yearOfPurchase.value;
    const seller = user?.email;
    const time = new Date().toLocaleString();

    const formData = new FormData();
    formData.append("image", productImg);

    const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        console.log(imgData);
        if (imgData.success) {
          const product = {
            name,
            orginalPrice,
            sellPrice,
            condition,
            mobileNumber,
            location,
            category,
            description,
            yearOfPurchase,
            image: imgData.data.url,
            seller,
            time,
          };

          //save product
          fetch("https://auraro-server.vercel.app/products", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(product),
          })
            .then((res) => res.json())
            .then((result) => {
              console.log(result);
              toast.success("Product added Successfully");
              navigate("/dashboard/myproducts");
            });
        }
      });
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content w-3/4">
        <form
          onSubmit={handleAddProduct}
          className="card p-12 w-full shadow-2xl bg-base-100"
        >
          <h1 className="text-5xl font-bold text-center">Add Product</h1>
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="name"
                className="input input-bordered"
              />
            </div>
            <div className="flex gap-6">
              <div className="form-control w-1/2">
                <label className="label">
                  <span className="label-text">Selling Price</span>
                </label>
                <input
                  type="text"
                  placeholder="Selling Price"
                  name="sellPrice"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control w-1/2">
                <label className="label">
                  <span className="label-text">Original Price</span>
                </label>
                <input
                  type="text"
                  placeholder="Original Price"
                  name="orginalPrice"
                  className="input input-bordered"
                />
              </div>
            </div>
            <div className="flex gap-6">
              <div className="form-control w-1/2">
                <label className="label">
                  <span className="label-text">Condition</span>
                </label>
                <select
                  name="condition"
                  defaultValue="Good"
                  className="select select-bordered"
                >
                  <option value="Excellent">Excellent</option>
                  <option value="Good">Good</option>
                  <option value="Fair">Fair</option>
                </select>
              </div>
              <div className="form-control w-1/2">
                <label className="label">
                  <span className="label-text">Product Category</span>
                </label>
                <select
                  name="category"
                  defaultValue="Dining"
                  className="select select-bordered"
                >
                  <option value="Dining">Dining</option>
                  <option value="Bedroom">Bedroom</option>
                  <option value="Balcony">Balcony</option>
                </select>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="form-control w-1/2">
                <label className="label">
                  <span className="label-text">Mobile Number</span>
                </label>
                <input
                  type="text"
                  placeholder="Mobile Number"
                  name="mobile"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control w-1/2">
                <label className="label">
                  <span className="label-text">Location</span>
                </label>
                <input
                  type="text"
                  placeholder="Location"
                  name="location"
                  className="input input-bordered"
                />
              </div>
            </div>
            <div className="flex gap-6">
              <div className="form-control w-1/2">
                <label className="label">
                  <span className="label-text">Year of Purchase</span>
                </label>
                <input
                  type="text"
                  name="yearOfPurchase"
                  placeholder="Year of Purchase"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control w-1/2">
                <label className="label">
                  <span className="label-text">Product Image</span>
                </label>
                <input
                  name="productImg"
                  type="file"
                  onChange={(e) => setProductImg(e.target.files[0])}
                  className="file-input file-input-bordered file-input-secondary"
                />
              </div>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Description</span>
              </label>
              <textarea
                className="textarea textarea-bordered"
                placeholder="Description"
                name="description"
              ></textarea>
            </div>

            <div className="form-control mt-6">
              <button className="btn btn-primary">Submit</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
