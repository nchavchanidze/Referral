import React, { Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styled from "styled-components";
import Layout from "./Layout/Layout";
import Confucius from "./Pages/Confucius";

import ComponentLayout from "./Layout/ComponentLayout";
import ComponentLayoutEn from "./Layout/En/ComponentLayout";
import Loader from "./Components/Loader";

// EN
import LayoutEn from "./Layout/En/Layout";

const Home = React.lazy(() => import("./Pages/Home"));
const About = React.lazy(() => import("./Components/About"));
const Services = React.lazy(() => import("./Components/Services"));
const Contact = React.lazy(() => import("./Components/Contact"));

// EN
const HomeEn = React.lazy(() => import("./Pages/En/Home"));
const AboutEn = React.lazy(() => import("./Components/En/About"));
const ServicesEn = React.lazy(() => import("./Components/En/Services"));
const ContactEn = React.lazy(() => import("./Components/En/Contact"));

const App = () => {
  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Switch>
          <Route exact path="/" component={Confucius} />
          <Route
            exact
            path="/home"
            render={() => (
              <Layout>
                <Home />
              </Layout>
            )}
          />

          <Route
            exact
            path="/en/home"
            render={() => (
              <LayoutEn>
                <HomeEn />
              </LayoutEn>
            )}
          />

          <Route
            exact
            path="/about"
            render={() => (
              <ComponentLayout>
                <Section>
                  <About />
                </Section>
              </ComponentLayout>
            )}
          />
          <Route
            exact
            path="/en/about"
            render={() => (
              <ComponentLayoutEn>
                <Section>
                  <AboutEn />
                </Section>
              </ComponentLayoutEn>
            )}
          />

          <Route
            exact
            path="/services"
            render={() => (
              <ComponentLayout>
                <Section>
                  <Services />
                </Section>
              </ComponentLayout>
            )}
          />

          <Route
            exact
            path="/en/services"
            render={() => (
              <ComponentLayoutEn>
                <Section>
                  <ServicesEn />
                </Section>
              </ComponentLayoutEn>
            )}
          />

          <Route
            exact
            path="/contact"
            render={() => (
              <ComponentLayout>
                <Section>
                  <Contact />
                </Section>
              </ComponentLayout>
            )}
          />

          <Route
            exact
            path="/en/contact"
            render={() => (
              <ComponentLayoutEn>
                <Section>
                  <ContactEn />
                </Section>
              </ComponentLayoutEn>
            )}
          />
        </Switch>
      </Suspense>
    </Router>
  );
};

const Section = styled.section`
  position: relative;
  padding: 130px 0;
`;
export default App;
