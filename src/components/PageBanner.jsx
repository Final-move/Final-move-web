import React from "react";

const PageBanner = ({ title, bgImg }) => {
  return (
    <section
      className={`${
        bgImg ? bgImg : "bg-search-banner"
      } bg-center bg-cover w-full h-60 flex justify-center items-center`}
    >
      <h3 className="text-black text-4xl font-montserrat font-semibold">
        {title}
      </h3>
    </section>
  );
};

export default PageBanner;
