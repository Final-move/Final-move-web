import React from "react";
import { FaAngleRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { routeName } from "../data/constant";

const PageBanner = ({ title, bgImg }) => {
  return (
    <section
      className={`${
        bgImg ? bgImg : "bg-search-banner"
      } bg-center bg-cover w-full py-12 flex flex-col gap-4 justify-center items-center`}
    >
      <h3 className="text-white text-3xl md:text-4xl font-semibold">{title}</h3>

      <nav className="flex" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
          <li className="inline-flex items-center">
            <Link
              to={routeName.home}
              className="inline-flex items-center text-lg text-white hover:text-yellow-500"
            >
              Home
            </Link>
          </li>
          <li aria-current="page">
            <div className="flex items-center">
              <FaAngleRight />
              <span className="ms-1 first-letter:uppercase lowercase text-lg md:ms-2 text-yellow-500">
                {title}
              </span>
            </div>
          </li>
        </ol>
      </nav>
    </section>
  );
};

export default PageBanner;
