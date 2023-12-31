import React from "react";
import { PageContainer, SectionHeader } from "../../components";
import { Link } from "react-router-dom";

const HomeContact = () => {
  return (
    <PageContainer
      className={"py-20 w-full flex justify-center items-center bg-yellow-400"}
    >
      <div className="w-full flex flex-col items-center gap-4">
        <SectionHeader
          title={"We're here to help and connect with you in any way we can"}
        />

        <Link
          to={"/contact"}
          className="bg-black text-yellow-500 text-base py-2 px-4 rounded-lg text-center"
        >
          Plan Your Visit
        </Link>
      </div>
    </PageContainer>
  );
};

export default HomeContact;
