import React from "react";
import { PageBanner, PageContainer } from "../../components";
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
