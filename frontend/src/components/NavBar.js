import React, { useState } from "react";
import "../styles/navbar.css";

function Navbar({ links }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div class="Container">
      <div className="nav-stickey">
        <div className="nav-content">
          <img alt="navbar" src="./images/logo.png" height="50" />
          <div className="nav-logo">Homegrown</div>

          <nav className="nav-links__container">
            {links &&
              links.map((link, i) => (
                <a className="nav-link" href={link.href} key={i}>
                  <div className="nav-link__text">{link.title}</div>
                  <div className="nav-link__background" />
                </a>
              ))}
          </nav>

          <div
            className="nav-menu__icon"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <div />
            <div />
          </div>
        </div>
      </div>
    </div>
  );
}

Navbar.defaultProps = {
  links: [
    { title: "Home", href: "#home" },
    { title: "Features", href: "#features" },
    { title: "Services", href: "#services" },
    { title: "Our Goal", href: "#impact" },
    // { title: "Contact", href: "#contact" }
  ]
};

export default Navbar;
