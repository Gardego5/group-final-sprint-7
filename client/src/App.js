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
          <Route path="/announcements" render={() => <Announcements />} />
          <Route path="/projects" render={() => <Projects />} />
          <Route path="/company" render={() => <SelectCompany />} />
          <Route path="/teams" render={() => <Teams />} />
          <Route path="/registry" render={() => <UserRegistry />} />
          <Route path="/registration" render={() => <Registration />} />
          <Route path="/" render={() => <Login />} />
        </Switch>
      </Router>
    </Fragment>
  );
}

export default App;
