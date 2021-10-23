import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Layout from "./Layout/Layout";
import Confucius from "./Pages/Confucius";
import Home from "./Pages/Home";

import React from "react";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Confucius} />
        <Layout>
          <Route exact path="/home" component={Home} />
        </Layout>
      </Switch>
    </Router>
  );
};

export default App;
