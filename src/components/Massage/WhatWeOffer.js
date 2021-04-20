import React from "react";

import i1 from "../../assets/images/massage-1-390x344.jpg";
import i2 from "../../assets/images/massage-2-390x344.jpg";
import i3 from "../../assets/images/massage-3-390x344.jpg";
import i4 from "../../assets/images/massage-4-390x344.jpg";
import i5 from "../../assets/images/massage-5-390x344.jpg";
import i6 from "../../assets/images/massage-6-390x344.jpg";

class WhatWeOffer extends React.Component {
  render() {
    return (
      <div className="section section section-xl">
        <div className="container wide">
          <div className="text-center">
            <div className="subtitle">What we offer</div>
            <h2 className="title">
              We Bring The Best <br className="d-none d-xl-block" /> Massage To
              You
            </h2>
          </div>
          <div className="row row-md-80 row-sm-50">
            <div className="col-xs-10 col-md-6 col-lg-4">
              <div className="box-info-modern box-md">
                <div className="box-info-modern-figure">
                  <img src={i1} alt width={390} height={344} />
                </div>
                <div className="box-info-modern-title">
                  <a href="single-massage.html">Swedish Relaxation</a>
                </div>
                <div className="box-info-modern-text small">
                  One of the primary goals of the Swedish massage technique is
                  to relax the entire body
                </div>
              </div>
            </div>
            <div className="col-xs-10 col-md-6 col-lg-4">
              <div className="box-info-modern box-md">
                <div className="box-info-modern-figure">
                  <img src={i2} alt width={390} height={344} />
                </div>
                <div className="box-info-modern-title">
                  <a href="single-massage.html">Remedial Deep Tissue</a>
                </div>
                <div className="box-info-modern-text small">
                  This will include an assessment of the muscles, ligaments,
                  tendons and posture
                </div>
              </div>
            </div>
            <div className="col-xs-10 col-md-6 col-lg-4">
              <div className="box-info-modern box-md">
                <div className="box-info-modern-figure">
                  <img src={i3} alt width={390} height={344} />
                </div>
                <div className="box-info-modern-title">
                  <a href="single-massage.html">Group Bookings</a>
                </div>
                <div className="box-info-modern-text small">
                  Treat yourself and your friend with the best massage
                  experience
                </div>
              </div>
            </div>
            <div className="col-xs-10 col-md-6 col-lg-4">
              <div className="box-info-modern box-md">
                <div className="box-info-modern-figure">
                  <img src={i4} alt width={390} height={344} />
                </div>
                <div className="box-info-modern-title">
                  <a href="single-massage.html">Pregnancy Massage</a>
                </div>
                <div className="box-info-modern-text small">
                  Tranquil relaxation and reduce stress, Relief from cramps,
                  spasms, pain, etc.
                </div>
              </div>
            </div>
            <div className="col-xs-10 col-md-6 col-lg-4">
              <div className="box-info-modern box-md">
                <div className="box-info-modern-figure">
                  <img src={i5} alt width={390} height={344} />
                </div>
                <div className="box-info-modern-title">
                  <a href="single-massage.html">Face Massage</a>
                </div>
                <div className="box-info-modern-text small">
                  Facial massages increase circulation to your facial tissue,
                  resulting in youthful-looking skin
                </div>
              </div>
            </div>
            <div className="col-xs-10 col-md-6 col-lg-4">
              <div className="box-info-modern box-md">
                <div className="box-info-modern-figure">
                  <img src={i6} alt width={390} height={344} />
                </div>
                <div className="box-info-modern-title">
                  <a href="single-massage.html">Massotherapy</a>
                </div>
                <div className="box-info-modern-text small">
                  A collection of bodywork modalities designed to improve health
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default WhatWeOffer;
