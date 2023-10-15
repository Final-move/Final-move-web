import React from "react";
import { PageContainer } from "../../components/general";
import { FaSearch } from "react-icons/fa";

const SearchContents = () => {
  return (
    <PageContainer className={"bg-white w-full min-h-screen py-12"}>
      <div className="w-full max-w-lg mx-auto relative">
        <input
          type="text"
          placeholder="Search"
          className="w-full h-16 bg-transparent text-black text-xl font-normal p-4 pl-6 border border-yellow-500 rounded-[5rem]"
          autoComplete="off"
        />
        <button
          type="button"
          className="bg-transparent text-yellow-500 text-xl font-medium absolute top-1/2 -translate-y-1/2 right-8"
        >
          <FaSearch />
        </button>
      </div>
    </PageContainer>
  );
};

export default SearchContents;
