import React, { Component } from "react";
import "./pricing.css";
import $ from 'jquery'
class Pricing extends Component {

  componentDidMount() {
  $('header').addClass('pricing-header');
 }

  render() {
    return (
      <div id="pricing">
        <div className="main-section">
         <h2 className="title">Plans that suits your business</h2>
         <div className="desc">Create a website in 3 steps</div>
        </div>


      </div>
    );
  }
}

export default Pricing;
