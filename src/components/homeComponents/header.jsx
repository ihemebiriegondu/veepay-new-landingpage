import React from "react";
import Nav from "./nav";

import logo from "../../assets/icons/Veepay Logo (2).png";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-primary/20">
      <Nav />
      <div>
        <div>
          <div>
            <img src={logo} alt="veepay logo" />
          </div>
          <p>
            Veepay is a three in one telecommunication platform that provides
            its users with hassle-free experience anytime they use its product.
            Veepay intends to connect individuals in ways to pay for their
            favorite services by providing easier, faster and secure ways to
            recharge your favorite brands.
          </p>
          <Link to={'/'}>Start now</Link>
        </div>
        <div>
          <img src="" alt="" />
        </div>
      </div>
    </header>
  );
}
