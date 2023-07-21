import React, { useState, useEffect, useRef } from "react";
import ImageLoader from "./ImageLoader";

const Img = ({ src, alt, className }) => {
  const [loaded, setLoaded] = useState(false);
  const imageContainerRef = useRef(null);
  const imgRef = useRef(null);
  const observerRef = useRef(null);

  useEffect(() => {
    const containerNode = imageContainerRef.current;

    const options = {
      root: null,
      threshold: 0.5,
      rootmargin: "0px",
      delay: 100,
    };

    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setLoaded(true);
          observerRef.current.unobserve(containerNode);
        }
      });
    }, options);

    if (containerNode) {
      observerRef.current.observe(containerNode);
    }

    return () => {
      if (containerNode) {
        observerRef.current.unobserve(containerNode);
      }
    };
  }, []);

  return (
    <div
      ref={imageContainerRef}
      style={{ position: "relative", width: "100%", height: "100%" }}
    >
      {loaded ? (
        <img
          ref={imgRef}
          src={src}
          alt={alt}
          className={`${className ? className : ""}`}
        />
      ) : (
        <ImageLoader />
      )}
    </div>
  );
};

export default Img;
