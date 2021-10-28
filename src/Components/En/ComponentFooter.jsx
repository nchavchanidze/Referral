import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";

import Logo from "../../Assets/images/Logo.svg";
const ComponentFooter = () => {
  return (
    <footer>
      <FooterLogoWrapper>
        <FooterLogo>
          <Link to="/home">
            <img src={Logo} alt="Referral" />
          </Link>
        </FooterLogo>
      </FooterLogoWrapper>
      <FooterContainer>
        <Container>
          <FooterContent>
            <Copyright>
              <p>
                © 2020 - 2021 <Link to="/home">REFERRAL</Link>. All Rights Reserved.
              </p>
            </Copyright>
            <FooterNavigation>
              <ul>
                <li>
                  <Link to="/en/home">Home</Link>
                </li>
                <li>
                  <Link to="/en/about">About us</Link>
                </li>
                <li>
                  <Link to="/en/services">Services</Link>
                </li>
                <li>
                  <Link to="/en/contact">Contact</Link>
                </li>
              </ul>
            </FooterNavigation>
          </FooterContent>
        </Container>
      </FooterContainer>
    </footer>
  );
};

const FooterLogoWrapper = styled.div`
  width: 100%;
  padding: 40px 0;
  background-color: #272727;
  border-top: 1px solid #383838;
`;

const FooterLogo = styled.div`
  width: 300px;
  margin: 0 auto;
  img {
    width: 100%;
  }
`;

const FooterContainer = styled.div`
  width: 100%;
  padding: 30px 0;
  background: #222222;
`;
const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  @media only screen and (max-width: 991.98px) {
    justify-content: center;
    flex-direction: column-reverse;
  }
`;

const Copyright = styled.div`
  font-size: 13px;
  font-family: "Helvetica-Roman";
  color: #6b6b6b;
  @media only screen and (max-width: 991.98px) {
    padding-top: 20px;
  }
  @media only screen and (max-width: 400.98px) {
    text-align: center;
    line-height: 1.5;
  }
  a {
    color: #c5a47e;
    text-decoration: none;
    text-transform: uppercase;
    font-family: "Helvetica-Roman";
  }
`;

const FooterNavigation = styled.div`
  ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    flex-wrap: wrap;
    @media only screen and (max-width: 400.98px) {
      justify-content: center;
    }
    li {
      a {
        font-size: 14px;

        font-family: "Helvetica-Roman";
        color: #6b6b6b;
        text-decoration: none;
        transition: all 0.3s ease-out;
        text-transform: uppercase;
        &:hover {
          color: #c5a47e;
          transition: all 0.3s ease-out;
        }
      }
    }
  }
`;

export default ComponentFooter;
