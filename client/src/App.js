import { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Login from "./pages/Login";
import SelectCompany from "./pages/SelectCompany";

function App() {
  return (
    <Fragment>
      <Router>
        <Switch>
          <Route path="/company" render={() => <SelectCompany />} />
          <Route path="/" render={() => <Login />} />
        </Switch>
      </Router>
    </Fragment>
  );
}

export default App;
