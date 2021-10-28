import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

import AboutImg from "../Assets/images/about.jpg";

const About = () => {
  return (
    <>
      <BackText>about us</BackText>
      <Container>
        <SectionTitle>ჩვენს შესახებ</SectionTitle>
        <Row>
          <Col md={6} sm={12}>
            <AboutText>
              „რეფერალი“ წარმოადგენს მარკეტინგულ კომპანიას, რომელიც
              დაკომპლექტებულია სხვადასხვა სფეროს წარმომადგენლებით. კომპანიის
              მიზანია სწორი სტრატეგიული ნაბიჯებით პარტნიორი კომპანიების
              ცნობადობის ამაღლება, მომხმარებელთა მოზიდვას და მათთან ჯანსაღი
              ურთიერთობის ჩამოყალიბება. <br />
              <br />
              მეორეს მხრივ „რეფერალი“ უზრუნველყოფს იმ კონკრეტული ადამიანების
              მოთხოვნების დაკმაყოფილებას, რომლებიც გარკვეულ სექტორში ეძებენ
              სხვადასხვა პროდუქტსა თუ მომსახურებას. <br />
              <br />
              „სტრატეგიული სვლებით, საჭირო დროს, საჭირო ადგილას.“
            </AboutText>
          </Col>
          <Col md={6} sm={12}>
            <AboutImage>
              <img src={AboutImg} alt="" />
            </AboutImage>
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

const AboutText = styled.p`
  font-family: "FiraGo-Thin";
  font-size: 18px;
  color: #fff;
  line-height: 1.5;
  @media only screen and (max-width: 767.98px) {
    text-align: center;
  }
`;

const AboutImage = styled.div`
  width: 540px;

  @media only screen and (max-width: 1247.98px) {
    width: 420px;
  }
  @media only screen and (max-width: 979.98px) {
    width: 300px;
  }
  @media only screen and (max-width: 750.98px) {
    width: 100%;
    margin-top: 50px;
  }
  img {
    width: 100%;
    height: 100%;
  }
`;

export default About;
