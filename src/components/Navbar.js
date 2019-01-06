import React, { Component } from "react";
import "../styles/App.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faHeart,
  faMap,
  faBars
} from "@fortawesome/pro-light-svg-icons";
// import { Collapse } from "react-collapse";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

class Navbar extends Component {
  static contextTypes = {
    router: PropTypes.object
  };

  constructor(props) {
    super(props);
    this.state = {
      isOpened: false
    };
    // this.toggleCollapse = this.toggleCollapse.bind(this);
  }

  // toggleCollapse() {
  //   this.setState({ isOpened: !this.state.isOpened });
  // }

  render() {
    const width = window.innerWidth;
    if (width >= 768) {
      return (
        <div className="header">
          <nav className="navbar fixed-top navbar-expand-md bg-white shadow-sm">
            <Link to="/" className="navbar-brand text-dark">
              <FontAwesomeIcon icon={faMap} style={{ color: "#9cc2da" }} />
              <span className="pl-2 text-primary">ENJOY</span>
            </Link>
            <div
              className="collapse navbar-collapse justify-content-between"
              id="navbarMobile"
            >
              <div className="navbar-nav">
                <Link to="/shop" className="nav-item nav-link text-dark">
                  Destinations
                </Link>
                <Link to="/contact" className="nav-item nav-link text-dark">
                  Contact
                </Link>
                <Link to="/blog" className="nav-item nav-link text-dark">
                  Blog
                </Link>
              </div>
              <div className="navbar-nav">
                {this.props.loggedIn === true ? (
                  <Link
                    to={this.context.router.history.goBack}
                    onClick={this.props.handleLogOut}
                    className="nav-item nav-link text-dark"
                  >
                    Log Out
                  </Link>
                ) : (
                  <Link to="/login" className="nav-item nav-link text-dark">
                    <span>Log In | Register</span>
                  </Link>
                )}

                <Link to="/cart" className="nav-item nav-link text-dark">
                  <FontAwesomeIcon
                    icon={faShoppingCart}
                    className={
                      this.state.added ? "cart-icon primary" : "cart-icon"
                    }
                  />
                </Link>
                <Link to="/favorites" className="nav-item nav-link text-dark">
                  <FontAwesomeIcon
                    icon={faHeart}
                    className={
                      this.state.favorite
                        ? "favorite-icon danger"
                        : "favorite-icon"
                    }
                  />
                </Link>
              </div>
            </div>
          </nav>
          <div className="container-fluid px-0">
            <div className="header-test" />
          </div>
        </div>
      );
    } else {
      return (
        <div className="header">
          <div className="row justify-content-between bg-light shadow-sm mobile-nav">
            <div className="col ml-3 py-3">
              <Link to="/">
                <FontAwesomeIcon icon={faMap} style={{ color: "#9cc2da" }} />
                <span className="pl-2 text-primary">ENJOY</span>
              </Link>
            </div>
            <div className="col text-right align-self-center py-1 pr-4">
              {" "}
              <FontAwesomeIcon icon={faBars} />
            </div>
          </div>
          <div className="container-fluid px-0">
            <div className="header-test" />
          </div>
        </div>
      );
    }
  }
}

export default Navbar;
