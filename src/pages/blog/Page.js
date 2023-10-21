import React from "react";
import { PageBanner } from "../../components";
import { PageContainer } from "../../components/general";
import BlogNews from "./BlogNews";

const Blog = () => {
  return (
    <PageContainer className={"bg-white grid gap-4"}>
      <PageBanner bgImg={"bg-blog-banner"} title={"BLOG"} />

      <BlogNews />
    </PageContainer>
  );
};

export default Blog;
