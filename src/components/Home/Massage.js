import React from "react";

import i1 from "../../assets/images/icon-1-44x44.png";
import i2 from "../../assets/images/icon-2-44x44.png";
import i3 from "../../assets/images/icon-3-44x44.png";

class Massage extends React.Component {
  render() {
    return (
      <div className="section section section-lg bg-default">
        <div className="container wide">
          {}
          <div className="text-center">
            <div className="subtitle">A massage for any occasion</div>
            <h2 className="title">Choose Your Massage</h2>
          </div>
          <div className="row row-60">
            <div className="col-xs-10 col-md-6 col-lg-4">
              <article className="box-minimal">
                <div className="box-minimal-icon">
                  <img src={i1} alt width={44} height={44} />
                </div>
                <h4 className="box-minimal-title">Relaxation</h4>
                <div className="box-minimal-text">
                  <p>
                    Your therapist will aim to relax, revive and rejuvenate you
                  </p>
                </div>
              </article>
            </div>
            <div className="col-xs-10 col-md-6 col-lg-4">
              <article className="box-minimal">
                <div className="box-minimal-icon">
                  <img src={i2} alt width={44} height={44} />
                </div>
                <h4 className="box-minimal-title">Pregnancy Massage</h4>
                <div className="box-minimal-text">
                  <p>
                    Tranquil relaxation to reduce stress and get relief from
                    cramps and pain.
                  </p>
                </div>
              </article>
            </div>
            <div className="col-xs-10 col-md-6 col-lg-4">
              <article className="box-minimal">
                <div className="box-minimal-icon">
                  <img src={i3} alt width={44} height={44} />
                </div>
                <h4 className="box-minimal-title">Sports Massage</h4>
                <div className="box-minimal-text">
                  <p>
                    Improved flexibility and reduced injury risk to help you
                    recover quicker.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Massage;
