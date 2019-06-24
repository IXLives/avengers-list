import React from 'react';
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom';
import {Route} from 'react-router-dom';
import Home from './components/Home';
import Avengers from './components/Avengers';
import HeroPage from './components/HeroPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import data from './avengersdata';

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path = '/' component = {Home} />
        <Route 
          exact 
          path = '/Avengers' 
          render = {props => <Avengers {...props} data = {data} />}/>
        <Route 
          path = '/Avengers/:heroId' 
          render = {props => <HeroPage {...props} data = {data}/>} />
      </div>
    </Router>
  );
}

export default App;
