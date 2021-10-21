import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons"

const Sidepanel = () => {
  return (
    <SidePanel>
      <h1>Hello</h1>
      <SocialLeft>
        <li>
          <a target="_blank" rel="noreferrer" href="tel:+995595212510">
            <FontAwesomeIcon icon={faPhoneAlt} />
          </a>
        </li>
        <li>
          <a target="_blank" rel="noreferrer" href="https://www.facebook.com/Referral-%E1%83%A0%E1%83%94%E1%83%A4%E1%83%94%E1%83%A0%E1%83%90%E1%83%9A%E1%83%98-104688394787996">
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
        </li>
        <li>
          <a target="_blank" rel="noreferrer" href="https://www.instagram.com/referral_20/">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </li>
      </SocialLeft>
    </SidePanel>
  );
};
const SidePanel = styled.div`
  background: #272727;
  position: absolute;
  width: 180px;
  height: 100%;
  left: 0;
  top: 0;
  z-index: 1;
  overflow: hidden;
  &:before {
    content: "";
    display: block;
    width: 1px;
    top: 170px;
    bottom: 0;
    background: #646464;
    position: absolute;
    left: 50%;
    margin-left: -1px;
    z-index: 1;
  }
`;

const SocialLeft = styled.ul`
  display: block;
  margin: 0;
  padding: 10px 0;
  list-style: none;
  text-align: center;
  position: absolute;
  left: 0;
  width: 100%;
  bottom: 0;
  background: #272727;
  z-index: 10;
  li {
    padding: 10px 0;
    a {
      font-size: 22px;
      color: #606060;
    }
  }
`;
export default Sidepanel;
