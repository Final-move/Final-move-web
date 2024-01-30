import React from "react";
import { PageBanner, PageContainer } from "../../components";
import BlogNews from "./BlogNews";

const Blog = () => {
  return (
    <>
      <PageBanner bgImg={"bg-blog-banner"} title={"BLOG"} />
      <PageContainer className={"bg-white grid gap-4 py-12"}>
        <BlogNews />
      </PageContainer>
    </>
  );
};

export default Blog;
