import React from 'react';
import logo from './images/logo.svg';
import searchButton from './images/searchButton.svg';
import CityCard from './CityCard.js';
import LA from './images/LA.svg';
import './Main.css';

function App() {

  const citydata = require('./citydata.json');

  const CityCards = Object.keys(citydata).map((city) => {
    console.log(Object.values(citydata[city]));

    const sum = Object.values(citydata[city]).
    reduce((existing, current) => {return existing + current[0]}, 0);

    return <CityCard id={city} city={city} total={`${sum} / 100`} img={LA} />
  })

  return (
      <>
        <img src={logo} className="App-logo" alt="logo" />
        <h1>CitySpace</h1>
        <form className="search-bar">
          <input type="text" className="search-bar-text" placeholder="How LGBTQ+ friendly is..."></input>
          <input type="image" src={searchButton} alt="search"></input>
        </form>
        <div className="top-cities">
          <h2>Top LGBTQ+ Friendly Cities:</h2>
          <div className="city-card-list">
            {CityCards}
          </div>
        </div>
        <div style={{visibility: "hidden"}} className="bottom-space">.</div>
      </>
  );
}

  export default App;