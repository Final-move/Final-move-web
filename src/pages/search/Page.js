import React from "react";
import SearchContents from "./SearchContents";
import { PageBanner, PageContainer } from "../../components";

const Search = () => {
  return (
    <>
      <PageBanner title={"SEARCH"} bgImg={"bg-search-banner"} />
      <PageContainer className={"w-full min-h-screen bg-white"}>
        <SearchContents />
      </PageContainer>
    </>
  );
};

export default Search;
