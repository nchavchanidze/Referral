import React from "react";
import styled from "styled-components";
import emailjs from "emailjs-com";
import { Container, Row, Col } from "react-bootstrap";
import ContactSocial from "../ContactSocial";

const Contact = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ed8dvg5",
        "template_6iatu5g",
        e.target,
        "user_6XzeyMsmJWpQlQi5rqhC3"
      )
      .then((res) => {
        if (res.status === 200) {
          alert("Message sent Successfully");
        } else {
          alert("Message sent Unsuccessfully");
        }
      })
      .catch((err) => console.log(err));
  }
  return (
    <>
      <BackText>contacts</BackText>
      <Container>
        <SectionTitle>CONTACT</SectionTitle>
        <Row>
          <Col md={4}>
            <ContactText>
              Address: Tsereteli # 116, Business Center "Didube Plaza"
            </ContactText>
            <ContactText>Mobile: +995 595 21 25 10</ContactText>
            <ContactText>
              E-Mail:{" "}
              <a href="mailto:info@referralconsulting.ge">
                info@referralconsulting.ge
              </a>
            </ContactText>
            <ContactSocial />
          </Col>
          <Col md={8}>
            <ContactForm onSubmit={sendEmail}>
              <div className="name-email">
                <div className="input-form">
                  <input type="text" name="name" placeholder="Name" />
                </div>
                <div className="input-form">
                  <input type="email" name="user_email" placeholder="E-Mail" />
                </div>
              </div>
              <div className="message-submit">
                <div className="input-form">
                  <textarea rows="5" name="message" placeholder="Message" />
                </div>
                <input
                  className="submit-btn"
                  type="submit"
                  value="SEND"
                  onSubmit={sendEmail}
                />
              </div>
            </ContactForm>
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

const ContactText = styled.p`
  font-family: "Helvetica-Thin";
  padding-bottom: 10px;
  line-height: 1.5;
  a {
    color: #fff;
    text-decoration: underline !important;
    &:hover {
      text-decoration: none !important;
    }
  }
`;

const ContactForm = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 14px;
  @media only screen and (max-width: 974px) {
    flex-wrap: wrap;
  }
  .name-email {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    gap: 14px;
    width: 100%;
    .input-form {
      width: 100%;
      input {
        padding: 17px 12px;
        font-size: 14px;
        font-family: sans-serif;
        line-height: 20px;
        color: #fff;
        background: #323232;
        border: 1px solid #323232;
        border-radius: 5px;
        transition: all 0.3s ease-out;
        width: 100%;
        &::-webkit-input-placeholder {
          font-family: "Helvetica-Thin";
        }
        &:focus {
          border-color: #323232;
          background: #272727;
          box-shadow: none;
          color: #fff;
          outline: none;
        }
      }
    }
  }
  .message-submit {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    flex-direction: column;
    gap: 20px;
    width: 100%;
    .input-form {
      width: 100%;
      textarea {
        height: 126px;
        padding: 17px 12px;
        font-size: 14px;
        font-family: sans-serif;
        line-height: 20px;
        color: #fff;
        background: #323232;
        border: 1px solid #323232;
        border-radius: 5px;
        transition: all 0.3s ease-out;
        width: 100%;
        &::-webkit-input-placeholder {
          font-family: "Helvetica-Thin";
        }
        &:focus {
          border-color: #323232;
          background: #272727;
          box-shadow: none;
          color: #fff;
          outline: none;
        }
      }
    }
    .submit-btn {
      text-decoration: none;
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
    }
  }
`;
export default Contact;
