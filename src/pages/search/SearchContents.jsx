import React, { useState } from "react";
import { PageContainer } from "../../components/general";
import { FaSearch } from "react-icons/fa";

const SearchContents = () => {
  const [search, setSearch] = useState();

  return (
    <PageContainer className={"bg-white w-full min-h-screen py-12"}>
      <div className="w-full max-w-lg mx-auto relative">
        <label
          className={
            search
              ? `hidden`
              : `text-xl font-normal bg-transparent text-yellow-500 absolute left-8 top-1/2 -translate-y-1/2`
          }
        >
          Search
        </label>
        <input
          type="text"
          className="w-full h-16 bg-transparent text-black text-xl font-normal p-4 pl-6 border border-yellow-500 hover:border-yellow-500 active:border-yellow-500 rounded-[5rem]"
          autoComplete="off"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
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
