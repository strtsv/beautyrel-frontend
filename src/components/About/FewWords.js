import React from "react";

import i from "../../assets/images/video-prev-1050x591.jpg";

class FewWords extends React.Component {
  render() {
    return (
      <div className="section section-lg bg-default">
        <div className="container">
          <div className="about-wrap">
            <div className="subtitle">A few words about Beautyrel</div>
            <div className="row row-sm-30">
              <div className="col-lg-6">
                <h2 className="title">
                  Delivering the <br className="br-none" /> Best Massage
                </h2>
              </div>
              <div className="col-lg-6">
                <div className="text-wrap-about mt-md-3 mt-sm-3">
                  <p className="big">
                    Heu. Heu. Sunt abactuses examinare lotus, festus lunaes.
                    Cobaltums ire in clemens brigantium! Cum gemna trabem, omnes
                    idoleumes consumere secundus, teres castores. Nunquam
                    imperium candidatus. Cum fluctui peregrinationes, omnes
                    humani generises talem nobilis, pius homoes,
                  </p>
                </div>
              </div>
            </div>
            <div className="row row-sm-30">
              <div className="col-lg-12 mt-lg-3">
                <a
                  className="video-cover"
                  style={{
                    backgroundImage: "url(" + i + ")",
                  }}
                  data-lightgallery="item"
                  href="https://www.youtube.com/watch?v=NxPbcuUZcL0"
                >
                  <span className="icon mdi mdi-play-circle-outline" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FewWords;
