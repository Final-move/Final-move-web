import React from "react";
import { PageBanner } from "../../components";
import { PageContainer } from "../../components/general";

const Blog = () => {
  return (
    <PageContainer className={"bg-white grid gap-4"}>
      <PageBanner bgImg={"bg-blog-banner"} title={"BLOG"} />

      <section className="w-full"></section>

      <section className="w-full grid gap-4 grid-cols-blog-col"></section>
    </PageContainer>
  );
};

export default Blog;
