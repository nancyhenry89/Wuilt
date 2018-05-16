import React, { Component } from "react";
import "./home.css";
import sec1 from './assets/images/sec1.svg'
import sec2 from './assets/images/sec2.svg'
import sec3 from './assets/images/sec3.svg'
import sec4 from './assets/images/sec4.svg'
import sec5 from './assets/images/sec5.svg'

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
              <h2 className="section-title">What you get</h2>
              <div className="desc">We have more than</div>
            </div>
            <div className="row">
              <div className="col">
                <div className="head">
                  <span className="icon"></span>
                </div>
                <div className="body">
                  <div className="title">Unique designs</div>
                  <div className="details">Create separate sections for different aspects of your business</div>
                </div>
              </div>
              <div className="col">
                <div className="head">
                  <span className="icon"></span>
                </div>
                <div className="body">
                  <div className="title">Unique designs</div>
                  <div className="details">Create separate sections for different aspects of your business</div>
                </div>
              </div>
              <div className="col">
                <div className="head">
                  <span className="icon"></span>
                </div>
                <div className="body">
                  <div className="title">Unique designs</div>
                  <div className="details">Create separate sections for different aspects of your business</div>
                </div>
              </div>
              <div className="col">
                <div className="head">
                  <span className="icon"></span>
                </div>
                <div className="body">
                  <div className="title">Unique designs</div>
                  <div className="details">Create separate sections for different aspects of your business</div>
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
              <div className="desc">Any edits to your website are automatically sythesized on desktop, tablet and mobile devices.</div>
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
