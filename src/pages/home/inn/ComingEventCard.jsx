import React from "react";
import Img from "../../../components/optimization/Img";
import img1 from "../../../assets/media/images/city.jpg";
import { Link } from "react-router-dom";
import { FaRegClock } from "react-icons/fa";

const ComingEventCard = () => {
  const id = 2;

  return (
    <Link to={`blog/article/event/${id}`} className="container">
      <div className="img-container">
        <Img src={img1} alt={"health"} className={"img"} />
      </div>
      <div className="content-container">
        <div className="head">
          <h4 className="exclusive">Event</h4>
        </div>
        <article className="body">
          <h3>
            <span className="clock">
              <FaRegClock />
            </span>
            Upcoming: London Crusade
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse vel
            voluptatibus similique quaerat iure harum!
          </p>
        </article>
      </div>
    </Link>
  );
};

export default ComingEventCard;
