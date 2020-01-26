import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from './history';
import './App.css';
import { NavBar } from './Components/NavBar';
import { PageLinks } from './Components/PageLinks';
import { Home } from './Components/Home';
import { Footer } from './Components/Footer';
import Reservation from './Components/Reservation';
import Login from './Components/Login';
import ResCollection from './Components/ResCollection';
import MenuContainer from './Components/MenuContainer';
import About from './Components/About';

function App() {


  return (
    <div>
    <Router history={history} onUpdate={ () => window.scrollTo(0, 0)}>
      <NavBar />
      <PageLinks />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/reserve" component={Reservation} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/reservations" component={ResCollection} />
        <Route exact path="/menu" component={MenuContainer} />
        <Route exact path="/about" component={About} />
      </Switch>
      <Footer />
    </Router>
    </div>
  );
}

export default App;
