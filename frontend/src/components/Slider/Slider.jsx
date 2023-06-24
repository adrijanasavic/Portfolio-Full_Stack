import { useEffect } from "react";
import { useRef } from "react";
import React from "react";
import "./slider.scss"
const colors = ["#0088FE", "#00C49F", "#FFBB28"];
const slideText = ["I am WebDeveloper","Also Android Developer", "Working in React"]
const delay = 2500;

function Slider() {
  const [index, setIndex] = React.useState(0);
  const timeoutRef = useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === colors.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className="slideshow">
      <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {colors.map((backgroundColor,  index) => (
          <div className="slide" key={index} style={{ backgroundColor }}>
            <div className="slide-text">
            <p>{ slideText[index]}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="slideshowDots">
        {colors.map((_, idx) => (
          <div
            key={idx}
            className={`slideshowDot${index === idx ? " active" : ""}`}
            onClick={() => {
              setIndex(idx);
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default Slider;