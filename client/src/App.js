import { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Login from "./pages/Login";
<<<<<<< HEAD
import Announcements from './pages/Announcements/Announcements';
=======
import SelectCompany from "./pages/SelectCompany";
>>>>>>> e07832b8bb0900044c5f8f89218b16b6510ac91d

function App() {
  return (
    <Fragment>
      <Router>
        <Switch>
<<<<<<< HEAD
          <Route path="/company" render={() => <Company />} />
          <Route path="/announcements" render={() => <Announcements />} />
=======
          <Route path="/company" render={() => <SelectCompany />} />
>>>>>>> e07832b8bb0900044c5f8f89218b16b6510ac91d
          <Route path="/" render={() => <Login />} />
        </Switch>
      </Router>
    </Fragment>

  );
}

export default App;
