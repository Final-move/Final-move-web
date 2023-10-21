// import React, { useState } from "react";
import { useParams } from "react-router";
import { NotFound, PageContainer } from "../../components/general";
import ShareContainer from "./ShareContainer";
import { latestNews } from "../../data/newsData";

const BlogArticle = () => {
  const params = useParams();
  const { id } = params;

  const article = latestNews.find((news) => news.id === parseInt(id));

  if (!article) {
    return (
      <>
        <NotFound />
      </>
    );
  }

  return (
    <PageContainer className={"bg-white text-black py-12"}>
      <section className="w-full h-[70vh] max-h-[550px]">
        <img
          src={article.imgUrl}
          alt={`${article.title} `}
          className={"w-full h-full object-cover object-center"}
        />
      </section>

      <ShareContainer article={article} />

      <p>{article.article}</p>
    </PageContainer>
  );
};

export default BlogArticle;
