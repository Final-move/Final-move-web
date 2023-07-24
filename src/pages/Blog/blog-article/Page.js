import React from "react";
import PageContainer from "../../../components/PageContainer";
import { useParams } from "react-router";

const BlogArticle = () => {
  const article = useParams();
  console.log(article);
  return (
    <PageContainer style={{ height: "100vh", background: "yellow" }}>
      lorem70
    </PageContainer>
  );
};

export default BlogArticle;
