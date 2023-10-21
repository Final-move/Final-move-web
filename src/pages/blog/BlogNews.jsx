import React from "react";
import { NewsCard, AsideCard } from "../../components";
import { latestNews, rencentNews } from "../../data/newsData";

const BlogNews = () => {
  return (
    <section className="w-full grid gap-4">
      <section className="w-full grid gap-4 grid-cols-blog-col">
        {latestNews.map((data, index) => (
          <NewsCard {...data} key={index} />
        ))}
      </section>
      <aside className="w-full grid grid-cols-blog-col grid-rows-3 overflow-scroll">
        {rencentNews.map((data, index) => (
          <AsideCard {...data} key={index} />
        ))}
      </aside>
    </section>
  );
};

export default BlogNews;
