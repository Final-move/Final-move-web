import React from "react";
import Lottie from "lottie-react";
import { images } from "../../data/constant";
import { useNavigate } from "react-router-dom";
import { ChevronLeft } from "lucide-react";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <section className="w-full h-screen fixed top-0 left-0 z-[100000] bg-white text-black flex justify-center items-center gap-y-4">
      <div className="grid place-items-center gap-4">
        <Lottie
          animationData={images.errorAnime}
          play
          loop
          className="w-[80%] max-w-[500px] block"
        />

        <h3 className="font-semibold text-center text-xl max-w-[500px]">
          404 Not found
        </h3>

        <p className="text-center text-base font-medium max-w-[500px] mb-4">
          Oops! The page you are looking for currently isn't available.
        </p>

        <button
          className=" px-4 py-3 rounded-lg bg-yellow-500 text-black font-medium  hover:bg-yellow-500"
          onClick={() => {
            navigate(-1);
          }}
        >
          <ChevronLeft className="inline-flex text-sm" />
          &nbsp; Back
        </button>
      </div>
    </section>
  );
};

export default NotFound;
