import React from "react";
import { PageContainer } from "../../components/general";
import { NewsCard, AsideCard } from "../../components";
import { mainNews } from "../../data/newsData";

const BannerNews = () => {
  return (
    <PageContainer className="homeNews-section">
      <section className="home-main-news">
        {mainNews.map((data, index) => (
          <NewsCard {...data} key={index} />
        ))}
      </section>
      <aside className="home-aside-news">
        <AsideCard />
        <AsideCard />
        <AsideCard />
        <AsideCard />
      </aside>
    </PageContainer>
  );
};

export default BannerNews;
