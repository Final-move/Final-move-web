import React from "react";

const ImageLoader = () => {
  return (
    <>
      <div className={`flex justify-center items-center w-full h-full`}>
        <div
          className={`border-4 border-white border-t-[#ffd900] rounded-full w-10 h-10 animate-spin`}
        ></div>
      </div>
    </>
  );
};

export default ImageLoader;
