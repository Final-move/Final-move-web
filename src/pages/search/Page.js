import React from "react";
import SearchBanner from "./SearchBanner";
import SearchContents from "./SearchContents";
import { PageContainer } from "../../components/general";

const Search = () => {
  return (
    <PageContainer className={"w-full min-h-screen bg-white"}>
      <SearchBanner />

      <SearchContents />
    </PageContainer>
  );
};

export default Search;
