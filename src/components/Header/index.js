import React from "react";
import "./index.css";
import { Link } from "react-router-dom";
import Clock from "./Clock";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <Link to="/">Hello!!!</Link>
      </div>
      <ul className="header-items">
        <li className="item">
          <Link to="/about-me">About me</Link>
        </li>
        <li className="item">
          <Link to="/experiences">Experiences</Link>
        </li>
        <li className="item">
          <Link to="/projects">Projects</Link>
        </li>
        <li className="item">
          <Link to="/posts">Posts</Link>
        </li>
      </ul>
      <Clock />
    </div>
  );
};

export default Header;
