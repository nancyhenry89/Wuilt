import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import logo from './assets/images/logo.png';
import flag from './assets/images/arabic-flag.png'
import logoColor from './assets/images/logo-color.png'
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
            <li><NavLink to="/stuff">Features</NavLink></li>
            <li><NavLink to="/contact">Pricing</NavLink></li>
          </ul>
          <div className="header-opo">
            <div className="account">Aleardy Have an Account?</div>
            <button>Build website now</button>
            <div className="lang-switcher">
              <div className="flag"><img src={flag}/></div>
              <div className="popup"></div>
            </div>
          </div>
          </div>
          </div>
          <div className="content">
            <Route exact to="/" component={Home}/>
            <Route path="/stuff" component={Home}/>
          </div>
          <footer>
            <div className="inner-cont">
                <div className="logo">
                  <img alrt="logo" src={logoColor} />
                  <span className="logo-slogan">already built websites</span>
                </div>
                <ul className="footer-links">
                  <li><NavLink exact to="/">Home</NavLink></li>
                  <li><NavLink to="/stuff">Features</NavLink></li>
                  <li><NavLink to="/contact">Pricing</NavLink></li>
                  <li><NavLink to="/stuff">Blog</NavLink></li>
                  <li><NavLink to="/contact">Help Center</NavLink></li>
                  <li><NavLink to="/stuff">Privacy Policy</NavLink></li>
                  <li><NavLink to="/stuff">Terms & Conditions</NavLink></li>
                </ul>
              </div>
          </footer>
        </div>
      </HashRouter>
    );
  }
}

export default Main;
