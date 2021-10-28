import React from "react";
import styled from "styled-components";
import { Container } from "react-bootstrap";
import Slider from "react-slick";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedinIn,
  faGithub,
  faDribbble,
} from "@fortawesome/free-brands-svg-icons";

import Member01 from "../../Assets/images/Team/member-01.jpg";
import Member02 from "../../Assets/images/Team/member-02.jpg";
import Member03 from "../../Assets/images/Team/member-03.jpg";
import Member04 from "../../Assets/images/Team/member-04.jpg";
import Member05 from "../../Assets/images/Team/member-05.png";

const Team = () => {
  const settings = {
    dots: false,
    infinite: true,
    cssEase: "linear",
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    swipeToslide: false,
    adaptiveHeight: false,
    responsive: [
      {
        breakpoint: 974,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <BackText>our team</BackText>
      <Container>
        <SectionTitle>OUR TEAM</SectionTitle>
        <Slider {...settings}>
          <Slide className="pr-4">
            <div className="team-member mb-4">
              <div className="member-image">
                <img src={Member01} alt="" />
              </div>
              <div className="member-caption">
                <div className="member-description">
                  <p className="name">Mako Tsibadze</p>
                  <p className="position">Co-Founder</p>
                </div>
                <div className="member-socials">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.linkedin.com/in/mako-tsibadze-08b998150/"
                  >
                    <FontAwesomeIcon icon={faLinkedinIn} />
                  </a>
                </div>
              </div>
            </div>
            <div className="team-member">
              <div className="member-image">
                <img src={Member03} alt="" />
              </div>
              <div className="member-caption">
                <div className="member-description">
                  <p className="name">Lika Iashagashvili</p>
                  <p className="position">Graphic Designer</p>
                </div>
                <div className="member-socials">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.linkedin.com/in/lika-iashaghashvili-2080b0222/"
                  >
                    <FontAwesomeIcon icon={faLinkedinIn} />
                  </a>
                  <a target="_blank" rel="noreferrer" href="/">
                    <FontAwesomeIcon icon={faDribbble} />
                  </a>
                </div>
              </div>
            </div>
          </Slide>
          <Slide>
            <div className="team-member mb-4">
              <div className="member-image">
                <img src={Member02} alt="" />
              </div>
              <div className="member-caption">
                <div className="member-description">
                  <p className="name">Lavri Firtskhalaishvili</p>
                  <p className="position">Co-Founder</p>
                </div>
                <div className="member-socials">
                  <a target="_blank" rel="noreferrer" href="/">
                    <FontAwesomeIcon icon={faLinkedinIn} />
                  </a>
                </div>
              </div>
            </div>
            <div className="team-member">
              <div className="member-image">
                <img src={Member04} alt="" />
              </div>
              <div className="member-caption">
                <div className="member-description">
                  <p className="name">Nikoloz Tchavtchanidze</p>
                  <p className="position">Web Developer</p>
                </div>
                <div className="member-socials">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.linkedin.com/in/nikoloztchavtchanidze/"
                  >
                    <FontAwesomeIcon icon={faLinkedinIn} />
                  </a>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/nchavchanidze"
                  >
                    <FontAwesomeIcon icon={faGithub} />
                  </a>
                </div>
              </div>
            </div>
          </Slide>
          <Slide>
            <div className="team-member">
              <div className="member-image">
                <img src={Member05} alt="" />
              </div>
              <div className="member-caption">
                <div className="member-description">
                  <p className="name">Mikheil Odisharia</p>
                  <p className="position">Analyst</p>
                </div>
                <div className="member-socials">
                  <a target="_blank" rel="noreferrer" href="/">
                    <FontAwesomeIcon icon={faLinkedinIn} />
                  </a>
                </div>
              </div>
            </div>
          </Slide>
        </Slider>
      </Container>
    </>
  );
};
const BackText = styled.div`
  font-family: "Montserrat";
  font-size: 170px;
  color: #fff;
  font-weight: 700;
  opacity: 0.02;
  position: absolute;
  left: 5%;
  top: 40px;
  white-space: nowrap;
  z-index: -1;
  @media only screen and (max-width: 767.98px) {
    display: none;
  }
`;
const SectionTitle = styled.h1`
  font-family: "BPG Glaho WEB Caps", sans-serif;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 0.3em;
  font-size: 36px;
  color: #c5a47e;
  padding-bottom: 54px;
  background: rgb(237, 196, 141);
  background: linear-gradient(
    70deg,
    rgba(237, 196, 141, 1) 0%,
    rgba(195, 151, 100, 1) 100%
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Slide = styled.div`
  .team-member {
    height: 128px;
    background-color: #323232;
    width: 96%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 30px;
    padding-right: 30px;
    @media only screen and (max-width: 442px) {
      height: 256px;
      flex-wrap: wrap;
      padding: 30px;
      width: 100%;
    }

    .member-image {
      height: 128px;
      img {
        height: 100%;
        width: unset;
      }
    }
    .member-caption {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      flex-wrap: wrap;
      width: 100%;
      .member-description {
        line-height: 1.5;
        .name {
          font-size: 17px;
          font-family: "FiraGo-Medium";
          color: #c5a47e;
        }
        .position {
          font-family: "FiraGo-Thin";
          font-size: 12px;
          color: #fff;
        }
      }
    }
    .member-socials {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 10px;
      a {
        color: #fff;
        font-size: 14px;
        transition: all 0.3s ease-out;
        &:hover {
          transition: all 0.3s ease-out;

          color: #c5a47e;
        }
      }
    }
  }
`;
export default Team;
