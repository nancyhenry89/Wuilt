import React, { Component } from "react";
import "./pricing.css";
import $ from 'jquery'
import {Tabs, Tab} from 'react-bootstrap-tabs';

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
         <Tabs onSelect={(index, label) => console.log(label + ' selected')}>
             <Tab label="ANNUAL">
                <div className="sub-types">
                  <div className="subscription">
                    <div className="head">
                      <div className="title">STARTER</div>
                      <div className="price">$25</div>
                      <div className="per">/month</div>
                    </div>
                    <div className="details">
                      <ul>
                        <li><b>200</b> members</li>
                        <li>All the feature on the <b>Masterclass</b> plan</li>
                        <li><b>Moodle</b> integration</li>
                        <li>Personalized <b>conseling</b></li>
                      </ul>
                    </div>
                    <div className="button">
                      <a href="" className="btn">Purchase Plan</a>
                    </div>
                  </div>
                  <div className="subscription prof">
                    <div className="head">
                      <div className="title">PROFESSIONAL</div>
                      <div className="price">$50</div>
                      <div className="per">/month</div>
                    </div>
                    <div className="details">
                      <ul>
                        <li><b>200</b> members</li>
                        <li>All the feature on the <b>Masterclass</b> plan</li>
                        <li><b>Moodle</b> integration</li>
                        <li>Personalized <b>conseling</b></li>
                        <li>Personalized <b>conseling</b></li>
                        <li>Personalized <b>conseling</b></li>
                      </ul>
                    </div>
                    <div className="button">
                      <a href="" className="btn">Purchase Plan</a>
                    </div>
                  </div>
                  <div className="subscription">
                    <div className="head">
                      <div className="title">BEGINNER</div>
                      <div className="price">$39</div>
                      <div className="per">/month</div>
                    </div>
                    <div className="details">
                      <ul>
                        <li><b>200</b> members</li>
                        <li>All the feature on the <b>Masterclass</b> plan</li>
                        <li><b>Moodle</b> integration</li>
                        <li>Personalized <b>conseling</b></li>
                      </ul>
                    </div>
                    <div className="button">
                      <a href="" className="btn">Purchase Plan</a>
                    </div>
                  </div>
                </div>
             </Tab>
             <Tab label="MONTHLY">MONTHLY</Tab>
         </Tabs>
        </div>
  </div>
    );
  }
}

export default Pricing;
