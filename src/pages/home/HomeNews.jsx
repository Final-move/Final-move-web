import React from "react";
import { PageContainer } from "../../components/general";
import { NewsCard, AsideCard } from "../../components";
import { latestNews, rencentNews } from "../../data/newsData";

const BannerNews = () => {
  return (
    <PageContainer className="homeNews-section">
      <section className="home-main-news">
        {latestNews.map((data, index) => (
          <NewsCard {...data} key={index} />
        ))}
      </section>
      <aside className="home-aside-news">
        {rencentNews.map((data, index) => (
          <AsideCard {...data} key={index} />
        ))}
      </aside>
    </PageContainer>
  );
};

export default BannerNews;
