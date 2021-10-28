import React, { Suspense } from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import HomeSlider from "../Components/HomeSlider";
import Lines from "../Components/Lines";
import Sidepanel from "../Components/Sidepanel";

import ogImage from "../Assets/images/referral.png";

const About = React.lazy(() => import("../Components/About"));
const Services = React.lazy(() => import("../Components/Services"));
const Team = React.lazy(() => import("../Components/Team"));
const Contact = React.lazy(() => import("../Components/Contact"));
const Map = React.lazy(() => import("../Components/Map"));

const Home = () => {
  return (
    <>
      <Helmet>
        <title>REFERRAL - სტრატეგია განვითარებისთვის</title>
        <meta name="title" content="REFERRAL - სტრატეგია განვითარებისთვის" />
        <meta name="author" content="Nikoloz Tchavtchanidze" />
        <meta
          name="description"
          content="„რეფერალი“ წარმოადგენს მარკეტინგულ კომპანიას, რომელიც დაკომპლექტებულია სხვადასხვა სფეროს წარმომადგენლებით."
        />
        <meta
          name="keywords"
          content="Marketing, Social Media, Content Crafting, Business Consultation, Branding, Photo-video Shooting, Website"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="http://referralconsulting.ge/" />
        <meta property="og:title" content="REFERRAL - სტრატეგია განვითარებისთვის" />
        <meta
          property="og:description"
          content="„რეფერალი“ წარმოადგენს მარკეტინგულ კომპანიას, რომელიც დაკომპლექტებულია სხვადასხვა სფეროს წარმომადგენლებით."
        />
        <meta property="og:image" content={ogImage} />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="http://referralconsulting.ge/" />
        <meta property="twitter:title" content="REFERRAL - სტრატეგია განვითარებისთვის" />
        <meta
          property="twitter:description"
          content="„რეფერალი“ წარმოადგენს მარკეტინგულ კომპანიას, რომელიც დაკომპლექტებულია სხვადასხვა სფეროს წარმომადგენლებით."
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
