import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductCardDetails = () => {
  const id = useParams();
  console.log(id);
  const [product, setProduct] = useState({});

  useEffect(() => {
    fetch(`https://auraro-server.vercel.app/category/:${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((error) => console.error(error));
  }, [id]);

  console.log(product);

  return (
    <div className="bg-base-200 p-12">
      <div className="card w-full bg-base-100 shadow-xl">
        <figure>
          <img src={product?.image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{product?.name}</h2>
          <p>{product?.description}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-success">Buy Now</button>
            <button className="btn btn-info">Back to Home</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCardDetails;
