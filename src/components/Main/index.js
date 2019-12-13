import React from "react";
import SideBar from "./SideBar";
import Content from "./Content";
import "./index.css";

const Main = () => {
  return (
    <div className="main">
      <SideBar />
      <Content />
    </div>
  );
};
export default Main;
