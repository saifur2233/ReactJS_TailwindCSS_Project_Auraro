import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const HomeProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className="my-10">
      <div className="text-center">
        <h1 className="text-5xl text-secondary font-bold">
          New Resale Products
        </h1>
        <p className="py-6">
          Magna sit amet purus gravida quis blandit turpis cursus. Venenatis
          tellus in metus vulputate eu scelerisque felis.
        </p>
      </div>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <ProductCard key={product._id} product={product}></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default HomeProducts;
