import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import Stuff from "./Stuff";
import Contact from "./Contact";
import logo from './assets/images/logo.png'
class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
        <div className="header-cont">
        <div className="inner-cont">
          <h1 className="logo">
            <img alrt="logo" src={logo} />
          </h1>
          <ul className="header">
            <li><NavLink exact to="/">Home</NavLink></li>
            <li><NavLink to="/stuff">Stuff</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
          </ul>
          <div className="header-opo">
            <div className="account">Already have an account</div>
            <button>Build website now</button>
            <div className="lang-switcher">
              <div className="logo"></div>
              <div className="popup"></div>
            </div>
          </div>
          </div>
          </div>
          <div className="content">
            <Route exact to="/" component={Home}/>
            <Route path="/stuff" component={Stuff}/>
            <Route path="/contact" component={Contact}/>
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default Main;
