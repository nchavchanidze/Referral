import React from "react";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowAltRight, faLongArrowAltLeft } from "@fortawesome/free-solid-svg-icons";

const NotFound = () => {
  const history = useHistory();
  const goBack = () => {
    history.goBack();
  };
  return (
    <ErrorWrapper>
      <Error404>404</Error404>
      <NootFound>Not Found</NootFound>
      <BackButton onClick={goBack}>
        <FontAwesomeIcon icon={faLongArrowAltLeft} /> &nbsp; Go Back
      </BackButton>
      <SliderLink>
        <Link to="/home">
          Go Home &nbsp;
          <FontAwesomeIcon icon={faLongArrowAltRight} />
        </Link>
      </SliderLink>
    </ErrorWrapper>
  );
};

const SliderLink = styled.div`
margin-top: 40px;
  @media only screen and (max-height: 700px) {
    margin-top: 20px;
  }
  a {
    color: #fff;
    font-weight: 600;
    font-family: "BPG Nino Mtavruli", sans-serif;
    font-size: 14px;
    line-height: 20px;
    padding: 15px 30px;
    text-transform: uppercase;
    position: relative;
    letter-spacing: 0.1em;
    border: none;
    background: rgb(237, 196, 141);
    background: linear-gradient(
      70deg,
      rgba(237, 196, 141, 1) 0%,
      rgba(195, 151, 100, 1) 100%
    );
    transition: 0.3s;
    &:hover {
      color: #fff;
      background: rgba(195, 151, 100, 1);
      transition: 0.3s;
    }
  }
`;
const BackButton = styled.button`
  color: #fff;
  font-weight: 600;
  font-family: "BPG Nino Mtavruli", sans-serif;
  font-size: 14px;
  line-height: 20px;
  padding: 15px 30px;
  text-transform: uppercase;
  position: relative;
  letter-spacing: 0.1em;
  border: none;
  background: rgb(237, 196, 141);
  background: linear-gradient(
    70deg,
    rgba(237, 196, 141, 1) 0%,
    rgba(195, 151, 100, 1) 100%
  );
  transition: 0.3s;
  &:hover {
    color: #fff;
    background: rgba(195, 151, 100, 1);
    transition: 0.3s;
  }
`;

const ErrorWrapper = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Error404 = styled.h1`
  font-family: "BPG Glaho WEB Caps", sans-serif;
  text-transform: uppercase;
  -webkit-letter-spacing: 0.3em;
  -moz-letter-spacing: 0.3em;
  -ms-letter-spacing: 0.3em;
  letter-spacing: 0.3em;
  font-size: 116px;
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
const NootFound = styled.h1`
  font-family: "BPG Glaho WEB Caps", sans-serif;
  text-transform: uppercase;
  -webkit-letter-spacing: 0.3em;
  -moz-letter-spacing: 0.3em;
  -ms-letter-spacing: 0.3em;
  letter-spacing: 0.3em;
  font-size: 65px;
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

export default NotFound;
