import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Youtubers from "./components/youtubers/Youtubers";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import "./App.css";

const App = () => {
  return (
    <Router>
      <Fragment>
        <Layout />
        <div classname='containter'>
          <Switch>
            <Route exact path='/youtuber' component={Youtubers} />
          </Switch>
        </div>
      </Fragment>
    </Router>
  );
};

export default App;
