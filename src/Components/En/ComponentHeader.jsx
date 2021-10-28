import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import { Navbar, Nav, Dropdown } from "react-bootstrap";

import Logo from "../../Assets/images/Logo.svg";
import GeFlag from "../../Assets/images/Icons/ge.png";
import UsFlag from "../../Assets/images/Icons/us.png";

const ComponentHeader = () => {
  const [burger, setBurger] = useState(false);
  const [locationState, setLocationState] = useState("");

  const location = useLocation();

  const handleBurger = () => {
    setBurger(!burger);
  };

  useEffect(() => {
    setLocationState(location.pathname.split("/en"));
  }, [location]);

  return (
    <HeaderContainer>
      <Navbar expand="lg" className="p-0 w-100 flex-wrap">
        <LogoWrapper>
          <Link to="/home">
            <img src={Logo} alt="" />
          </Link>
        </LogoWrapper>
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleBurger}>
          <Hamburger className={`hamburger ${burger ? "is-active" : ""}`}>
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
          </Hamburger>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <li className="nav-item">
              <Link to="/en/home" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/en/about" className="nav-link">
                About us
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/en/services" onClick={(e) => {}} className="nav-link">
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/en/contact" className="nav-link">
                Contact
              </Link>
            </li>
            <li className="nav-item sub-menu">
              <Dropdown>
                <Dropdown.Toggle
                  id="dropdown-basic"
                  className="language-dropdown"
                >
                  <Flag src={UsFlag} alt="US" />
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Link to={locationState[1]}>
                    <div className="language-option">
                      <Flag src={GeFlag} alt="GE" />
                    </div>
                  </Link>
                </Dropdown.Menu>
              </Dropdown>
            </li>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 10%;
  /* position: absolute; */
  z-index: 99;
  top: 0;
  left: 0;
  right: 0;
  background-color: #222222;
  @media only screen and (max-width: 991.98px) {
    padding-right: 15px;
    background-color: #222222;
  }
  .nav-item {
    .nav-link {
      display: block;
      text-decoration: none;
      font-family: "Helvetica-Roman";
      font-weight: 400;
      font-size: 15px;
      text-transform: uppercase;
      line-height: 168px;
      padding: 0 10px;
      margin: 0;
      color: #fff;
      border-bottom: 2px solid transparent;
      letter-spacing: 0.1em;
      transition: all 0.3s ease-out;
      &:focus,
      &:hover,
      &.active {
        color: #fff;
        border-color: rgba(237, 196, 141, 1);
      }
      @media only screen and (max-width: 991.98px) {
        line-height: unset;
        padding: 0;
      }
    }
  }
`;

const LogoWrapper = styled.div`
  height: 170px;
  width: 440px;
  padding: 0 60px 0 80px;
  background-color: #222222;
  position: relative;
  @media only screen and (max-width: 991.98px) {
    width: 300px;
    padding-left: 15px;
    padding-right: 15px;
  }
  @media only screen and (max-width: 767.98px) {
    height: 90px;
    width: 250px;
  }
  @media only screen and (max-width: 352px) {
    width: 214px;
  }
  /* @media only screen and (max-width: 767.98px) {
    width: 270px;
  } */
  img {
    position: absolute;
    top: 50%;
    transform: translate(0, -50%);
    height: auto;
    width: 100%;
    max-width: 300px;
  }
`;

const Flag = styled.img`
  width: 100%;
`;

const Hamburger = styled.div`
  &.is-active {
    -webkit-transition: all 0.3s ease-in-out;
    -o-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
    -webkit-transition-delay: 0.6s;
    -o-transition-delay: 0.6s;
    transition-delay: 0.6s;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    -o-transform: rotate(45deg);
    transform: rotate(45deg);
    .line {
      &:nth-child(2) {
        width: 0px;
      }
      &:nth-child(1) {
        -webkit-transition-delay: 0.3s;
        -o-transition-delay: 0.3s;
        transition-delay: 0.3s;
        -webkit-transform: translateY(5px);
        -ms-transform: translateY(5px);
        -o-transform: translateY(5px);
        transform: translateY(5px);
      }
      &:nth-child(3) {
        -webkit-transition-delay: 0.3s;
        -o-transition-delay: 0.3s;
        transition-delay: 0.3s;
        -webkit-transform: translateY(-11px) rotate(90deg);
        -ms-transform: translateY(-11px) rotate(90deg);
        -o-transform: translateY(-11px) rotate(90deg);
        transform: translateY(-11px) rotate(90deg);
      }
    }
  }
  .line {
    width: 30px;
    height: 2px;
    background-color: #ecf0f1;
    display: block;
    /* margin: 6px auto; */
    margin-top: 6px;
    -webkit-transition: all 0.3s ease-in-out;
    -o-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
  }
`;
export default ComponentHeader;
