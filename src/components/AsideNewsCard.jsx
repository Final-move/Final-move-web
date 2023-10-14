import React from "react";
import Img from "./optimization/Img";
import img from "../assets/media/images/very rich.jpg";
import { Link } from "react-router-dom";

const AsideNewsCard = () => {
  const id = 10;

  return (
    <Link
      to={`blog/article/${id}`}
      className="w-full h-44 p-1 rounded-lg flex justify-between items-start shadow-md overflow-hidden"
    >
      <div className="w-3/6 h-full rounded-s overflow-hidden">
        <Img
          src={img}
          alt="blog post"
          className="w-full h-full object-cover object-center"
        />
      </div>
      <article className="h-full flex flex-col justify-between p-2">
        <p className="text-base font-medium text-black">
          THE TIME HAS COME FOR YOU TO BE VERY RICH!
        </p>
        <div className="w-full flex items-center gap-3 text-sm font-medium text-yellow-500">
          <p className="py-1 px-2 text-yellow-500 bg-black rounded">
            Testimony
          </p>
          <p>August 21, 2017</p>
        </div>
      </article>
    </Link>
  );
};

export default AsideNewsCard;
