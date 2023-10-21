import React from "react";
import { FaFacebook, FaShareAlt, FaTwitter, FaWhatsapp } from "react-icons/fa";

const ShareContainer = ({ article }) => {
  return (
    <section className="w-full py-4 flex justify-between items-center">
      <div className="flex items-center gap-4 text-base max-sm:text-xs font-medium text-yellow-500">
        <p className="py-1 px-2 text-yellow-500 bg-black rounded">
          {article.tag}
        </p>
        <p>{article.date}</p>
      </div>

      <div>
        <ul className="flex items-center gap-4 text-xl font-medium object-cover">
          <li>
            <a href="https://" className="text-blue-900">
              <FaFacebook />
            </a>
          </li>
          <li>
            <a href="https://" className="text-blue-500">
              <FaTwitter />
            </a>
          </li>
          <li>
            <a href="https://" className="text-green-600">
              <FaWhatsapp />
            </a>
          </li>
          <li className="text-black">
            <FaShareAlt />
          </li>
        </ul>
      </div>
    </section>
  );
};

export default ShareContainer;
