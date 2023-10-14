import React, { useState } from "react";
import { useParams } from "react-router";
import { NotFound } from "../../components/general";

const BlogArticle = () => {
  const params = useParams();
  const { id } = params;
  const [article, setArticle] = useState(null);

  if (!article) {
    return (
      <>
        <NotFound />
      </>
    );
  }

  return <></>;
};

export default BlogArticle;
