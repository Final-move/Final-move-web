// import React, { useState } from "react";
import { useParams } from "react-router";
import { NotFound, PageContainer } from "../../components/general";
import ShareContainer from "./ShareContainer";
import { latestNews } from "../../data/newsData";
import RelatedArticle from "./RelatedArticle";

const BlogArticle = () => {
  const params = useParams();
  const { id } = params;
  const pageUrl = encodeURI(window.location.href);

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

      <ShareContainer article={article} pageUrl={pageUrl} />

      <section className="grid gap-4 mt-4 mb-8">
        <div className="mb-4">
          <h2 className="font-montserrat text-black text-2xl font-semibold">
            {article.title}
          </h2>
        </div>

        <div className="text-lg text-black">
          <p>{article.article}</p>
        </div>
      </section>

      <RelatedArticle />
    </PageContainer>
  );
};

export default BlogArticle;
