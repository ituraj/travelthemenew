import React, { Component } from "react";
import "../styles/App.scss";

import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faPinterest,
  faYoutube
} from "@fortawesome/free-brands-svg-icons";

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <footer className="footer shadow-sm">
        <div className="container text-center py-4">
          <div className="row mx-auto justify-content-center">
            <Link to="/" className="nav-item nav-link text-dark">
              Home
            </Link>

            <Link to="/shop" className="nav-item nav-link text-dark">
              Shop
            </Link>
            <Link to="/about" className="nav-item nav-link text-dark">
              About
            </Link>
            <Link to="/blog" className="nav-item nav-link text-dark">
              Blog
            </Link>
          </div>
          <div className="row mx-auto justify-content-center">
            <a
              href="https://www.facebook.com"
              className="nav-item nav-link text-dark"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a
              href="https://www.instagram.com"
              className="nav-item nav-link text-dark"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a
              href="https://pinterest.com"
              className="nav-item nav-link text-dark"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faPinterest} />
            </a>
            <a
              href="https://www.youtube.com"
              className="nav-item nav-link text-dark"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faYoutube} />
            </a>
          </div>
          <div className="row justify-content-center py-1">
            <small>SITE BY JUMPSELLER</small>
          </div>
          <div className="row justify-content-center py-1">
            <small>IZABELA TURAJ</small>
          </div>
          <div className="row justify-content-center py-1">
            <small>TERMS AND CONDITIONS | PRIVACY | LEGAL NOTICE</small>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
