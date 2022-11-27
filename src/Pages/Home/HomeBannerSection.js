import React from "react";
import HeroImg from "../../assets/images/bn1.png";

const HomeBannerSection = () => {
  return (
    <div
      className="hero"
      style={{ backgroundImage: `url(${HeroImg})`, height: "500px" }}
    >
      <div className=""></div>
      <div className="hero-content text-start mr-auto">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
          <p className="mb-5">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-gost">Shop Now</button>
        </div>
      </div>
    </div>
  );
};

export default HomeBannerSection;
