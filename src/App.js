import React from 'react'
import SignUp from "./SignUp";
import Login from './Login'
import Navigations from './Navigations'
import Main from './Main'
import { Route, Switch, Redirect,BrowserRouter as Router, Link } from 'react-router-dom';
import Dashboard from './Dashboard'
function App() {
  return (
    <>
    <Router>
      <Switch>
          <Route exact path="/">
            <Main/>
          </Route>

          <Route exact path="/Login">
            <Login/>
          </Route>

          <Route exact path="/SignUp">
            <SignUp/>
          </Route>

          
          <Route exact path="/Dashboard">
            <Dashboard/>
          </Route>
      </Switch>
    </Router>
    </>
  );
}

export default App;
