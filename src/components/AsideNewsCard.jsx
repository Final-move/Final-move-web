import React from "react";
import img from "../assets/media/images/very rich.jpg";
import { Link } from "react-router-dom";

const AsideNewsCard = () => {
  return (
    <Link className="w-full h-48 rounded-lg flex justify-between items-start shadow">
      <div className="w-3/6 h-full">
        <img
          src={img}
          alt="blog post"
          className="w-full h-full object-cover object-center"
        />
      </div>
      <article className="h-full p-2 flex flex-col justify-between">
        <h3 className="text-base font-semibold text-black">
          THE TIME HAS COME FOR YOU TO BE VERY RICH!
        </h3>
        <p className="text-sm font-medium text-black">october 28 2022</p>
      </article>
    </Link>
  );
};

export default AsideNewsCard;
