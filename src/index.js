import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import firebase from "firebase";
import "assets/scss/material-kit-react.scss?v=1.9.0";

// pages for this product
import LandingPage from "views/pages/LandingPage";
import BehindTheScenesPage from "./views/pages/BehindTheScenesPage";
import ThankyouPage from "./views/pages/ThankyouPage";

let hist = createBrowserHistory();











ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/" exact component={LandingPage} />
      <Route path="/behind-the-scenes-page" component={BehindTheScenesPage} />
      <Route path="/thank-you" component={ThankyouPage} />
    </Switch>

  </Router>,
  document.getElementById("root")
);
