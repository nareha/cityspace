import React from 'react';
import logo from './images/logo.svg';
import searchButton from './images/searchButton.svg';
import CityCard from './CityCard.js';
import LA from './images/LA.svg';
import './App.css';
import CityPage from './CityPage.js';
import Navbar from './Navbar.js';

function App() {
  return (
    <div className="App">
      <header className="navbar">
        <Navbar />
      </header>
      <body>
        <img src={logo} className="App-logo" alt="logo" />
        <h1>CitySpace</h1>
        <form className="search-bar">
          <input type="text" className="search-bar-text" placeholder="How LGBTQ+ friendly is..."></input>
          <input type="image" src={searchButton} alt="search"></input>
        </form>
        <div className="top-cities">
          <h2>Top LGBTQ+ Friendly Cities:</h2>
          <div className="city-card-list">
            <CityCard city="Los Angeles, CA" total="108 / 100" stars={5} img={LA} />
            <CityCard city="Los Angeles, CA" total="108 / 100" stars={5} img={LA}/>
            <CityCard city="Los Angeles, CA" total="108 / 100" stars={5} img={LA}/>
            <CityCard city="Los Angeles, CA" total="108 / 100" stars={5} img={LA}/>
            <CityCard city="Los Angeles, CA" total="108 / 100" stars={5} img={LA}/>
          </div>
        </div>
        {/*move this later*/}
        <CityPage city="Los Angeles, CA" total="108 / 100" img={LA}/>
        <div style={{visibility: "hidden"}} className="bottom-space">.</div>
      </body>
    </div>
  );
}

export default App;