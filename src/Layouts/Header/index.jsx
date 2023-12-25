import React from "react";
import "./index.scss";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header id="header">
      <nav>
        <div className="logo">
          <NavLink className={true ? "nlActiveLogo" : "nlPendingLogo"} to={"/"}>
            <h3>Repeat</h3>
          </NavLink>
        </div>
        <div className="navBtns">
          <ul>
            <NavLink className={true ? "nlPending" : "nlActive"}>
              <li>Home</li>
            </NavLink>
            <NavLink className={true ? "nlPending" : "nlActive"}>
              <li>Services</li>
            </NavLink>
            <NavLink className={true ? "nlPending" : "nlActive"}>
              <li>Pricing</li>
            </NavLink>
            <NavLink className={true ? "nlPending" : "nlActive"}>
              <li>About</li>
            </NavLink>
            <NavLink className={true ? "nlPending" : "nlActive"}>
              <li>Contact Us</li>
            </NavLink>
            <NavLink className={true ? "nlPending" : "nlActive"}>
              <li>Home</li>
            </NavLink>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
