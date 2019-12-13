import React from "react";
import AboutMe from "./AboutMe";
import "./index.css";
import { Route, Switch } from "react-router-dom";
import Experiences from "./Experiences";
import Projects from "./Projects";
import Posts from "./Posts";

const WholePage = () => {
  return (
    <div className="all">
      <AboutMe />
      <Experiences />
      <Projects />
      <Posts />
    </div>
  );
};

const Content = () => {
  return (
    <div className="content">
      <Switch>
        <Route exact path="/" component={WholePage}></Route>
        <Route exact path="/about-me" component={AboutMe}></Route>
        <Route exact path="/experiences" component={Experiences}></Route>
        <Route exact path="/projects" component={Projects}></Route>
        <Route exact path="/posts" component={Posts}></Route>
      </Switch>
    </div>
  );
};

export default Content;
