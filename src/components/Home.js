import React, { Component } from "react";
import "../styles/App.scss";

import Favorites from "./Favorites";
import Blog from "./Blog";

import denmarkImage from "../images/denmark.jpg";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/pro-light-svg-icons";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="home my-4">
        <div className="row mx-lg-4 mx-1">
          <h4 className="ml-3 mt-3">Destination of the month:</h4>
        </div>
        <div className="row mx-lg-4 mx-1">
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 my-4">
            <img src={denmarkImage} alt="test" className="destination-image" />
          </div>
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 my-4">
            <h1 className="mt-0">Denmark</h1>
            <p>
              With Copenhagen being top destination for travel in 2019 Denmark
              has received the attention it deserves. However there is much more
              to this country than the capital. Check it yourself!
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
        <Favorites />
        <Blog />
      </div>
    );
  }
}

export default Home;
