import React from "react";
import Itemads from "../../assets/images/home/itemads.png";

const ItemAds = () => {
  return (
    <div
      className="hero"
      style={{ backgroundImage: `url(${Itemads})`, height: "500px" }}
    >
      <div className=""></div>
      <div className="hero-content text-start ml-auto">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">
            Irresistibly Amazing Furniture
          </h1>
          <p className="mb-5">
            Find an idea that suits your taste with our great selection of
            hanging systems, floor lamps and table lamps.
          </p>
          <button className="btn btn-gost">Shop Now</button>
        </div>
      </div>
    </div>
  );
};

export default ItemAds;
