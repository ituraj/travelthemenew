import React, { Component } from "react";
import "../styles/App.scss";

import { Link } from "react-router-dom";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faShoppingCart,
//   faHeart,
//   faChevronRight
// } from "@fortawesome/pro-light-svg-icons";

class Category extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="favorites mx-lg-4 mx-1">
        <div className="row mx-auto justify-content-between align-items-center">
          <h4 className="ml-3 mb-0">Recommended for you:</h4>
          <Link
            to="/shop"
            className="btn btn-outline-primary d-none d-sm-block mr-3"
          >
            See more
          </Link>
        </div>
        <div className="row mx-auto">
          {/* {this.props.product.map(product => (
            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12 my-4">
              <div className="card mx-auto">
                <img
                  className="card-img-top"
                  src={require(`images/${product.main_image}`)}
                  alt="Card cap"
                />
                <div className="card-body">
                  <h5 className="card-title">{product.title}</h5>
                  <h6 className="card-subtitle mb-2 text-muted">
                    {product.town}
                  </h6>
                  <p className="card-text">{product.description}</p>
                </div>
                <div className="row d-flex justify-content-between align-items-center py-2 px-4">
                  <div className="col-8">
                    <Link
                      to="/product"
                      className="text-dark d-flex align-items-center"
                    >
                      <span className="pr-0 pl-0">Explore</span>
                      <FontAwesomeIcon
                        icon={faChevronRight}
                        size="2x"
                        className="pl-2"
                      />
                    </Link>
                  </div>
                  <div className="col-4 text-right text-nowrap">
                    <Link to="/cart" className="text-dark pr-2">
                      <FontAwesomeIcon icon={faShoppingCart} />
                    </Link>

                    <Link to="/favorites" className="text-dark pl-2">
                      <FontAwesomeIcon icon={faHeart} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))} */}
        </div>
      </div>
    );
  }
}

export default Category;
