import React from "react";
import "./index.scss";
import { TypeAnimation } from "react-type-animation";

function Hero() {
  return (
    <section id="Hero">
      <div className="typeHero">
        <TypeAnimation
          preRenderFirstString={true}
          sequence={[
            500,
            "We are pretty Excellent",
            1500,
            "We are pretty Nerd",
            2500,
            "We are pretty Geek",
            3500,
            "We are pretty Good",
            500,
          ]}
          speed={1}
          style={{ fontSize: "3em", color: "#003a70",fontWeight:"600"}}
          repeat={Infinity}
        />
        <p>
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts.
        </p>
        <div className="heroBtn">
        <button>Our services</button>
      </div>
      </div>
    </section>
  );
}

export default Hero;
