import React from "react";
import styled from "styled-components";
import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons";


import Tartan from "../Assets/images/Partners/tartan.png";

const Partners = () => {
  return (
    <>
      <BackText>partners</BackText>
      <Container>
        <SectionTitle>პარტნიორები</SectionTitle>
        <PartnerContainer>
          <PartnerTextWrapper>
            <PartnerTitle>კაფეტერია „ტარტანი“</PartnerTitle>
            <PartnerText>
              კაფეტერია „ტარტანი“ არის ადგილი, სადაც ორიენტაცია ხდება ჯანსაღ
              პროდუქტზე, ხარისხსა და გემოზე.
              <br />
              <br />
              ჩვენმა კომპანიამ იზრუნა ტარტანის სოციალური მედიის განვითარებაზე,
              კონტენტის უზრუნველყოფაზე, ვებ-გვერდის დამზადებასა და ბრენდინგზე.
              ეწვიეთ გვერდს:
              <br />
              <br />
              <a
                href="https://www.facebook.com/cafeteriatartan"
                target="_blank"
                rel="noreferrer"
              >
                ეწვიეთ გვერდს &nbsp;
                <FontAwesomeIcon icon={faLongArrowAltRight} />
              </a>
            </PartnerText>
          </PartnerTextWrapper>
          <PartnerImage>
            <img
              src={Tartan}
              alt=""
            />
          </PartnerImage>
        </PartnerContainer>
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
const PartnerContainer = styled.div`
  position: relative;
`;

const PartnerTitle = styled.h1`
  font-size: 30px;
  font-family: "BPG Glaho WEB Caps", sans-serif;
  text-transform: uppercase;
  padding-bottom: 50px;
`;

const PartnerTextWrapper = styled.div`
  background: rgba(229, 188, 133, 0.9);
  position: absolute;
  left: 0;
  top: 50%;
  width: 50%;
  color: #fff;
  padding: 6% 4%;
  transform: translate(0, -50%);
  z-index: 9;
  @media only screen and (max-width: 991.98px) {
    position: relative;
    left: 0;
    top: 0;
    width: auto;
    padding: 30px;
    transform: translate(0, 0);
  }
`;

const PartnerText = styled.p`
  font-family: "BPG Glaho WEB", sans-serif;
  font-size: 17px;
  color: #fff;
  padding-bottom: 20px;
  line-height: 1.7;
  @media only screen and (max-width: 767.98px) {
    text-align: center;
  }
  a {
    font-family: "Helvetica-Thin";
    color: #fff;
    font-weight: 600;
    font-size: 14px;
    letter-spacing: 0.1em;
    transition: all 0.3s ease-out;
  }
`;

const PartnerImage = styled.div`
  margin: 0;
  position: relative;
  width: 66.666667%;
  margin-left: auto;
  @media only screen and (max-width: 991.98px) {
    width: auto;
    margin: 0;
  }
  img {
    max-width: 100%;
    height: auto;
  }
`;
export default Partners;
