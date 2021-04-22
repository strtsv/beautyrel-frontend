import React from "react";

import i from "../../assets/images/gift-card-610x550.jpg";

class Content extends React.Component {
  render() {
    return (
      <div className="section section-xl">
        <div className="container wide">
          <div className="row row-md-80 row-sm-50">
            <div className="col-lg-6">
              <div className="subtitle">Make a perfect gift</div>
              <h2 className="title">Buy a gift massage voucher</h2>
              <div className="subtitle-2 big">
                Sed imperdiet hendrerit blandit. Integer at eges tas ante, a
                laoreet mi. In diam metus.
              </div>
              <div className="list-wrap">
                <ul className="list-marked">
                  <li>
                    <p>
                      Treat your friend in the privacy of their own home or
                      hotel
                    </p>
                  </li>
                  <li>
                    <p>
                      Qualified professional massage therapists with all
                      necessary
                    </p>
                  </li>
                  <li>
                    <p>Easy online bookings and redemption</p>
                  </li>
                  <li>
                    <p>
                      Beautifully designed, print-ready massage gift certificate
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-6 justify-content-end mt-md-5 mt-sm-3">
              <img src={i} alt width={610} height={550} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Content;
