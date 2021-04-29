import React from "react";

import i from "../../assets/images/slide-01.jpg";

class Slider extends React.Component {
  render() {
    return (
      <div className="section section-main-bunner context-dark" id="home">
        <div
          className="main-bunner-img bg-overlay-1"
          style={{
            backgroundImage: "url(" + i + ")",
            backgroundSize: "cover",
          }}
        />
        <div className="main-bunner-inner">
          <div className="container wide">
            <div className="row justify-content-left">
              <div className="col-lg-5">
                <h1 data-caption-animate="fadeInUp" data-caption-delay={100}>
                  Massage <br className="br-none" /> On Demand
                </h1>
                <p
                  className="lead text-custom-blue"
                  data-caption-animate="fadeInUp"
                  data-caption-delay={250}
                >
                  Are you tired and exhausted? Do you need to relax and tidy up
                  your body and health? Try our massage today!
                </p>
                <div className="btn-wrap">
                  <div className="group-xxl group-middle">
                    <a
                      className="button button-primary button-md button-round-2"
                      href="#"
                      data-caption-animate="fadeInUp"
                      data-caption-delay={450}
                    >
                      {" "}
                      Book Now
                    </a>
                    <a
                      className="button button-white button-md button-round-2"
                      href="#"
                      data-caption-animate="fadeInUp"
                      data-caption-delay={450}
                    >
                      Buy As Gift
                    </a>
                  </div>
                </div>
                <div className="phone-wrap phone-wrap-2">
                  <div className="phone-link-title">P:</div>
                  <a className="phone-link" href="tel:#">
                    {" "}
                    1 000 234 7890
                  </a>
                </div>
                <p className="text-custom-blue">
                  178 West 27th Street, Suite 527, New York NY 10012, United
                  States
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Slider;
