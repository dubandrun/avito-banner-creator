import React from "react";
import "./Banner.css";

const Banner = React.forwardRef(
  ({ backgroundColor, imageUrl, text, showImage }, banner) => {
    return (
      <div
        ref={banner}
        className="banner"
        style={{ background: `${backgroundColor}` }}
      >
        {showImage && (
          <img
            src={imageUrl}
            alt="Изображение баннера"
            className="banner__img"
          />
        )}
        <h3 className="banner__text">{text}</h3>
      </div>
    );
  }
);

export default Banner;
