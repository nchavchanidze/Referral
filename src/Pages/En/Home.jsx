import React, { Suspense } from "react";
import styled from "styled-components";
import HomeSlider from "../../Components/En/HomeSlider";
import Lines from "../../Components/Lines";
import Sidepanel from "../../Components/Sidepanel";

const About = React.lazy(() => import("../../Components/En/About"));
const Services = React.lazy(() => import("../../Components/En/Services"));
const Team = React.lazy(() => import("../../Components/En/Team"));
const Contact = React.lazy(() => import("../../Components/En/Contact"));
const Map = React.lazy(() => import("../../Components/Map"));

const Home = () => {
  return (
    <>
      <Lines />
      <HomeSection id="home">
        <HomeSlider />
        <Sidepanel />
      </HomeSection>
      <Suspense>
        <Section id="about">
          <About />
        </Section>
      </Suspense>
      <Suspense>
        <Section id="services">
          <Services />
        </Section>
      </Suspense>
      <Suspense>
        <Section>
          <Team />
        </Section>
      </Suspense>
      <Suspense>
        <Section id="contact">
          <Contact />
        </Section>
      </Suspense>
      <Suspense>
        <Section>
          <Map />
        </Section>
      </Suspense>
    </>
  );
};

const HomeSection = styled.section`
  height: 929px;
  position: relative;
`;
const Section = styled.section`
  position: relative;
  padding: 70px 0;
`;

export default Home;
