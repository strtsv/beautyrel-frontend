import React from "react";

import OwlCarousel from "react-owl-carousel";
import "../../assets/css/owl.carousel.css";

import i1 from "../../assets/images/title-img-153x38.png";
import i2 from "../../assets/images/rate-2-146x27.png";
import i3 from "../../assets/images/rate-1-146x27.png";
import i4 from "../../assets/images/rate-1-146x27.png";
import i5 from "../../assets/images/rate-2-146x27.png";


const options = {
  items: 2,
  margin: 30,
  loop: true,
  mouseDrag: true,
  stagePadding: 0,
  nav: false,
  navText: [],
  dots: true,
  autoplay: true,
  autoplayTimeout: 3000,
  autoplayHoverPause: true,
};

class Testimonials extends React.Component {
  render() {
    return (
      <div className="section section-lg bg-gray-150">
        <div className="text-center">
          <p className="subtitle">Our customers love Beautyrel</p>
          <h2 className="title">Rated #1 massage in New York</h2>
          <div className="subtitle-box">
            <div className="subtitle-box-text">Reviews from:</div>
            <div className="subtitle-box-media">
              <img src={i1} alt width={153} height={38} />
            </div>
          </div>
        </div>
        <div
          className="owl-theme-1"
          // className="owl-carousel owl-theme-1"
          data-items={1}
          data-sm-items={1}
          data-md-items={1}
          data-lg-items={1}
          data-xl-items={2}
          data-xxl-items={3}
          data-margin="15px"
          data-nav="false"
          data-dots="true"
          data-autoplay={8000}
        >
            <OwlCarousel {...options}>

          <div className="testimonial-box">
            <div className="testimonial-title">Cool!</div>
            <div className="testimonial-rate">
              <img src={i2} alt width={146} height={27} />
            </div>
            <div className="testimonial-text">
              “I have found all your services to be amazing. Most recently I
              received a massage with cupping from Janet. She is a miracle
              worker. I store stress in my back and often have tension from long
              hours on the computer. Janet somehow manages make my back feel
              like I have never had any moments of stress in life.”
            </div>
            <div className="testimonial-name">— Alisa R.</div>
          </div>
          <div className="testimonial-box">
            <div className="testimonial-title">Excellent!</div>
            <div className="testimonial-rate">
              <img src={i3} alt width={146} height={27} />
            </div>
            <div className="testimonial-text">
              “Your massage therapists are beyond incredible. They are so
              kind-hearted and treat you like the individual that you are. They
              listen and take note of what pressure you like.”
            </div>
            <div className="testimonial-name">— John C.</div>
          </div>
          <div className="testimonial-box">
            <div className="testimonial-title">Amazing!</div>
            <div className="testimonial-rate">
              <img src={i4} alt width={146} height={27} />
            </div>
            <div className="testimonial-text">
              "Your massage therapists are amazing at deep tissue massage. They
              take time before the massage to truly understand problem areas and
              really listen! They really aim to provide a high level of
              service."
            </div>
            <div className="testimonial-name">— Evan M.</div>
          </div>
          <div className="testimonial-box">
            <div className="testimonial-title">Excellent!</div>
            <div className="testimonial-rate">
              <img src={i5} alt width={146} height={27} />
            </div>
            <div className="testimonial-text">
              {" "}
              “I am pleased with the provided service and will continue my
              sessions with you. Also, I would recommend Beautyrel massage to
              anybody who has chronic pain issues.”
            </div>
            <div className="testimonial-name"> — Edward J.</div>
          </div>
          </OwlCarousel>
        </div>
      </div>
    );
  }
}

export default Testimonials;
