import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons";

import sliderImage_01 from "../../Assets/images/slides/slide-1.jpg";
import sliderImage_02 from "../../Assets/images/slides/slide-2.jpg";

const HomeSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    cssEase: "linear",
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    swipeToslide: false,
    adaptiveHeight: false,
  };
  return (
    <>
      <Slider {...settings}>
        <Slide>
          <Caption>
            <SliderText>
              <span>Our</span> Strategy for
              <br />
              <span>Your</span> Growth
            </SliderText>
            <SliderLink>
              <Link to="/home#about">
                Read More &nbsp;
                <FontAwesomeIcon icon={faLongArrowAltRight} />
              </Link>
            </SliderLink>
          </Caption>
          <img src={sliderImage_01} alt="" />
        </Slide>
        <Slide>
          <Caption>
          <SliderText>
              <span>Our</span> Strategy for
              <br />
              <span>Your</span> Growth
            </SliderText>
            <SliderLink>
              <Link to="/home#about">
                Read More &nbsp;
                <FontAwesomeIcon icon={faLongArrowAltRight} />
              </Link>
            </SliderLink>
          </Caption>
          <img src={sliderImage_02} alt="" />
        </Slide>
      </Slider>
    </>
  );
};

const Slide = styled.div`
  position: relative;
  height: 929px;
  img {
    height: 100%;
  }
`;
const Caption = styled.div`
  position: absolute;
  top: 50%;
  left: 70%;
  transform: translate(-50%, -50%);
  width: 100%;
  @media only screen and (max-width: 767.98px) {
    left: 55%;
  }
`;

const SliderText = styled.div`
  font-family: "Helvetica-Roman";
  font-size: 90px;
  color: #fff;
  line-height: 1.1;
  text-transform: uppercase;
  @media only screen and (max-width: 991.98px) {
    font-size: 70px;
    padding-top: 10px;
  }
  @media only screen and (max-width: 767.98px) {
    font-size: 40px;
    padding-top: 10px;
  }
  @media only screen and (max-height: 700px) {
    font-size: 70px;
    padding-top: 10px;
  }
  @media only screen and (max-width: 575.98px) {
    font-size: 30px;
  }
  span {
    color: #c5a47e;
    font-weight: 600;
    background: rgb(237, 196, 141);
    background: linear-gradient(
      70deg,
      rgba(237, 196, 141, 1) 0%,
      rgba(195, 151, 100, 1) 100%
    );
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const SliderLink = styled.div`
  padding-top: 40px;
  @media only screen and (max-height: 700px) {
    padding-top: 20px;
  }
  a {
    color: #fff;
    font-weight: 600;
    font-family: "BPG Nino Mtavruli", sans-serif;
    font-size: 14px;
    line-height: 20px;
    padding: 15px 30px;
    text-transform: uppercase;
    position: relative;
    letter-spacing: 0.1em;
    border: none;
    background: rgb(237, 196, 141);
    background: linear-gradient(
      70deg,
      rgba(237, 196, 141, 1) 0%,
      rgba(195, 151, 100, 1) 100%
    );
    transition: 0.3s;
    &:hover {
      color: #fff;
      background: rgba(195, 151, 100, 1);
      transition: 0.3s;
    }
  }
`;

export default HomeSlider;
