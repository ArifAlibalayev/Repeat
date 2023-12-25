import React from "react";
import "./index.scss";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

function WhatWeOffer() {
  return (
    <section id="WhatWeOffer">
      <div className="outOfContainer">
        <div className="rightBox">
          <p>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live in Bookmarksgrove right at the coast of the Semantics, a large
            language ocean.
          </p>
        </div>
      </div>
      <div className="titleWhatWeOffer">
        <h2>What We Offer</h2>
        <p>Far far away behind the word mountains</p>
      </div>
      <div className="WWOContainer">
        <div className="WWOimgBox">
          <img
            src="https://preview.colorlib.com/theme/repeat/images/about_1.jpg.webp"
            alt=""
          />
        </div>
        <div className="WWOcontentBox">
          <h2>Graphic Design</h2>
          <Splide
            options={{
              rewind: true,
              width: "100%",
              gap: "1rem",
              pagination: "true",
              
            }}
          >
            <SplideSlide>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque,
                similique?
              </p>
            </SplideSlide>
            <SplideSlide>
              <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum
                officia explicabo totam veniam hic at molestias placeat nam
                saepe maxime!
              </p>
            </SplideSlide>
            <SplideSlide>
              <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque,
                similique?
              </p>
            </SplideSlide>
            <SplideSlide>
              <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum
                officia explicabo totam veniam hic at molestias placeat nam
                saepe maxime!
              </p>
            </SplideSlide>
          </Splide>
        </div>
      </div>
    </section>
  );
}

export default WhatWeOffer;
