import React from "react";
import { Link } from "react-router-dom";
import img from "../assets/media/images/special-teaching.jpg";
import { FaRegComments } from "react-icons/fa";
// import { FaEye, FaRegClock, FaRegComments } from "react-icons/fa";

const NewsCard = () => {
  // const view = 3;

  return (
    <section className="post-card">
      <Link href="#home" className="post-card__link">
        <div className="post-content">
          <div className="head">
            {/* <div className="date">
              <p className="svg">
                <FaRegClock />
              </p>
              <p>thursday 12 2004</p>
            </div>
            <div className="views">
              <p className="svg">
                <FaEye />
              </p>
              <p>{view}</p>
            </div> */}
            <article className="content">
              <h4>
                before studying how to do it, let us first of all study how it
                will not work. often, learning how something does not work helps
                people not to waste their time on what will not work
              </h4>
            </article>
          </div>
          <div className="body">
            <div className="img-container">
              <img
                src={img}
                alt="sign fireman in a green suit holding a microphone"
                className="img"
              />
            </div>

            <div className="comment-container">
              <button className="comment">
                <span>
                  <FaRegComments />
                </span>{" "}
                {"300"}
              </button>
            </div>
          </div>
        </div>
      </Link>
    </section>
  );
};

export default NewsCard;
