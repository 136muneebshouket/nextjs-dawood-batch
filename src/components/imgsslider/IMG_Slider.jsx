'use client'
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const IMG_Slider = ({imgs}) => {

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      {/* <Slider {...settings}> */}
        {imgs?.map((v) => {
          return (
            <>
              <img
                class=""
                src={v.img_url}
                alt="Product Image"
              />
            </>
          );
        })}
      {/* </Slider> */}
    </>
  );
};

export default IMG_Slider;
