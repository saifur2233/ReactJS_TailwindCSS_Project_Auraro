import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import ProductOrderModal from "./ProductOrderModal/ProductOrderModal";

const HomeProducts = () => {
  const [products, setProducts] = useState([]);
  const [order, setOrder] = useState(null);
  const [category, setCategory] = useState("Dining");

  const handleProductCategory = (event) => {
    event.preventDefault();
    const form = event.target;
    const selectCategory = form.selectCategory.value;

    if (selectCategory) {
      setCategory(selectCategory);
    }
  };

  useEffect(() => {
    fetch(`http://localhost:5000/category?category=${category}`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [category]);
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
      <div className="flex justify-center py-6">
        <form onSubmit={handleProductCategory} className="form-control">
          <div className="input-group">
            <select
              name="selectCategory"
              defaultValue="Dining"
              className="select select-bordered"
            >
              <option value="Dining">Dining</option>
              <option value="Bedroom">Bedroom</option>
              <option value="Balcony">Balcony</option>
            </select>
            <button className="btn">Search Category</button>
          </div>
        </form>
      </div>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <ProductCard
            key={product._id}
            product={product}
            setOrder={setOrder}
          ></ProductCard>
        ))}
      </div>
      {order && (
        <ProductOrderModal
          order={order}
          setOrder={setOrder}
        ></ProductOrderModal>
      )}
    </div>
  );
};

export default HomeProducts;
