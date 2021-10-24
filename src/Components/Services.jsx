import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

import socialMedia from "../Assets/images/Icons/Services/socialmedia.svg";
import contentManagement from "../Assets/images/Icons/Services/content-management.svg";
import Branding from "../Assets/images/Icons/Services/branding.svg";
import Web from "../Assets/images/Icons/Services/web.svg";
import Video from "../Assets/images/Icons/Services/video.svg";

const Services = () => {
  return (
    <>
      <BackText>our services</BackText>
      <Container>
        <SectionTitle>ჩვენი სერვისები</SectionTitle>
        <Row>
          <Col lg={4}>
            <ServiceIcon>
              <img src={socialMedia} alt="" />
            </ServiceIcon>
            <ServiceText>
              <h1>სოციალური მედია</h1>
              <ul>
                <li>სოციალური გვერდების ადმინისტრირება</li>
                <li>ბაზრის კვლევა</li>
                <li>Google Ads</li>
              </ul>
            </ServiceText>
          </Col>
          <Col lg={4}>
            <ServiceIcon>
              <img src={contentManagement} alt="" />
            </ServiceIcon>
            <ServiceText>
              <h1>კონტენტის უზრუნველყოფა</h1>
              <ul>
                <li>გვერდების დიზაინის უზრუნველყოფა</li>
                <li>სახვადასხვა სახის პოსტერების შექმნა</li>
              </ul>
            </ServiceText>
          </Col>
          <Col lg={4}>
            <ServiceIcon>
              <img src={Branding} alt="" />
            </ServiceIcon>
            <ServiceText>
              <h1>ბრენდინგი</h1>
              <ul>
                <li>კომპანიის ბრენდინგი</li>
                <li>კორპორატიული ბრენდინგი</li>
                <li>ფოტო-ვიდეო გადაღება</li>
              </ul>
            </ServiceText>
          </Col>
        </Row>
        <Row className="align-items-top justify-content-center mt-5">
          <Col lg={4}>
            <ServiceIcon>
              <img src={Web} alt="" />
            </ServiceIcon>
            <ServiceText>
              <h1>ვებ-გვერდი</h1>
              <ul>
                <li>ვებ-გვერდის დიზაინი</li>
                <li>ვებ-გვერდის დამზადება</li>
              </ul>
            </ServiceText>
          </Col>
          <Col lg={4}>
            <ServiceIcon>
              <img src={Video} alt="" />
            </ServiceIcon>
            <ServiceText>
              <h1>გრაფიკული დიზაინი</h1>
              <ul>
                <li>3D და 2D გრაფიკა</li>
                <li>გრაფიკული ხატვა</li>
              </ul>
            </ServiceText>
          </Col>
        </Row>
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
  right: 5%;
  top: 0px;
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

const ServiceIcon = styled.div`
  height: 65px;
  margin-bottom: 30px;
  @media only screen and (max-width: 991.98px) {
    margin-top: 3rem;
  }
  img {
    height: 100%;
    width: 100%;
  }
`;
const ServiceText = styled.div`
  h1 {
    font-family: "BPG Glaho WEB Caps", sans-serif;
    text-align: center;
    text-transform: uppercase;
    font-size: 22px;
    color: #c5a47e;
    margin-bottom: 0.5rem;
  }
  li {
    font-family: "FiraGo-Thin";
    font-size: 16px;
    text-align: center;
    line-height: 1.5;
    /* list-style: none; */
  }
`;

export default Services;
