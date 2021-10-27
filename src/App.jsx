import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styled from "styled-components";
import Layout from "./Layout/Layout";
import Confucius from "./Pages/Confucius";
import Home from "./Pages/Home";

import React from "react";
import About from "./Components/About";
import Services from "./Components/Services";
import Contact from "./Components/Contact";
import ComponentLayout from "./Layout/ComponentLayout";

const App = () => {
  return (
    <Router>
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
      </Switch>
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
    </Router>
  );
};

const Section = styled.section`
  position: relative;
  padding: 130px 0;
`;
export default App;
