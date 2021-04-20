import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <footer className="section footer-classic context-dark">
        <div className="container wide">
          <div className="row row-sm-30">
            <div className="col-lg-6">
              <div className="phone-wrap">
                <div className="group-md group-middle">
                  <a className="phone-link" href="tel:#">
                    1 000 -234 -78-90
                  </a>
                  <div className="phone-sub">Call Me Back</div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="text-lg-right">
                <div className="group-xl group-middle">
                  <p>Any complaints or suggestions?</p>
                  <a
                    className="button button-white button-round-2"
                    href="#"
                    data-caption-animate="fadeInUp"
                    data-caption-delay={450}
                  >
                    Let Us Know
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="list-wrapper">
            <div className="row row-sm-30">
              <div className="col-sm-4 col-md-4 col-lg-3">
                <p>Treatments</p>
                <ul className="list">
                  <li>
                    <a href="#" data-waypoint-to="#">
                      Swedish Massage Therapy
                    </a>
                  </li>
                  <li>
                    <a href="#" data-waypoint-to="#">
                      Aromatherapy Massage
                    </a>
                  </li>
                  <li>
                    <a href="#" data-waypoint-to="#">
                      Hot Stone Massage
                    </a>
                  </li>
                  <li>
                    <a href="#" data-waypoint-to="#">
                      Deep Tissue Massage
                    </a>
                  </li>
                  <li>
                    <a href="#" data-waypoint-to="#">
                      Shiatsu Massage
                    </a>
                  </li>
                  <li>
                    <a href="#" data-waypoint-to="#">
                      Thai Massage
                    </a>
                  </li>
                  <li>
                    <a href="#" data-waypoint-to="#">
                      Pregnancy Massage
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-sm-4 col-md-4 col-lg-3">
                <p>Beautyrel</p>
                <ul className="list">
                  <li>
                    <a href="#" data-waypoint-to="#">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="#" data-waypoint-to="#">
                      Reviews
                    </a>
                  </li>
                  <li>
                    <a href="#" data-waypoint-to="#">
                      Blog
                    </a>
                  </li>
                  <li>
                    <a href="#" data-waypoint-to="#">
                      Affiliates
                    </a>
                  </li>
                  <li>
                    <a href="#" data-waypoint-to="#">
                      Careers
                    </a>
                  </li>
                  <li>
                    <a href="#" data-waypoint-to="#">
                      Invest
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-sm-4 col-md-4 col-lg-3">
                <p>Help</p>
                <ul className="list">
                  <li>
                    <a href="#" data-waypoint-to="#">
                      Help Center
                    </a>
                  </li>
                  <li>
                    <a href="#" data-waypoint-to="#">
                      FAQs
                    </a>
                  </li>
                  <li>
                    <a href="#" data-waypoint-to="#">
                      Pricing
                    </a>
                  </li>
                  <li>
                    <a href="#" data-waypoint-to="#">
                      Terms
                    </a>
                  </li>
                  <li>
                    <a href="#" data-waypoint-to="#">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" data-waypoint-to="#">
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-sm-4 col-md-4 col-lg-3">
                <img
                  src="images/footer-1-280x156.jpg"
                  alt
                  width={280}
                  height={156}
                />
                <p>
                  Top 5 Types of Massage That You Have to Try When Visiting
                  Beautyrel
                </p>
                <div className="date"> January 30, 2020</div>
              </div>
            </div>
          </div>
          <div className="row row-sm-30">
            <div className="col-lg-6">
              <div className="group-md group-middle">
                <p className="rights">
                  <span>©  </span>
                  <span className="copyright-year" />
                  <span> </span>
                  <span>Beautyrel</span>
                  <span>. </span>
                  <a href="privacy-policy.html">Privacy Policy</a>
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="text-lg-right">
                <ul className="group-xl group-middle">
                  <li>
                    <a
                      className="icon icon-default icon-sm mdi mdi-rss"
                      href="#"
                    />
                  </li>
                  <li>
                    <a
                      className="icon icon-default icon-sm mdi mdi-twitter"
                      href="#"
                    />
                  </li>
                  <li>
                    <a
                      className="icon icon-default icon-sm mdi mdi-facebook"
                      href="#"
                    />
                  </li>
                  <li>
                    <a
                      className="icon icon-default icon-sm mdi mdi-linkedin-box"
                      href="#"
                    />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
