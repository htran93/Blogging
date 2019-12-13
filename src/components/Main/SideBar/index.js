import React from "react";
import "./index.css";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="sidebar">
      <ul className="side-bar-items">
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
    </div>
  );
};

export default SideBar;
