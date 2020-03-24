import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Homepage from "./views/Homepage";
import UserHomepage from "./views/user-views/User-Homepage";
import "./style/style.css";

function App() {
  return (
    <div className="App">
      <div className="pad-top-title">
        <Router>
          <Switch>
            <Route path="/UserHome">
              <UserHomepage />
            </Route>
            <Route path="/">
              <Homepage />
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
