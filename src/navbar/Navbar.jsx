import React from "react";
import Menu from "./Menu";
import { Switch, Route } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Menu />
      <section className="hero-section">
        <p>Subscribe to </p>
        <h1>My CustomApp Home Page</h1>
      </section>
    </>
  );
};

const About = () => {
  return (
    <>
      <Menu />
      <section className="hero-section">
        <p>Welcome to </p>
        <h1>My CustomApp About Page</h1>
      </section>
    </>
  );
};

const Service = () => {
  return (
    <>
      <Menu />
      <section className="hero-section">
        <p>Welcome to </p>
        <h1>My CustomApp Service Page</h1>
      </section>
    </>
  );
};

const Contact = () => {
  return (
    <>
      <Menu />
      <section className="hero-section">
        <p>Welcome to </p>
        <h1>My Custom App Contact Page</h1>
      </section>
    </>
  );
};

const Navbar = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>

      <Route path="/about">
        <About />
      </Route>

      <Route path="/service">
        <Service />
      </Route>

      <Route path="/contact">
        <Contact />
      </Route>
    </Switch>
  );
};

export default Navbar;