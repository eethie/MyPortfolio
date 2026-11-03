import { useState } from "react";

import './slider.css';
import { IoMdArrowDropleftCircle, IoMdArrowDroprightCircle } from "react-icons/io";


function CustomCarousel({ children }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const slideNext = () => {
    setActiveIndex((val) => {
      if (val >= children.length - 1) {
        return 0;
      } else {
        return val + 1;
      }
    });
  };

  const slidePrev = () => {
    setActiveIndex((val) => {
      if (val <= 0) {
        return children.length - 1;
      } else {
        return val - 1;
      }
    });
  };

return (
  <div className="slider-wrapper">
    <button
      className="slider__btn-prev" aria-label="Previous photo"
      onClick={(e) => {
        e.preventDefault();
        slidePrev();
      }}
    >
      {<IoMdArrowDropleftCircle size = {40} />}
    </button>

    <div
      className="container__slider"


    >
      {children.map((item, index) => (
        <div
          className={"slider__item slider__item-active-" + (activeIndex + 1)}
          key={index}
        >
          {item}
        </div>
      ))}

      <div className="container__slider__links">
        {children.map((item, index) => (
          <button
            key={index} aria-label={`Show photo ${index + 1}`} aria-pressed={activeIndex === index}
            className={
              activeIndex === index
                ? "container__slider__links-small container__slider__links-small-active"
                : "container__slider__links-small"
            }
            onClick={(e) => {
              e.preventDefault();
              setActiveIndex(index);
            }}
          ></button>
        ))}
      </div>
    </div>

    <button
      className="slider__btn-next" aria-label="Next photo"
      onClick={(e) => {
        e.preventDefault();
        slideNext();
      }}
    >
      {<IoMdArrowDroprightCircle size = {40} />}
    </button>
  </div>
);
}

export default CustomCarousel;
