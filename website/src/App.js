import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import history from './history';
import './App.css';
import { Home } from './Components/Home';
import { NavBar } from './Components/NavBar';

function App() {
  return (
    <div className="web-bg">
    <Router histroy={history}>
      <NavBar />
      <Switch>
        <Route exact path='/' component={Home} />
      </Switch>
    </Router>
    </div>
  );
}

export default App;
