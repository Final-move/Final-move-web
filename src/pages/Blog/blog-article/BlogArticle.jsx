import React, { useEffect, useState } from "react";
// import PageContainer from "../../../components/PageContainer";
import { useParams } from "react-router";
import { newsList } from "../../../data/newsData";
import NotFound from "../../../components/NotFound";

const BlogArticle = () => {
  const article = useParams();
  const [blogArticle, setBlogArticle] = useState([]);

  useEffect(() => {
    const blogArticle = newsList.filter(
      (news) => news.id === parseInt(article.id)
    );
    setBlogArticle(blogArticle);
  }, [article.id]);

  return (
    <>
      {blogArticle.map((data, index) => (
        <div key={index}>{data.title}</div>
      ))}
      <NotFound />
    </>
  );
};

export default BlogArticle;
