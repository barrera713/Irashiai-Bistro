import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from './history';
import './App.css';
import { Home } from './Components/Home';
import { NavBar } from './Components/NavBar';
import Reservation from './Components/Reservation';
import { Footer } from './Components/Footer';
import Login from './Components/Login';
import ResCollection from './Components/ResCollection';




function App() {
  return (
    <div>
    <Router history={history}>
      <NavBar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/reserve' component={Reservation} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/reservations' component={ResCollection} />
      </Switch>
    <Footer />
    </Router>
    </div>
  );
}

export default App;
