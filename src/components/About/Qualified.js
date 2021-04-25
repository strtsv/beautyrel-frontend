import React from "react";

import i from "../../assets/images/home-4-830x446.jpg";

class Qualified extends React.Component {
  render() {
    return (
      <div className="section section-custom">
        <div className="container wide">
          <div className="text-center">
            <h2 className="title">
              Are You a Qualified <br className="br-none" /> Massage Therapist?
            </h2>
            <div className="subtitle-2 big">
              We are waiting for you to join our team
            </div>
            <div className="row justify-content-center">
              <a className="button button-secondary button-md" href="#">
                Join Us
              </a>
            </div>
            <div className="img-wrap">
              <img src={i} alt width={830} height={446} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Qualified;
