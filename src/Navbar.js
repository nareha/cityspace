import React from "react";
import { Link } from 'react-router-dom';
import logo from './images/logo.svg';
import './Navbar.css';
import searchButton from './images/searchButton.svg';

export default function NavBar() {
  return (
    <div className="navbar">
        <Link to="/"><img src={logo} alt="CitySpace Icon" className="logo" /></Link>
        <h1 className="title">CitySpace</h1>
        <h2 className="subtitle">Live in your safe space.</h2>
        <form className="search-bar outline">
          <input type="text" className="search-bar-text small-font" placeholder="How LGBTQ+ friendly is..."></input>
          <input type="image" src={searchButton} alt="search" className="small-search-button"></input>
        </form>
    </div>
  );
}