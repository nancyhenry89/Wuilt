import React, { Component } from "react";
import "./home.css";
import sec1 from './assets/images/sec1.svg'
import sec2 from './assets/images/sec2.svg'
import sec3 from './assets/images/sec3.svg'
import sec4 from './assets/images/sec4.svg'
import sec5 from './assets/images/sec5.svg'
import what1 from './assets/images/what1.png'
import what2 from './assets/images/what2.png'
import what3 from './assets/images/what3.png'
import what4 from './assets/images/what4.png'

class Home extends Component {
  render() {
    return (
      <div id="home">
        <div className="main-banner">
          <div className="inner-cont">
            <div className="slogan">
              Watch Your Website Build Itself
            </div>
            <p>Create a Website in 3 steps</p>
            <div className="banner-actions">
              <button>Get Started!</button>
              <button>Watch a video demo</button>
            </div>
          </div>
        </div>
        <div className='what'>
          <div className="inner-cont">
            <div className="row">
              <h2 className="section-title">WHAT YOU GET?</h2>
              <div className="desc">We have more than</div>
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
          </div>
          <div className="sec3 home-section img-first">
            <div className="inner-cont">
              <div className="img-cont">
                <img src={sec3}/>
              </div>
              <div className="details-cont">
                <div className="title">Pre-designed sections to play with</div>
                <div className="desc">Any edits to your website are automatically sythesized on desktop, tablet and mobile devices.</div>
              </div>
            </div>
          </div>
          <div className="sec4 home-section img-last">
            <div className="inner-cont">
              <div className="details-cont">
                <div className="title">Pre-designed sections to play with</div>
                <div className="desc">Any edits to your website are automatically sythesized on desktop, tablet and mobile devices.</div>
              </div>
              <div className="img-cont">
                <img src={sec4}/>
              </div>
            </div>
            <div className="sec5 home-section img-first">
              <div className="inner-cont">
                <div className="img-cont">
                  <img src={sec5}/>
                </div>
                <div className="details-cont">
                  <div className="title">Pre-designed sections to play with</div>
                  <div className="desc">Any edits to your website are automatically sythesized on desktop, tablet and mobile devices.</div>
                </div>
              </div>
            </div>
        </div>
      </div>
    );
  }
}

export default Home;