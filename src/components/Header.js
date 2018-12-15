import React, { Component } from "react";
import "../styles/App.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faSquare } from "@fortawesome/free-regular-svg-icons";

import { Link } from "react-router-dom";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  mobileMenuToggle() {
    var navbarMobile = document.getElementById("navbarMobile");
    return navbarMobile.classList.add("show");
  }
  render() {
    return (
      <div className="header">
        <nav className="navbar fixed-top navbar-expand-md bg-white">
          <Link to="/" className="navbar-brand">
            Logo
          </Link>
          <button
            className="navbar-toggler border-0"
            type="button"
            data-toggle="collapse"
            data-target="#navbarMobile"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={this.mobileMenuToggle}
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className="collapse navbar-collapse justify-content-between"
            id="navbarMobile"
          >
            <div className="navbar-nav">
              <Link to="/shop" className="nav-item nav-link">
                Shop
              </Link>
              <Link to="/about" className="nav-item nav-link">
                About
              </Link>
              <Link to="/blog" className="nav-item nav-link">
                Blog
              </Link>
            </div>
            <div className="navbar-nav">
              <Link to="/login" className="nav-item nav-link">
                Login/Register
              </Link>
              <Link to="/cart" className="nav-item nav-link">
                <FontAwesomeIcon icon={faSquare} />
              </Link>
              <Link to="/favorites" className="nav-item nav-link">
                <FontAwesomeIcon icon={faHeart} />
              </Link>
            </div>
          </div>
        </nav>
        <div className="container-fluid px-0">
          <div className="header-test" />
        </div>
      </div>
    );
  }
}

export default Header;
