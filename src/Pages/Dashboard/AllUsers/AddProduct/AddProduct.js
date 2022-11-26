import React from "react";

const AddProduct = () => {
  const handleAddProduct = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const sellPrice = form.sellPrice.value;
    const orginalPrice = form.orginalPrice.value;
    const condition = form.condition.value;
    const category = form.category.value;
    const mobile = form.mobile.value;
    const location = form.location.value;
    const description = form.description.value;

    console.log(
      name,
      sellPrice,
      orginalPrice,
      condition,
      category,
      mobile,
      location,
      description
    );
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content">
        <form
          onSubmit={handleAddProduct}
          className="card p-12 w-full shadow-2xl bg-base-100"
        >
          <h1 className="text-5xl font-bold">Add Product</h1>
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
            <div className="form-control">
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
            <div className="form-control">
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
            <div className="form-control">
              <label className="label">
                <span className="label-text">Condition</span>
              </label>
              <select
                name="condition"
                defaultValue="Good"
                className="select select-bordered w-full max-w-xs"
              >
                <option value="Excellent">Excellent</option>
                <option value="Good">Good</option>
                <option value="Fair">Fair</option>
              </select>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Product Category</span>
              </label>
              <select
                name="category"
                defaultValue="Dining"
                className="select select-bordered w-full max-w-xs"
              >
                <option value="Dining">Dining</option>
                <option value="Bedroom">Bedroom</option>
                <option value="Balcony">Balcony</option>
              </select>
            </div>
            <div className="form-control">
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
            <div className="form-control">
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
