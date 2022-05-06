import React from "react";
import "./header.css";
import CTA from "./CTA";
import ME from "../../assets/me.jpg";
import HeaderSocials from "./HeaderSocials";

function Header() {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Ajit Kumar Gupta</h1>
        <h5 className="text-light">Mern Stack Developer</h5>
        <CTA />

        <div className="me">
          <img src={ME} alt="img" />
        </div>

        <HeaderSocials />
        <a href="#" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
}

export default Header;
