import React from "react";
import PageContainer from "../../components/PageContainer";
import NewsCard from "../../components/NewsCard";
import AsideNewsGard from "../../components/AsideNewsGard";

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
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
        necessitatibus reprehenderit tempore reiciendis adipisci explicabo
        cumque, quod corporis temporibus perferendis?
        <AsideNewsGard />
      </aside>
    </PageContainer>
  );
};

export default BannerNews;
