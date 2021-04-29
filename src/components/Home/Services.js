import React from "react";

import i1 from "../../assets/images/video-prev-1050x591.jpg";
import i2 from "../../assets/images/box-home-3-580x550.jpg";

class Services extends React.Component {
  render() {
    return (
      <div className="section section section-lg">
        <div className="container wide">
          <div className="row row-md-30">
            <div className="col-md-5 col-lg-5">
              <div className="subtitle">Spa-quality service</div>
              <h2 className="title">We Deliver Quality Service</h2>
              <div className="subtitle-2">
                At our beauty salon, you get the highest level of customer
                service and the utmost relaxation at a very affordable price.
              </div>
              <div className="btn-wrap">
                <a
                  className="button button-primary button-md"
                  href="#"
                  data-caption-animate="fadeInUp"
                  data-caption-delay={450}
                >
                  Book Now
                </a>
              </div>
            </div>
            <div className="col-md-7 col-lg-7">
              <div className="video-wrap mt-md-5 mt-sm-5">
                <a
                  className="video-cover"
                  style={{
                    backgroundImage: "url(" + i1 + ")",
                  }}
                  data-lightgallery="item"
                  href="https://www.youtube.com/watch?v=NxPbcuUZcL0"
                >
                  <span className="icon mdi mdi-play-circle-outline" />
                </a>
              </div>
            </div>
          </div>
          <div className="text-wrap">
            <div className="row row-md-30">
              <div className="col-md-6 col-lg-6">
                <img src={i2} alt width={580} height={550} />
              </div>
              <div className="col-md-6 col-lg-6">
                <div className="mt-4">
                  <div className="subtitle">True experts</div>
                  <h2 className="title">Best Massage Therapists</h2>
                  <div className="subtitle-2">
                    Beautyrel is a team of dedicated and professionally trained
                    massage therapists always ready to help you relax.
                    Experience the best body treatment with us!
                  </div>
                  <div className="btn-wrap">
                    <a
                      className="button button-secondary button-md"
                      href="#"
                      data-caption-animate="fadeInUp"
                      data-caption-delay={450}
                    >
                      Book Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Services;
