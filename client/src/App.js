import { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Teams from "./pages/Teams";
import Login from "./pages/Login";
import Projects from "./pages/Projects";
import Announcements from "./pages/Announcements/Announcements";
import SelectCompany from "./pages/SelectCompany";
import Registration from "./pages/Registration";
import UserRegistry from "./pages/UserRegistry";

function App() {
  return (
    <Fragment>
      <Router>
        <Switch>
          <Route path="/users" component={UserRegistry} />
          <Route path="/registration" component={Registration} />
          <Route path="/announcements" component={Announcements} />
          <Route path="/projects" component={Projects} />
          <Route path="/company" component={SelectCompany} />
          <Route path="/teams" component={Teams} />
          <Route path="/" component={Login} />
        </Switch>
      </Router>
    </Fragment>
  );
}

export default App;
