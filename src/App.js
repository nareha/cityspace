import React from "react";
import { Switch, Route } from "react-router-dom"
import Main from './Main';
import CityPage from './CityPage';
import LA from './images/LA.svg';
import Navbar from './Navbar.js';
import './Main.css';

const db = {
  LA: {
    city:"Los Angeles, CA",
    total:"108 / 100",
    img:LA
  }
}

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
              <Route path="/city/:cityname" render = {(props) => <CityPage {...db[props.match.params.cityname]} />} />
            </Switch>
          </div>
        </div>
      )
}

export default App;