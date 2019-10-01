import React from 'react';
import './App.css';
import { Home } from './Components/Home';
import { NavBar } from './Components/NavBar';
import { Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div>
    <Router>
      <NavBar />
      <Switch>
        <Route exact path='irashiai2' component={Home} />
      </Switch>
    </Router>
    </div>
  );
}

export default App;
