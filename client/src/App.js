import { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Teams from "./pages/Teams";
import Login from "./pages/Login";
import Announcements from "./pages/Announcements/Announcements";
import SelectCompany from "./pages/SelectCompany";

function App() {
  return (
    <Fragment>
      <Router>
        <Switch>
          <Route path="/announcements" render={() => <Announcements />} />
          <Route path="/company" render={() => <SelectCompany />} />
          <Route path="/teams" render={() => <Teams />} />
          <Route path="/" render={() => <Login />} />
        </Switch>
      </Router>
    </Fragment>
  );
}

export default App;
