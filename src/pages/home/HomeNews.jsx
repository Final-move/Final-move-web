import React from "react";
import { NewsCard, AsideCard, PageContainer } from "../../components";
import { latestNews, rencentNews } from "../../data/newsData";
import { Link } from "react-router-dom";

const BannerNews = () => {
  return (
    <PageContainer className="w-full grid gap-8 py-20 bg-white">
      <div className="w-full grid grid-cols-1 min-[1000px]:grid-cols-home-news gap-4">
        <section className="w-full grid gap-4 grid-cols-1 min-[595px]:grid-cols-home-col justify-start items-start">
          {latestNews.map((data, index) => (
            <NewsCard {...data} key={index} />
          ))}
        </section>
        <aside className="w-full grid gap-4">
          {rencentNews
            .map((data, index) => <AsideCard {...data} key={index} />)
            .slice(0, 10)}
        </aside>
      </div>
      <div className="w-full flex justify-center items-center">
        <Link
          to={"/blog"}
          className="py-2 px-4 bg-black text-yellow-500 rounded-lg"
        >
          View More
        </Link>
      </div>
    </PageContainer>
  );
};

export default BannerNews;
