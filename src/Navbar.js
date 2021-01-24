import React from "react";
import logo from './images/logo.svg';
import './Navbar.css';

export default function NavBar() {
  return (
    <div className="navbar">
        <img src={logo} alt="CitySpace Icon" className="logo" />
        <h1 className="title">CitySpace</h1>
        <h2 className="subtitle">Live in your safe space.</h2>
    </div>
  );
}