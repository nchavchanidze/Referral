import React from "react";
import styled from "styled-components";
import { Container } from "react-bootstrap";
import Slider from "react-slick";

import Member01 from "../Assets/images/Team/member-01.jpg";
import Member02 from "../Assets/images/Team/member-02.jpg";
import Member03 from "../Assets/images/Team/member-03.jpg";
import Member04 from "../Assets/images/Team/member-04.jpg";
import Member05 from "../Assets/images/Team/member-05.png";

const Team = () => {
  const settings = {
    dots: false,
    infinite: true,
    cssEase: "linear",
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 5000,
    arrows: false,
    swipeToslide: false,
    adaptiveHeight: false,
  };
  return (
    <>
      <BackText>our team</BackText>
      <Container>
        <SectionTitle>ჩვენს შესახებ</SectionTitle>
        <Slider {...settings}>
          <Slide className="pr-4">
            <div className="team-member mb-4">
              <div className="member-image">
                <img src={Member01} alt="" />
              </div>
              <div className="member-caption">
                <div className="member-description">
                  <p className="name">მაკო ციბაძე</p>
                  <p className="position">დამფუძნებელი</p>
                </div>
                <div className="member-socials">socials</div>
              </div>
            </div>
            <div className="team-member">
              <div className="member-image">
                <img src={Member03} alt="" />
              </div>
              <div className="member-caption">
                <div className="member-description">
                  <p className="name">ლიკა იაშაღაშვილი</p>
                  <p className="position">გრაფიკული დიზაინერი</p>
                </div>
                <div className="member-socials">socials</div>
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
                  <p className="name">ლავრი ფირცხალაიშვილი</p>
                  <p className="position">დამფუძნებელი</p>
                </div>
                <div className="member-socials">socials</div>
              </div>
            </div>
            <div className="team-member">
              <div className="member-image">
                <img src={Member04} alt="" />
              </div>
              <div className="member-caption">
                <div className="member-description">
                  <p className="name">ნიკოლოზ ჭავჭანიძე</p>
                  <p className="position">Front End დეველოპერი</p>
                </div>
                <div className="member-socials">socials</div>
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
                  <p className="name">მიხეილ ოდიშარია</p>
                  <p className="position">ანალიტიკოსი</p>
                </div>
                <div className="member-socials">socials</div>
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
  top: 120px;
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
    .member-image {
      height: 128px;
      img {
        height: 100%;
        width: 100%;
      }
    }
    .member-caption {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
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
  }
`;
export default Team;
