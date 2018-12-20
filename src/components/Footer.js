import React, { Component } from "react";
import "../styles/App.scss";

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
      <footer className="footer">
        <div className="container text-center py-4">
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
          <div className="row mx-auto justify-content-center">
            <h6>San Francisco | CA 94131 | US</h6>
          </div>
          <div className="row justify-content-center py-1">
            <h6 className="my-0">SITE BY JUMPSELLER</h6>
          </div>
          <div className="row justify-content-center py-1">
            <h6 className="my-0">IZABELA TURAJ</h6>
          </div>
          <div className="row justify-content-center py-1">
            <h6 className="my-0">
              TERMS AND CONDITIONS | PRIVACY | LEGAL NOTICE
            </h6>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
