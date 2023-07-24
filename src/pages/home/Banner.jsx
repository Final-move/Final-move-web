import React from "react";
import PageContainer from "../../components/PageContainer";
import HealthCard from "./inn/HealthCard";
import ComingEventCard from "./inn/ComingEventCard";
import Carousel from "./inn/Carousel";

const Banner = () => {
  return (
    <PageContainer className={"banner-section"}>
      <div className="container">
        <section className="main-banner">
          <Carousel />
        </section>
        <aside className="aside-banner">
          <div className="aside-upcoming">
            <ComingEventCard />
          </div>
          <div className="aside-health">
            <HealthCard />
          </div>
        </aside>
      </div>
    </PageContainer>
  );
};

export default Banner;
