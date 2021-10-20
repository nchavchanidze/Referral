import React from "react";
import styled from "styled-components";
import Particles from "react-particles-js";
const Confucius = () => {
  return (
    <ParticlesContainer>
      <Quote>
        <WordCaps>"T</WordCaps>he man who moves a
        <MainWord className="word-1"> mountain</MainWord> <br />
        &nbsp;<WordCaps className="caps-2">b</WordCaps>egins by carrying away small
        <MainWord className="word-2"> stones</MainWord>
        <WordCaps>"</WordCaps>
      </Quote>
      <p>- confucius</p>
      <Particles
        params={{
          particles: {
            number: {
              value: 80,
              density: {
                enable: true,
                value_area: 800,
              },
            },
            color: {
              value: "#c5a47e",
            },
            shape: {
              type: "circle",
              stroke: {
                width: 0,
                color: "#000000",
              },
              polygon: {
                nb_sides: 5,
              },
              image: {
                src: "img/github.svg",
                width: 100,
                height: 100,
              },
            },
            opacity: {
              value: 0.5,
              random: false,
              anim: {
                enable: false,
                speed: 1,
                opacity_min: 0.1,
                sync: false,
              },
            },
            size: {
              value: 3,
              random: true,
              anim: {
                enable: false,
                speed: 40,
                size_min: 0.1,
                sync: false,
              },
            },
            line_linked: {
              enable: true,
              distance: 192.40944730386272,
              color: "#c5a47e",
              opacity: 1,
              width: 0.6,
            },
            move: {
              enable: true,
              speed: 3,
              direction: "none",
              random: false,
              straight: false,
              out_mode: "out",
              bounce: false,
              attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200,
              },
            },
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onhover: {
                enable: false,
                mode: "grab",
              },
              onclick: {
                enable: true,
                mode: "push",
              },
              resize: true,
            },
            modes: {
              grab: {
                distance: 400,
                line_linked: {
                  opacity: 1,
                },
              },
              bubble: {
                distance: 400,
                size: 40,
                duration: 2,
                opacity: 8,
                speed: 3,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
              push: {
                particles_nb: 4,
              },
              remove: {
                particles_nb: 2,
              },
            },
          },
          retina_detect: true,
        }}
      />
    </ParticlesContainer>
  );
};

const Quote = styled.h1`
  position: absolute;
  top: 50%;
  left: 15%;
  transform: translateY(-50%);
  color: #fff;
  font-family: "FiraGo-ThinItalic";
  font-variant: small-caps;
  /* font-weight: 100; */
  text-decoration: none;
  text-transform: uppercase;
  font-size: 58px;
  text-align: left;
  margin: 0;
  font-weight: normal;
  @media (max-width: 1096px) {
    font-size: 47px;
  }
`;

const WordCaps = styled.span`
  font-size: 72px;
  @media (max-width: 1096px) {
    font-size: 61px;
    &.caps-2 {
      margin-left: -0.3em;
    }
  }
`;

const MainWord = styled.span`
  font-family: "FiraGo-SemiBoldItalic";
  color: #c5a47e;
  &.word-1 {
    background: rgb(237, 196, 141);
    background: linear-gradient(
      -100deg,
      rgba(237, 196, 141, 1) 0%,
      rgba(195, 151, 100, 1) 100%
    );
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  &.word-2 {
    background: rgb(237, 196, 141);
    background: linear-gradient(
      100deg,
      rgba(237, 196, 141, 1) 0%,
      rgba(195, 151, 100, 1) 100%
    );
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const ParticlesContainer = styled.div`
  position: relative;
  height: 100vh;
  width: 100vw;
  background-color: #272727;
  p {
    position: absolute;
    top: 74%;
    right: 20%;
    transform: translateY(-50%);
    color: #fff;
    font-family: "FiraGo-ThinItalic";
    text-decoration: none;
    text-transform: capitalize;
    font-size: 25px;
    text-align: left;
    margin: 0;
    @media (max-width: 605px) {
      top: 90%;
    }
  }
`;
export default Confucius;
