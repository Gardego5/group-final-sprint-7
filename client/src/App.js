import { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Company from "./pages/Company";
import Login from "./pages/Login";
import Announcements from './pages/Announcements/Announcements';

function App() {
  return (
    <Fragment>
      <Router>
        <Switch>
          <Route path="/company" render={() => <Company />} />
          <Route path="/announcements" render={() => <Announcements />} />
          <Route path="/" render={() => <Login />} />
        </Switch>
      </Router>
    </Fragment>

  );
}

export default App;
