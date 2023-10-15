import React from "react";
import SearchContents from "./SearchContents";
import { PageContainer } from "../../components/general";
import { PageBanner } from "../../components";

const Search = () => {
  return (
    <PageContainer className={"w-full min-h-screen bg-white"}>
      <PageBanner title={"SEARCH"} bgImg={"bg-Search-banner"} />

      <SearchContents />
    </PageContainer>
  );
};

export default Search;
