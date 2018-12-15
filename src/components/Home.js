import React, { Component } from "react";
import "../styles/App.scss";
import mainImage from "../images/test.png";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="home mx-lg-4 mx-1">
        <div className="row mx-auto">
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 my-4">
            <img src={mainImage} alt="test" className="home-image" />
          </div>
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 my-4">
            <h1 className="mt-0">dream</h1>
            <p>
              Whimsical simple theme organized clean website wanderlust
              adventure WordPress. Design organized whimsical fun clean,
              organized clean traveling website theme website pretty WordPress
              traveling. Colorful organized traveling, WordPress organized
              travelblogger traveler pretty theme pretty darn.
            </p>
            <Link to="/shop" className="text-dark d-flex align-items-center">
              <span>Explore</span>
              <FontAwesomeIcon
                icon={faChevronRight}
                size="2x"
                className="pl-2"
              />
            </Link>
          </div>
        </div>
        <div className="row mx-auto">
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 order-md-2 my-4">
            <img src={mainImage} alt="test" className="home-image" />
          </div>
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 order-md-1 my-4">
            <h1 className="mt-0">plan</h1>
            <p>
              Whimsical simple theme organized clean website wanderlust
              adventure WordPress. Design organized whimsical fun clean,
              organized clean traveling website theme website pretty WordPress
              traveling. Colorful organized traveling, WordPress organized
              travelblogger traveler pretty theme pretty darn.
            </p>
            <Link to="/shop" className="text-dark d-flex align-items-center">
              <span>Explore</span>
              <FontAwesomeIcon
                icon={faChevronRight}
                size="2x"
                className="pl-2"
              />
            </Link>
          </div>
        </div>
        <div className="row mx-auto my-2">
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 my-4">
            <img src={mainImage} alt="test" className="home-image" />
          </div>
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 my-4">
            <h1 className="mt-0">book</h1>
            <p>
              Whimsical simple theme organized clean website wanderlust
              adventure WordPress. Design organized whimsical fun clean,
              organized clean traveling website theme website pretty WordPress
              traveling. Colorful organized traveling, WordPress organized
              travelblogger traveler pretty theme pretty darn.
            </p>
            <Link to="/shop" className="text-dark d-flex align-items-center">
              <span>Explore</span>
              <FontAwesomeIcon
                icon={faChevronRight}
                size="2x"
                className="pl-2"
              />
            </Link>
          </div>
        </div>
        <div className="row mx-auto my-2">
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 order-md-2 my-4">
            <img src={mainImage} alt="test" className="home-image" />
          </div>
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 order-md-1 my-4">
            <h1 className="mt-0">enjoy</h1>
            <p>
              Whimsical simple theme organized clean website wanderlust
              adventure WordPress. Design organized whimsical fun clean,
              organized clean traveling website theme website pretty WordPress
              traveling. Colorful organized traveling, WordPress organized
              travelblogger traveler pretty theme pretty darn.
            </p>
            <Link to="/shop" className="text-dark d-flex align-items-center">
              <span>Explore</span>
              <FontAwesomeIcon
                icon={faChevronRight}
                size="2x"
                className="pl-2"
              />
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
