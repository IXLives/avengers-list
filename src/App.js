import React from 'react';
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom';
import {Route} from 'react-router-dom';
import Home from './components/Home';
import Avengers from './components/Avengers';
import HeroPage from './components/HeroPage';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path = '/' component = {Home} />
        <Route exact path = '/Avengers' component = {Avengers} />
        <Route path = '/Avengers/:heroId' component = {HeroPage} />
      </div>
    </Router>
  );
}

export default App;
