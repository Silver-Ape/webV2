import React from "react";
import { BrowserRouter as Router, Route , Switch} from "react-router-dom";

import routes from "./routes";
import withTracker from "./withTracker";

import "bootstrap/dist/css/bootstrap.min.css";
import "./shards-dashboard/styles/shards-dashboards.1.1.0.min.css";

import LandingView from './views/LandingView'
import UserProfileLite from './views/UserProfileLite'

export default () => (
  <Router basename={process.env.REACT_APP_BASENAME || ""}>
    <Switch>
    <Route exact path="/landing" component={LandingView} />
    <div>
      
      {routes.map((route, index) => {
        return (
          <Route
            key={index}
            path={route.path}
            exact={true}
            component={withTracker(props => {
              return (
                <route.layout {...props}>
                  <route.component {...props} />
                </route.layout>
              );
            })}
          />
        );
      })}
    </div>
   
    </Switch>
  </Router>
);
