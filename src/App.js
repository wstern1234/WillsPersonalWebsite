import React from 'react';
import './App.css';
import Home from './pages/home/home';
import Contacts from './pages/contacts/contacts';
import Resume from './pages/resume/resume';
import Photos from './pages/photos/photos';
import { HashRouter as Router, Switch, Route } from "react-router-dom";


class App extends React.Component {
  render() {
    return (

      <div className = 'App'>

    <Router>
        <Switch>
          <Route path="/contacts">
            <Contacts />
          </Route>
          <Route path="/resume">
            <Resume />
          </Route>
          <Route path="/photos">
            <Photos />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
    </Router>

      </div>

    );
  }
}

export default App;
