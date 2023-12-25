import React from "react";
import "./index.scss";

function AboutUsSection() {
  return (
    <section id="AboutUsSection">
      <div className="aboutUsOverlay"></div>
      <div className="containerAboutUs">
        <div className="aboutUsWrapper">
          <div className="titleAboutUs">
            <p>About us</p>
            <h2>We are here to help grow your business</h2>
            <div className="aboutUsImgBox">
              <img
                src="https://preview.colorlib.com/theme/repeat/images/about_4.jpg.webp"
                alt=""
              />
            </div>
          </div>
          <div className="contentAboutUs">
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live in Bookmarksgrove right at the coast of the Semantics, a
              large language ocean.
            </p>
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live in Bookmarksgrove right at the coast of the Semantics, a
              large language ocean.
            </p>
            <p>
              Separated they live in Bookmarksgrove right at the coast of the
              Semantics, a large language ocean.
            </p>
            <div className="orangeLine">
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUsSection;
