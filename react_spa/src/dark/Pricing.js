import React, { Component } from "react";
import "./pricing.css";
import $ from 'jquery'
import p1 from './assets/images/p1.png'
import p2 from './assets/images/p2.png'
import p3 from './assets/images/p3.png'
import p4 from './assets/images/p4.png'
import p5 from './assets/images/p5.png'
import p6 from './assets/images/p6.png'
import p7 from './assets/images/p7.png'
import {Tabs, Tab} from 'react-bootstrap-tabs';
import { Accordion, AccordionItem } from 'react-sanfona';

class Pricing extends Component {

  componentDidMount() {
  $('header').addClass('pricing-header');
  $('header').removeClass('nav-opened');
 }

  render() {
    return (
      <div id="pricing">
        <div className="main-section">
        <div className="desc">Create a website in 3 steps</div>
         <h2 className="title">Lorem Ipsum Dolor Sit Amet Consectuar</h2>
         
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
        <div className="grey-cont"></div>
        <div className="bundles">
          <div className="inner-cont">
            <h2 className="section-title">All Premium Plans Always Include</h2>
            <div className="bundles-cont">
              <div className="item">
                <div className="img-cont"><img src={p1}/></div>
                <div className="title">Section Designs</div>
              </div>
              <div className="item">
                <div className="img-cont"><img src={p2}/></div>
                <div className="title">ShutterStock Images</div>
              </div>
              <div className="item">
                <div className="img-cont"><img src={p3}/></div>
                <div className="title">Unlimited Bandwidth</div>
              </div>
              <div className="item">
                <div className="img-cont"><img src={p4}/></div>
                <div className="title">upto 100 GB Storage</div>
              </div>
              <div className="item">
                <div className="img-cont"><img src={p5}/></div>
                <div className="title">Free Domain</div>
              </div>
              <div className="item">
                <div className="img-cont"><img src={p6}/></div>
                <div className="title">24/7 Chat Support</div>
              </div>
              <div className="item">
                <div className="img-cont"><img src={p7}/></div>
                <div className="title">Unlimited Pages</div>
              </div>
            </div>
          </div>
        </div>
        <div className="faq">
        <div className="inner-cont">
          <h2 className="section-title">Some Questions You Might Have</h2>
          <div className="questions">
          <Accordion>
                  <AccordionItem title="What's a Premium Plan?" expanded={true}>
                    <div className="answer">
                    Wix gives you everything you need to create a stunning website for free, including top-grade hosting. You can choose to get even more benefits and features by upgrading to one of our Premium plans.
                    </div>
                  </AccordionItem>
                  <AccordionItem title="What are the benefits of a Premium plan?" >
                    <div className="answer">
                    "answer example"
                    </div>
                  </AccordionItem>
                  <AccordionItem title="What are the benefits of purchasing a Yearly Savings Plan?" >
                    <div className="answer">
                    "answer example"
                    </div>
                  </AccordionItem>
                  <AccordionItem title="Is web hosting included with my Built website?" >
                    <div className="answer">
                    "answer example"
                    </div>
                  </AccordionItem>
                  <AccordionItem title="What does “connect your own domain“ mean?" >
                    <div className="answer">
                    "What does “connect your own domain“ mean?"
                    </div>
                  </AccordionItem>
            </Accordion>
          </div>
        </div>
        </div>
  </div>

    );
  }
}

export default Pricing;
