import React, { Suspense } from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import HomeSlider from "../../Components/En/HomeSlider";
import Lines from "../../Components/Lines";
import Sidepanel from "../../Components/Sidepanel";

import ogImage from "../../Assets/images/referral.png";

const About = React.lazy(() => import("../../Components/En/About"));
const Services = React.lazy(() => import("../../Components/En/Services"));
const Team = React.lazy(() => import("../../Components/En/Team"));
const Contact = React.lazy(() => import("../../Components/En/Contact"));
const Map = React.lazy(() => import("../../Components/Map"));

const Home = () => {
  return (
    <>
      <Helmet>
        <title>REFERRAL - Strategy for growth</title>
        <meta name="title" content="REFERRAL - Strategy for growth" />
        <meta name="author" content="Nikoloz Tchavtchanidze" />
        <meta
          name="description"
          content='"Referral" is a marketing company, which is a team of professionals made up of representatives from various fields.'
        />
        <meta
          name="keywords"
          content="Marketing, Social Media, Content Crafting, Business Consultation, Branding, Photo-video Shooting, Website"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="http://referralconsulting.ge/" />
        <meta property="og:title" content="REFERRAL - Strategy for growth" />
        <meta
          property="og:description"
          content='"Referral" is a marketing company, which is a team of professionals made up of representatives from various fields.'
        />
        <meta property="og:image" content={ogImage} />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="http://referralconsulting.ge/" />
        <meta
          property="twitter:title"
          content="REFERRAL - Strategy for growth"
        />
        <meta
          property="twitter:description"
          content='"Referral" is a marketing company, which is a team of professionals made up of representatives from various fields.'
        />
        <meta property="twitter:image" content={ogImage} />
      </Helmet>
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
