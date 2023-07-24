import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Location } from "react-iconly";
import { FaCaretLeft, FaCaretRight } from "react-icons/fa";
import { carouselData } from "../../../data/carouselData";

const Carousel = () => {
  const carouselTrack = useRef(null);
  const leftBtnRef = useRef(null);
  const rightBtnRef = useRef(null);

  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  useEffect(() => {
    const trackNode = carouselTrack.current;
    const slides = Array.from(trackNode.children);
    const slideWidth = slides[0].getBoundingClientRect().width;

    const setSlidePosition = (slide, index) => {
      slide.style.left = slideWidth * index + "px";
    };

    slides.forEach(setSlidePosition);

    leftBtnRef.current.addEventListener("click", () => {
      setCurrentSlideIndex((prevIndex) =>
        prevIndex === 0 ? carouselData.length - 1 : prevIndex - 1
      );
    });

    rightBtnRef.current.addEventListener("click", () => {
      setCurrentSlideIndex((prevIndex) =>
        prevIndex === carouselData.length - 1 ? 0 : prevIndex + 1
      );
    });

    const scrollInterval = setInterval(() => {
      setCurrentSlideIndex(
        (prevIndex) => (prevIndex + 1) % carouselData.length
      );
    }, 5000);

    return () => {
      clearInterval(scrollInterval);
    };
  }, []);

  useEffect(() => {
    const trackNode = carouselTrack.current;
    const slideWidth = trackNode.children[0].getBoundingClientRect().width;
    trackNode.style.transform = `translateX(-${
      slideWidth * currentSlideIndex
    }px)`;
  }, [currentSlideIndex]);

  const handleNavigationDotClick = (index) => {
    setCurrentSlideIndex(index);
  };

  return (
    <section className="carousel">
      <button className="carousel-btn btn-left" ref={leftBtnRef}>
        <FaCaretLeft />
      </button>
      <div className="carousel-container" ref={carouselTrack}>
        {carouselData.map((data, index) => (
          <div
            className={
              index === currentSlideIndex ? "slides current-slide" : "slides"
            }
            key={data.id}
          >
            <Link to={`/blog/article/${data.id}`}>
              <div className="location-container">
                <h5 className="location">
                  <span>
                    <Location />
                  </span>
                  {data.location}
                </h5>
              </div>
              <img src={data.imgUrl} alt="" className="image" />
              <div className="slides-content">
                <h3>
                  {data.title.length > 131
                    ? data.title.slice(0, 130) + "..."
                    : data.title}
                </h3>
              </div>
            </Link>
          </div>
        ))}
      </div>
      <div className="navigation-dots">
        {carouselData.map((_, index) => (
          <div
            key={index}
            className={`dot ${index === currentSlideIndex ? "active" : ""}`}
            onClick={() => handleNavigationDotClick(index)}
          />
        ))}
      </div>
      <button className="carousel-btn btn-right" ref={rightBtnRef}>
        <FaCaretRight />
      </button>
    </section>
  );
};

export default Carousel;
