import React from "react";

class Mailform extends React.Component {
  render() {
    return (
      <section className="section section-xl">
        <div className="container wide">
          <div className="row row-50">
            <div className="col-lg-4">
              <div className="contacts-wrap">
                <p>Phone Number</p>
                <div className="phone-link-second">
                  <a href="tel:#">1 000-234-78-90</a>
                </div>
                <div className="phone-link-second">
                  <a href="tel:#">1 000-234-78-90</a>
                </div>
                <p>Location</p>
                <span>3674 Harrison Street, San Francisco, 94143,CA, USA.</span>
              </div>
            </div>
            <div className="col-lg-8">
              <h3>Make an Appointment</h3>
              <form
                className="rd-form rd-form-2 rd-mailform"
                data-form-output="form-output-global"
                data-form-type="contact"
                method="post"
                action="bat/rd-mailform.php"
              >
                <div className="row row-40 row-md-60">
                  <div className="col-md-6">
                    <div className="form-wrap">
                      <input
                        className="form-input"
                        id="contact-name"
                        type="text"
                        name="name"
                        data-constraints="@Required"
                      />
                      <label className="form-label" htmlFor="contact-name">
                        Enter your name:
                      </label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-wrap">
                      <input
                        className="form-input"
                        id="contact-phone"
                        type="text"
                        name="phone"
                        data-constraints="@Numeric"
                      />
                      <label className="form-label" htmlFor="contact-phone">
                        Enter your phone:
                      </label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-wrap form-wrap-select">
                      <select
                        className="form-input select"
                        name="find-job-location"
                        data-minimum-results-for-search="Infinity"
                      >
                        <option value={1}>Select a service</option>
                        <option value={2}>Swedish Relaxation</option>
                        <option value={3}>Remedial Deep Tissue</option>
                        <option value={4}>Group Bookings</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-wrap form-wrap-select">
                      <select
                        className="form-input select"
                        name="find-job-location"
                        data-minimum-results-for-search="Infinity"
                      >
                        <option value={1}>Select a Date</option>
                        <option value={2}>May 15, 2020</option>
                        <option value={3}>June 05, 2020</option>
                        <option value={4}>August 21, 2020</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <button
                      className="button button-secondary button-md"
                      type="submit"
                    >
                      Leave a Request
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Mailform;
