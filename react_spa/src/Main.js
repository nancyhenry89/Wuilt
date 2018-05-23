import React, { Component } from "react";
import {Route,NavLink,HashRouter} from "react-router-dom";
import 'react-sticky-header/styles.css';
import StickyHeader from 'react-sticky-header';
import Home from "./Home";
import Pricing from "./Pricing";
import logo from './assets/images/logo.png';
import flag from './assets/images/arabic-flag.png'
import logoColor from './assets/images/logo-color.png'
import W from './assets/images/w.png'
import burger from './assets/images/burger.png'
import burgerBlack from './assets/images/burger-black.svg'
import $ from 'jquery'
import './index.css'
import {FormattedMessage, FormattedHTMLMessage} from 'react-intl';

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
  $('.burger').click(function(){
    $('header').addClass('nav-opened');
  });
  $('.close-nav').click(function(){
    $('header').removeClass('nav-opened');
  });
}


  render() {
    return (
      <HashRouter>
        <div>
        <StickyHeader
          // This is the sticky part of the header.
          header={
            <div className="header-cont">
            <div className="burger mobile">

              <img src={burger}/>
              <img src={burgerBlack}/>
            </div>
            <div className="nav-head mobile">
              <div className="w"><NavLink exact to="/"><img src={W}/></NavLink></div>
              <div className="close-nav">x</div>
            </div>
            <div className="inner-cont">
              <h1 className="logo">
                <NavLink exact to="/"><img alrt="logo" src={logo} /></NavLink>
                <NavLink exact to="/"><img alrt="logo" src={logoColor} /></NavLink>
              </h1>
              <ul className="header">
                <li><NavLink exact to="/">Home</NavLink></li>
                <li><NavLink to="#">Features</NavLink></li>
                <li><NavLink to="/pricing">Pricing</NavLink></li>
              </ul>
              <div className="header-opo">
                <div className="account">Login</div>
                <a className="btn" href="#">Build website now</a>
                <div className="lang-switcher">
                  <div className="flag"><img src={flag}/></div>
                  <div className="popup">اللغة العربية</div>
                </div>
              </div>
              </div>
              </div>
          }
          backgroundColor="#fff"
        >
        </StickyHeader>
          <div className="content">
            <Route exact path="/" component={Home}/>
            <Route path="/pricing" component={Pricing}/>
          </div>
          <footer>
            <div className="inner-cont">
                <div className="logo">
                  <NavLink exact to="/"><img alrt="logo" src={logoColor} /></NavLink>
                  <span className="logo-slogan">already built websites</span>
                </div>
                <ul className="footer-links">
                  <li><NavLink exact to="/">Home</NavLink></li>
                  <li><NavLink to="#">Features</NavLink></li>
                  <li><NavLink to="/pricing">Pricing</NavLink></li>
                  <li><NavLink to="#">Blog</NavLink></li>
                  <li><NavLink to="#">Help Center</NavLink></li>
                  <li><NavLink to="#">Privacy Policy</NavLink></li>
                  <li><NavLink to="#">Terms & Conditions</NavLink></li>
                </ul>
              </div>
          </footer>
        </div>
      </HashRouter>
    );
  }
}

export default Main;
