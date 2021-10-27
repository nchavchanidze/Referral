import React, { Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styled from "styled-components";
import Layout from "./Layout/Layout";
import Confucius from "./Pages/Confucius";

import ComponentLayout from "./Layout/ComponentLayout";
import Loader from "./Components/Loader";
const Home = React.lazy(() => import("./Pages/Home"));
const About = React.lazy(() => import("./Components/About"));
const Services = React.lazy(() => import("./Components/Services"));
const Contact = React.lazy(() => import("./Components/Contact"));

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
            path="/contact"
            render={() => (
              <ComponentLayout>
                <Section>
                  <Contact />
                </Section>
              </ComponentLayout>
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
