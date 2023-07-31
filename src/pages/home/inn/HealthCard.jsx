import React from "react";
import Img from "../../../components/optimization/Img";
import img1 from "../../../assets/media/images/vadim-paripa-MmrSaEJZs4s-unsplash.jpg";
import { Link } from "react-router-dom";

const HealthCard = () => {
  const id = 2;

  return (
    <Link to={`blog/article/${id}`} className="container">
      <div className="img-container">
        <Img src={img1} alt={"health"} className={"img"} />
      </div>
      <div className="content-container">
        <div className="head">
          <h4 className="exclusive">Health</h4>
        </div>
        <article className="body">
          <h3>NEVER GET SO RICH YOU DON'T EXERCISE!</h3>
          <p>
            "For bodily exercise profits ..." (1Timothy 4:8). HELP YOU HEALTH
            WITH EXERCISES, PLEASE.
          </p>
        </article>
      </div>
    </Link>
  );
};

export default HealthCard;
