import React from "react";
import Img from "./optimization/Img";
import { Link } from "react-router-dom";

const AsideNewsCard = ({ id, imgUrl, title, article, tag, date }) => {
  return (
    <Link
      to={`blog/article/${id}`}
      className="w-full h-44 p-1 rounded-lg flex justify-between items-start shadow-md overflow-hidden"
    >
      <div className="w-3/6 h-full rounded-s overflow-hidden">
        <Img
          src={imgUrl}
          alt={`${title} image`}
          className="w-full h-full object-cover object-center"
        />
      </div>
      <article className="h-full flex flex-col justify-between p-2">
        <p className="text-base font-medium text-black">
          {article.length > 62 ? `${article.slice(0, 61)}...` : article}
        </p>
        <div className="w-full flex items-center gap-3 text-sm font-medium text-yellow-500">
          <p className="py-1 px-2 text-yellow-500 bg-black rounded">{tag}</p>
          <p>{date}</p>
        </div>
      </article>
    </Link>
  );
};

export default AsideNewsCard;
