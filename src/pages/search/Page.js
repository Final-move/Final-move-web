import React from "react";
import SearchContents from "./SearchContents";
import { PageBanner, PageContainer } from "../../components";

const Search = () => {
  return (
    <PageContainer className={"w-full min-h-screen bg-white"}>
      <PageBanner title={"SEARCH"} bgImg={"bg-search-banner"} />

      <SearchContents />
    </PageContainer>
  );
};

export default Search;
