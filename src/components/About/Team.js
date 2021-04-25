import React from "react";

import i1 from "../../assets/images/team-1-390x360.jpg";
import i2 from "../../assets/images/team-2-390x360.jpg";
import i3 from "../../assets/images/team-3-390x360.jpg";

class Team extends React.Component {
  render() {
    return (
      <div className="section section section-xl bg-secondary">
        <div className="container wide">
          <div className="text-center">
            <h2 className="title">Our dedicated team</h2>
            <div className="subtitle-2 big">
              Nulla id nibh at neque aliquet feugiat id sed nibh.
            </div>
          </div>
          <div className="row row-md-30 row-sm-50">
            <div className="col-xs-10 col-md-6 col-lg-4">
              <div className="box-info-modern box-md">
                <div className="box-info-modern-figure">
                  <img src={i1} alt width={390} height={360} />
                </div>
                <h4 className="box-info-modern-title">Evan Johnson</h4>
                <div className="box-info-modern-text">
                  Founder, massage therapist
                </div>
              </div>
            </div>
            <div className="col-xs-10 col-md-6 col-lg-4">
              <div className="box-info-modern box-md">
                <div className="box-info-modern-figure">
                  <img src={i2} alt width={390} height={360} />
                </div>
                <h4 className="box-info-modern-title">Janet Smith</h4>
                <div className="box-info-modern-text">
                  Deep tissue massage therapist
                </div>
              </div>
            </div>
            <div className="col-xs-10 col-md-6 col-lg-4">
              <div className="box-info-modern box-md">
                <div className="box-info-modern-figure">
                  <img src={i3} alt width={390} height={360} />
                </div>
                <h4 className="box-info-modern-title">Peter Wilson</h4>
                <div className="box-info-modern-text">
                  Aromatherapy massage therapist
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Team;
