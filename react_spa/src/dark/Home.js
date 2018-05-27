import React, { Component } from "react";
import "./home.css";
import sec1 from './assets/images/sec1.png'
import sec2 from './assets/images/sec2.png'
import sec3 from './assets/images/sec3.png'
import sec4 from './assets/images/sec4.png'
import sec5 from './assets/images/sec5.png'
import what1 from './assets/images/what1.png'
import what2 from './assets/images/what2.png'
import what3 from './assets/images/what3.png'
import what4 from './assets/images/what4.png'
import strip1 from './assets/images/strip1.png'
import strip2 from './assets/images/strip2.png'
import strip3 from './assets/images/strip3.png'
import strip4 from './assets/images/strip4.png'
import homeImg from './assets/images/home.png'
import {FormattedMessage, FormattedHTMLMessage} from 'react-intl';

import $ from 'jquery'
class Home extends Component {
  componentDidMount() {
  $('header').removeClass('pricing-header');
  $('header').removeClass('nav-opened');
 }
  render() {
    return (
      <div id="home">
         <div className="main-banner">
            <div className="inner-cont">
            <div className="banner-data">
               <div className="slogan">
               <FormattedMessage id="app.slogan"/>
               </div>
               <p><FormattedMessage id="app.threestep"/></p>
               <div className="banner-actions">
                  <a className="btn">Get Early Access</a>
               </div>
               </div>
               <div className="banner-img"><img src={homeImg}/></div>
            </div>
         </div>
         <div className='what'>
            <div className="inner-cont">
               <div className="row">
                  <h2 className="section-title">WHAT YOU GET?</h2>
                 
               </div>
               <div className="row">
                  <div className="col">
                     <div className="head">
                        <div className="icon"><img src={what1}/></div>
                     </div>
                     <div className="body">
                        <div className="title">Unique Designs</div>
                        <div className="details">Create separate sections for different aspects of your business.</div>
                     </div>
                  </div>
                  <div className="col">
                     <div className="head">
                        <div className="icon"><img src={what2}/></div>
                     </div>
                     <div className="body">
                        <div className="title">Analytics</div>
                        <div className="details">Track how your website and marketing efforts are performing.</div>
                     </div>
                  </div>
                  <div className="col">
                     <div className="head">
                        <div className="icon"><img src={what3}/></div>
                     </div>
                     <div className="body">
                        <div className="title">Integrations</div>
                        <div className="details">Incorporate all the tools that you love into your website with ease.</div>
                     </div>
                  </div>
                  <div className="col">
                     <div className="head">
                        <div className="icon"><img src={what4}/></div>
                     </div>
                     <div className="body">
                        <div className="title">Live Preview</div>
                        <div className="details">View the desktop, tablet and mobile versions of your website before they go live.</div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div className="sec1 home-section img-first">
            <div className="inner-cont">
               <div className="img-cont">
                  <img src={sec1}/>
               </div>
               <div className="details-cont">
                  <div className="title">Pre-designed sections to play with</div>
                  <div className="desc">Any edits to your website are automatically synthesized on desktop, tablet and mobile devices.</div>
               </div>
               <div className="strip"><img src={strip1}/></div>
            </div>
         </div>
         <div className="sec2 home-section img-last">
            <div className="inner-cont">
               <div className="details-cont">
                  <div className="title">Pre-designed sections to play with</div>
                  <div className="desc">Any edits to your website are automatically sythesized on desktop, tablet and mobile devices.</div>
               </div>
               <div className="img-cont">
                  <img src={sec2}/>
               </div>
            </div>
             <div className="strip"><img src={strip2}/></div>
         </div>
         <div className="sec3 home-section img-first">
            <div className="inner-cont">
               <div className="img-cont">
                  <img src={sec3}/>
               </div>
               <div className="details-cont">
                  <div className="title">Complementary Color Palettes</div>
                  <div className="desc">With numerous color palettes, your website is guaranteed to have unique character and vibrancy.</div>
               </div>
            </div>
             <div className="strip"><img src={strip3}/></div>
         </div>
         <div className="sec4 home-section img-last">
            <div className="inner-cont">
               <div className="details-cont">
                  <div className="title">Different font styles to choose from</div>
                  <div className="desc">Any edits to your website are automatically synthesized on desktop, tablet and mobile devices.</div>
               </div>
               <div className="img-cont">
                  <img src={sec4}/>
               </div>
            </div>
              <div className="strip"><img src={strip4}/></div>
         </div>
         <div className="sec5 home-section img-first">
            <div className="inner-cont">
               <div className="img-cont">
                  <img src={sec5}/>
               </div>
               <div className="details-cont">
                  <div className="title">Different font styles to choose from</div>
                  <div className="desc">Any edits to your website are automatically synthesized on desktop, tablet and mobile devices.</div>
               </div>
            </div>
         </div>
         <div className="closing">
          <h2 className="title">Build your website now! In only 3 Steps.</h2>
          <div className="desc">No Credit Card. No Commitment.</div>
            <a className="btn">Get Started Now!</a>
         </div>

      </div>
    );
  }
}

export default Home;
