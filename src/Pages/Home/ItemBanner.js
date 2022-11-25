import React from "react";
import Banner1 from "../../assets/images/home/bn14.png";
import Banner2 from "../../assets/images/home/bn15.png";
import Banner3 from "../../assets/images/home/bn16.png";
import Banner4 from "../../assets/images/home/bn17.png";

const ItemBanner = () => {
  return (
    <section>
      <div className="flex my-6 w-full">
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 flex-grow card rounded-box place-items-center">
          <div
            className="hero"
            style={{ backgroundImage: `url(${Banner1})`, height: "400px" }}
          >
            <div className=""></div>
            <div className="hero-content text-right ml-auto mt-auto">
              <div className="max-w-md">
                <h1 className="mb-5 text-4xl">Hello there</h1>
                <button className="btn btn-outline btn-warning">
                  Shop Now
                </button>
              </div>
            </div>
          </div>
          <div
            className="hero"
            style={{ backgroundImage: `url(${Banner2})`, height: "400px" }}
          >
            <div className=""></div>
            <div className="hero-content text-right ml-auto mt-auto">
              <div className="max-w-md">
                <h1 className="mb-5 text-4xl">Hello there</h1>
                <button className="btn btn-outline btn-warning">
                  Shop Now
                </button>
              </div>
            </div>
          </div>
          <div
            className="hero"
            style={{ backgroundImage: `url(${Banner3})`, height: "400px" }}
          >
            <div className=""></div>
            <div className="hero-content text-right ml-auto mt-auto">
              <div className="max-w-md">
                <h1 className="mb-5 text-4xl">Hello there</h1>
                <button className="btn btn-outline btn-warning">
                  Shop Now
                </button>
              </div>
            </div>
          </div>
          <div
            className="hero"
            style={{ backgroundImage: `url(${Banner4})`, height: "400px" }}
          >
            <div className=""></div>
            <div className="hero-content text-right ml-auto mt-auto">
              <div className="max-w-md">
                <h1 className="mb-5 text-4xl">Hello there</h1>
                <button className="btn btn-outline btn-warning">
                  Shop Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ItemBanner;
