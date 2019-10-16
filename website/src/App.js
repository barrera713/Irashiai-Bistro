import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import history from './history';
import './App.css';
import { Home } from './Components/Home';
import { NavBar } from './Components/NavBar';
import Reservation from './Components/Reservation';
import { Footer } from './Components/Footer';
import Login from './Components/Login';




function App() {
  return (
    <div>
    <Router histroy={history}>
      <NavBar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/reserve' component={Reservation} />
        <Route exact path='/login' component={Login} />
      </Switch>
    <Footer />
    </Router>
    </div>
  );
}

export default App;
