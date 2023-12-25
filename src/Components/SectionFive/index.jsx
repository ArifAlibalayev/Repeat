import React from "react";
import "./index.scss";

function SectionFive() {
  return (
    <section id="SectionFive">
      <div className="fiveContent">
        <h2>Get anything done in one place</h2>
        <p>
          Separated they live in Bookmarksgrove right at the coast of the
          Semantics, a large language ocean.
        </p>
        <button>Our services</button>
      </div>
      <div className="fiveImgs">
      <img
          src="https://preview.colorlib.com/theme/repeat/images/about_2.jpg.webp"
          alt=""
        />
        <img
          style={{ position: "absolute", bottom: "0", left: "0", zIndex: "5",width:"50%"}}
          src="https://preview.colorlib.com/theme/repeat/images/about_3.jpg.webp"
          alt=""
        />
      </div>
    </section>
  );
}

export default SectionFive;
