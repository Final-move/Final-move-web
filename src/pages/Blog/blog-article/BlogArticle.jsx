import React from "react";
// import PageContainer from "../../../components/PageContainer";
import { useParams } from "react-router";
import NotFound from "../../../components/NotFound";

const BlogArticle = () => {
  const article = useParams();
  return (
    <>
      <NotFound />
    </>
  );
};

export default BlogArticle;
