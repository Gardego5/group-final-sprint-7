import { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Company from "./pages/Company";
import Teams from "./pages/Teams";
import Login from "./pages/Login";

function App() {
  return (
    <Fragment>
      <Router>
        <Switch>
          <Route path="/company" render={() => <Company />} />
          <Route path="/teams" render={() => <Teams />} />
          <Route path="/" render={() => <Login />} />
        </Switch>
      </Router>
    </Fragment>
  );
}

export default App;
