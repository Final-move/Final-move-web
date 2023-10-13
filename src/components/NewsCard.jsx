import React from "react";
import { Link } from "react-router-dom";
import img from "../assets/media/images/special-teaching.jpg";
import Img from "./optimization/Img";

const NewsCard = () => {
  const id = 1;

  return (
    <section className="w-full h-[450px] bg-white rounded-lg shadow-md p-2">
      <Link to={`blog/article/${id}`} className="text-black">
        <div className="w-full overflow-hidden h-[200px] rounded">
          <Img
            src={img}
            alt="sign fireman in a green suit holding a microphone"
            className="w-full h-full object-cover object-center hover:scale-110"
          />
        </div>
        <article className="w-full flex flex-col gap-4 py-4 px-1">
          <div className="w-full flex items-center gap-6 text-sm font-medium text-yellow-500">
            <p className="py-1 px-2 text-yellow-500 bg-black rounded">
              Testimony
            </p>
            <p>August 21, 2017</p>
          </div>
          <h3 className="text-black text-lg font-semibold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque,
            repellendus!
          </h3>
          <p className="text-black text-base font-medium">
            before studying how to do it, let us first of all study how it will
            not work. often, learning how something does not work helps people
            not to waste their time on what will not work
          </p>
          <p className="text-base font-medium text-yellow-500 underline">
            Read more
          </p>
        </article>
      </Link>
    </section>
  );
};

export default NewsCard;
