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
            <h6>Copenhagen | 1000 | Denmark</h6>
          </div>
          <div className="row justify-content-center py-1">
            <h6 className="my-0">ENJOY by Izabela Turaj</h6>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
