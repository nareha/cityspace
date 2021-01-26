import React from 'react';
import logo from './images/logo.svg';
import searchButton from './images/searchButton.svg';
import CityCard from './CityCard.js';
import LA from './images/LA.svg';
import Albany from './images/Albany.jpeg';
import Phoenix from './images/Phoenix.jpg';
import NYC from './images/nyc.jpg';
import './Main.css';

function App() {

  const images = [Albany, Phoenix, LA, NYC];

  const citydata = require('./citydata.json');

  const CityCards = Object.keys(citydata).map((city, index) => {
    return <CityCard id={city} city={citydata[city].city} total={`${citydata[city].total} / 100`} img={images[index]} database={citydata[city].database}/>
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