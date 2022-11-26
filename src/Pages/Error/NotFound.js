import React from "react";
import ErrorImg from "../../assets/images/error/404NotFound.png";

const NotFound = () => {
  return (
    <div className="flex justify-center my-12">
      <img src={ErrorImg} className="rounded-lg shadow-2xl" />
    </div>
  );
};

export default NotFound;
