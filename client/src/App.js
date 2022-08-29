import { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Company from "./pages/Company";
import Login from "./pages/Login";

function App() {
  return (
    <Fragment>
      <Router>
        <Switch>
          <Route path="/company" render={() => <Company />} />
          <Route path="/" render={() => <Login />} />
        </Switch>
      </Router>
    </Fragment>
  );
}

export default App;
