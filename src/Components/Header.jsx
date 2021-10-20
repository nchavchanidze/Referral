import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import Logo from "../Assets/images/Logo.svg";
import GeFlag from "../Assets/images/Icons/ge.png";
import UsFlag from "../Assets/images/Icons/us.png";

const Header = () => {
  return (
    <HeaderContainer>
      <LogoWrapper>
        <Link to="/home">
          <img src={Logo} alt="" />
        </Link>
      </LogoWrapper>
      <NavbarContainer className="navbar_ navbar navbar-expand-md clearfix">
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <div class="hamburger" id="hamburger-6">
            <span class="line"></span>
            <span class="line"></span>
            <span class="line"></span>
          </div>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="nav navbar-nav">
            <li className="nav-item">
              <Link to="/home" class="active nav-link">
                მთავარი
              </Link>
            </li>
            <li className="nav-item">
              <a href="#about" class="nav-link">
                ჩვენს შესახებ
              </a>
            </li>
            <li className="nav-item">
              <a href="#services" class="nav-link">
                სერვისები
              </a>
            </li>
            <li className="nav-item">
              <a href="#contacts" class="nav-link">
                კონტაქტი
              </a>
            </li>
            <li class="nav-item sub-menu">
              <Dropdown>
                <Dropdown.Toggle
                  id="dropdown-basic"
                  className="language-dropdown"
                >
                  <Flag src={GeFlag} alt="GE" />
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Link to="/">
                    <div className="language-option">
                      <Flag src={UsFlag} alt="US" />
                    </div>
                  </Link>
                </Dropdown.Menu>
              </Dropdown>
            </li>
          </ul>
        </div>
      </NavbarContainer>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 10%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
`;

const LogoWrapper = styled.div`
  height: 170px;
  width: 440px;
  padding: 0 60px 0 80px;
  background-color: #272727;
  position: relative;
  img {
    position: absolute;
    top: 50%;
    transform: translate(0, -50%);
    height: auto;
    width: 300px;
    max-width: 100%;
  }
`;

const NavbarContainer = styled.nav`
  padding-top: 0;
  padding-bottom: 0;
  ul {
    align-items: center;
    justify-content: space-between;
    gap: 40px;
      .nav-item {
        a {
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
        }
      }
  }
`;

const Flag = styled.img`
  width: 100%;
`;

export default Header;
