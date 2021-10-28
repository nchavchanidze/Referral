import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons";

const ContactSocial = () => {
  return (
    <ContactSocials>
      <ul>
        <li>
          <a href="tel:+995595212510">
            <FontAwesomeIcon icon={faPhoneAlt} />
          </a>
        </li>
        <li>
          <a
            href="https://www.facebook.com/Referral-%E1%83%A0%E1%83%94%E1%83%A4%E1%83%94%E1%83%A0%E1%83%90%E1%83%9A%E1%83%98-104688394787996"
            rel="noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/referral_20/"
            rel="noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </li>
      </ul>
    </ContactSocials>
  );
};

const ContactSocials = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  margin: 1rem 0;
  ul {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 30px;
    width: 100%;
    li {
      a {
        display: block;
        font-size: 14px;
        color: #626262;
        text-align: center;
        line-height: 28px;
        width: 30px;
        border: 1px solid #626262;
        border-radius: 50%;
        margin: 0px;
        position: relative;
        z-index: 0;
        transition: all 0.3s ease-out;
        &:hover {
          color: #c5a47e;
          border-color: #c5a47e;
          transition: all 0.3s ease-out;
        }
        &:before {
          display: block;
          content: "";
          width: 6px;
          top: -4px;
          bottom: -4px;
          background: #272727;
          position: absolute;
          z-index: -1;
          left: 50%;
          margin-left: -3px;
          -webkit-transform: rotate(45deg);
          transform: rotate(45deg);
          -webkit-transform-origin: 0 50%;
          transform-origin: 0 50%;
        }
      }
    }
  }
`;
export default ContactSocial;
