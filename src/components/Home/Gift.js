import React from "react";

class Gift extends React.Component {
  render() {
    return (
      <div className="section section section-xl bg-gray-150">
        <div className="container wide">
          <div className="text-center">
            <h2 className="title">Beautyrel Massage Gift Voucher</h2>
            <div className="subtitle-2">
              Get a personalized gift voucher for your family member.
            </div>
          </div>
          <div className="row row-md-80 row-sm-50">
            <div className="col-xs-10 col-md-6 col-lg-4 text-center">
              <div className="voucher-box">
                <div className="voucher-name">$250 Gift Voucher</div>
                <div className="voucher-title">Basic Voucher</div>
                <div className="voucher-text">
                  The most affordable option for anyone.
                </div>
                <a className="button button-secondary button-md" href="#">
                  Buy As Gift
                </a>
              </div>
            </div>
            <div className="col-xs-10 col-md-6 col-lg-4 text-center">
              <div className="voucher-box-dark">
                <div className="voucher-name">$450 Gift Voucher</div>
                <div className="voucher-title">Standard Voucher</div>
                <div className="voucher-text">
                  Our most popular offer that also is a great present.
                </div>
                <a className="button button-secondary-dark button-md" href="#">
                  Buy As Gift
                </a>
              </div>
            </div>
            <div className="col-xs-10 col-md-6 col-lg-4 text-center">
              <div className="voucher-box">
                <div className="voucher-name">$950 Gift Voucher</div>
                <div className="voucher-title">Premium Voucher</div>
                <div className="voucher-text">
                  This voucher includes the cost of all our treatments.
                </div>
                <a className="button button-secondary button-md" href="#">
                  Buy As Gift
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Gift;
