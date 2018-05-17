import React, { Component } from "react";
import {Route,NavLink,HashRouter} from "react-router-dom";
import 'react-sticky-header/styles.css';
import StickyHeader from 'react-sticky-header';
import Home from "./Home";
import logo from './assets/images/logo.png';
import flag from './assets/images/arabic-flag.png'
import logoColor from './assets/images/logo-color.png'
import $ from 'jquery'
class Main extends Component {
  componentDidMount() {
    $(window).on("scroll", function() {
      if($(window).scrollTop() > 50) {
          $(".is-sticky").addClass("active");
      } else {
          //remove the background property so it comes transparent again (defined in your css)
         $(".is-sticky").removeClass("active");
      }
  })
}


  render() {
    return (
      <HashRouter>
        <div>



        <StickyHeader
          // This is the sticky part of the header.
          header={
            <div className="header-cont">
            <div className="inner-cont">
              <h1 className="logo">
                <img alrt="logo" src={logo} />
                <img alrt="logo" src={logoColor} />
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
          }
          backgroundColor="#fff"
        >
        </StickyHeader>





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
