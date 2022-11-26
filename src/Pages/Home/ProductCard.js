import React from "react";

const ProductCard = ({ product }) => {
  const { name, image, description, sellPrice, condition } = product;
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{description.slice(0, 45)}...</p>
        <div className="flex justify-between">
          <p>Price: {sellPrice}</p>
          <p>Status: {condition}</p>
        </div>
        <div className="card-actions flex justify-center">
          <button className="btn btn-outline btn-success">Buy Now</button>
          <button className="btn btn-outline btn-info">WishList</button>
          <button className="btn btn-outline btn-error">View Details</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
