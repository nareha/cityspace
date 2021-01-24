import React from 'react';
import logo from './images/logo.svg';
import searchButton from './images/searchButton.svg';
import CityCard from './CityCard.js';
import LA from './images/LA.svg';
import './Main.css';

function App() {
  return (
      <>
        <img src={logo} className="App-logo" alt="logo" />
        <h1>CitySpace</h1>
        <form className="search-bar">
          <input type="text" className="search-bar-text"></input>
          <input type="image" src={searchButton} alt="search"></input>
        </form>
        <div className="top-cities">
          <h2>Top LGBTQ+ Friendly Cities:</h2>
          <div className="city-card-list">
            <CityCard id="LA" city="Los Angeles, CA" total="108 / 100" stars={5} img={LA} />
            <CityCard id="LA" city="Los Angeles, CA" total="108 / 100" stars={5} img={LA}/>
            <CityCard id="LA" city="Los Angeles, CA" total="108 / 100" stars={5} img={LA}/>
            <CityCard id="LA" city="Los Angeles, CA" total="108 / 100" stars={5} img={LA}/>
            <CityCard id="LA" city="Los Angeles, CA" total="108 / 100" stars={5} img={LA}/>
          </div>
        </div>
        <div style={{visibility: "hidden"}} className="bottom-space">.</div>
      </>
  );
}

  export default App;