import React from "react";
import { PageContainer } from "../../components/general";
import { Link } from "react-router-dom";

const HomeContact = () => {
  return (
    <PageContainer
      className={"py-20 w-full flex justify-center items-center bg-white"}
    >
      <div className="w-full grid gap-2">
        <p className="text-xl text-black text-center">
          We're here to help and connect with you in any way we can.
        </p>

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
