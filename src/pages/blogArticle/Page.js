// import React, { useState } from "react";
import { useParams } from "react-router";
import { NotFound, PageContainer } from "../../components/general";
import { latestNews } from "../../data/newsData";
import Img from "../../components/optimization/Img";

const BlogArticle = () => {
  const params = useParams();
  const { id } = params;
  // const [article, setArticle] = useState(null);

  const data = latestNews.find((data) => id === data.id);

  if (!data) {
    return (
      <>
        <NotFound />
      </>
    );
  }

  return (
    <PageContainer>
      <Img src={data.imgUrl} alt={`${data.title} image`} />

      <p>{data.article}</p>
    </PageContainer>
  );
};

export default BlogArticle;
