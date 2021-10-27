import React, { useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";

import Logo from "../Assets/images/Logo.svg";

const Footer = () => {
  useEffect(() => {
    let url = window.location.href.split("/");
    let target = url[url.length - 1].toLocaleLowerCase();
    let element = document.getElementById(target);
    element && element.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);
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
                © 2020 - 2021 <Link to="/home">REFERRAL</Link>. ყველა უფლება
                დაცულია.
              </p>
            </Copyright>
            <FooterNavigation>
              <ul>
                <li>
                  <a
                    href="/"
                    onClick={(e) => {
                      let home = document.getElementById("home");
                      e.preventDefault();
                      home &&
                        home.scrollIntoView({
                          behavior: "smooth",
                          block: "start",
                        });
                      window.history.pushState("home", "home", "/home");
                    }}
                  >
                    მთავარი
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    onClick={(e) => {
                      let about = document.getElementById("about");
                      e.preventDefault();
                      about &&
                        about.scrollIntoView({
                          behavior: "smooth",
                          block: "start",
                        });
                      window.history.pushState("about", "about", "/about");
                    }}
                  >
                    ჩვენს შესახებ
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    onClick={(e) => {
                      let services = document.getElementById("services");
                      e.preventDefault();
                      services &&
                        services.scrollIntoView({
                          behavior: "smooth",
                          block: "start",
                        });
                      window.history.pushState("services", "services", "/services");
                    }}
                  >
                    სერვისები
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    onClick={(e) => {
                      let contact = document.getElementById("contact");
                      e.preventDefault();
                      contact &&
                        contact.scrollIntoView({
                          behavior: "smooth",
                          block: "start",
                        });
                      window.history.pushState("contact", "contact", "/contact");
                    }}
                  >
                    კონტაქტი
                  </a>
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
        &:hover {
          color: #c5a47e;
          transition: all 0.3s ease-out;
        }
      }
    }
  }
`;

export default Footer;
