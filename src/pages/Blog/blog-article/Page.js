import React from "react";
import PageContainer from "../../../components/PageContainer";
import { useParams } from "react-router";

const BlogArticle = () => {
  const article = useParams();
  console.log(article);
  return <PageContainer>lorem70</PageContainer>;
};

export default BlogArticle;
