import React from "react";
import { Link } from "react-router-dom";
import Img from "./optimization/Img";

const NewsCard = ({ id, imgUrl, tag, date, title, article }) => {
  return (
    <section className="w-full h-[450px] bg-white rounded-lg shadow-md p-2 overflow-hidden">
      <Link to={`/blog/article/${id}`} className="text-black">
        <div className="w-full overflow-hidden h-[200px] rounded">
          <Img
            src={imgUrl}
            alt={`${title} image`}
            className="w-full h-full object-cover object-center hover:scale-110"
          />
        </div>
        <article className="w-full h-[250px] flex flex-col gap-4 py-4 px-1">
          <div className="w-full flex items-center gap-4 text-sm font-medium text-yellow-500">
            <p className="py-1 px-2 text-yellow-500 bg-black rounded">{tag}</p>
            <p>{date}</p>
          </div>
          <div className="w-full h-full flex flex-col justify-between gap-2 mb-2">
            <p className="text-black text-lg font-medium">
              {article.length > 195 ? `${article.slice(0, 192)}...` : article}
            </p>
            <p className="text-base font-medium text-yellow-500 underline">
              Read more
            </p>
          </div>
        </article>
      </Link>
    </section>
  );
};

export default NewsCard;
