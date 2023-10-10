import React from "react";
import { PageContainer } from "../../components/general";
import { NewsCard, AsideCard } from "../../components";

const BannerNews = () => {
  return (
    <PageContainer className="homeNews-section">
      <section className="home-main-news">
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
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
