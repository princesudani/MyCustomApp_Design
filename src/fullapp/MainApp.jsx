import React from "react";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import "node_modules/"
import "bootstrap/dist/js/bootstrap.bundle";
import Home from "./Home";
import Service from "./Service";
import About from "./About";
import Contact from "./Contact";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Route, Switch } from "react-router-dom";

const MainApp = () => {
  return (
    <>
      <Navbar />
      <Switch >
        <Route exact path="/" component = {Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/service" component={Service } />
        <Route exact path="/contact" component={Contact } />
      </Switch>
      <Footer />
    </>
  );
};

export default MainApp;
