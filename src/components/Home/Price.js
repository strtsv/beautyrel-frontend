import React from "react";
import $ from "jquery";

import i from "../../assets/images/paralax-home.jpg";

class Price extends React.Component {
  componentDidMount() {
    $(".parallax-container").parallax({});
  }
  render() {
    return (
      <section
        className="section-lg parallax-container text-center"
        data-parallax-img={i}
        data-image-src={i}
      >
        <div className="parallax-content section-xxl context-dark">
          <div className="container wide">
            <div className="text-center">
              <div className="row row-md-80 row-sm-60">
                <div className="col-xs-10 col-md-6 col-lg-4">
                  <div className="box-price-simple">
                    <div className="box-price">
                      <p>$99</p>
                    </div>
                    <div className="box-price-title">
                      <p>60-min massage</p>
                    </div>
                    <div className="box-price-descr">
                      <p className="text-custom-blue">
                        1-hour massage perfectly customized to your needs.
                      </p>
                    </div>
                    <a className="button button-primary button-md" href="#">
                      Book Now
                    </a>
                  </div>
                </div>
                <div className="col-xs-10 col-md-6 col-lg-4">
                  <div className="box-price-simple">
                    <div className="box-price">
                      <p>$199</p>
                    </div>
                    <div className="box-price-title">
                      <p>90-min massage</p>
                    </div>
                    <div className="box-price-descr">
                      <p className="text-custom-blue">
                        1.5-hour massage with everything you need.
                      </p>
                    </div>
                    <a className="button button-secondary button-md" href="#">
                      Book Now
                    </a>
                  </div>
                </div>
                <div className="col-xs-10 col-md-6 col-lg-4">
                  <div className="box-price-simple">
                    <div className="box-price">
                      <p>$299</p>
                    </div>
                    <div className="box-price-title">
                      <p>120-min massage</p>
                    </div>
                    <div className="box-price-descr">
                      <p className="text-custom-blue">
                        2-hour massage for all your relaxation purposes
                      </p>
                    </div>
                    <a className="button button-primary button-md" href="#">
                      Book Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Price;
