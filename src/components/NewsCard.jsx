import React from "react";
import { Link } from "react-router-dom";
import img from "../assets/media/images/special-teaching.jpg";
import { FaComments } from "react-icons/fa";
import Img from "./optimization/Img";

const NewsCard = () => {
  const comment = 3;
  const exclusive = true;
  const id = 1;

  return (
    <section className="post-card">
      <Link to={`blog/article/${id}`} className="post-card__link">
        <div className="post-content">
          <div className="head">
            <article className="content">
              <h4>
                {exclusive ? <span className="exclusive">Exclusive</span> : ""}
                before studying how to do it, let us first of all study how it
                will not work. often, learning how something does not work helps
                people not to waste their time on what will not work
              </h4>
            </article>

            <div className="img-container">
              <Img
                src={img}
                alt="sign fireman in a green suit holding a microphone"
                className="img"
              />
            </div>
          </div>

          <div className="foot">
            <button className="comment">
              <span>
                <FaComments />
              </span>
              {comment + " comments"}
            </button>
          </div>
        </div>
      </Link>
    </section>
  );
};

export default NewsCard;
