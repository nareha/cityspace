import React from "react";
import { Switch, Route } from "react-router-dom"
import Main from './Main';
import CityPage from './CityPage';
import Navbar from './Navbar.js';
import './Main.css';
/*
const db = {
  "Los-Angeles-California": {
    city:"Los-Angeles-California",
    numbers: [30, 26, 7, 8, 22]
    total: 93,
    // img:LA
  }
}
*/
const citydata = require('./citydata.json');

function App() {
    return (
        <div className="App">
          <header className="navbar">
            <Navbar />
          </header>
          <div className="main-body">
            <Switch>
              <Route exact path="/">
                <Main />
              </Route>
              <Route path="/city/:cityname" render = {(props) => <CityPage {...citydata[props.match.params.cityname]} />} />
            </Switch>
          </div>
        </div>
      )
}

export default App;