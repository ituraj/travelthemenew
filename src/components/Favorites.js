import React, { Component } from "react";
import "../styles/App.scss";
import { Link } from "react-router-dom";
import { DataContext } from "../dataContext";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faHeart,
  faChevronRight
} from "@fortawesome/pro-light-svg-icons";

class Favorites extends Component {
  static contextType = DataContext;

  render() {
    const data = this.context.data.product;
    const recommended = data.filter(
      object => object.category === "recommended"
    );
    return (
      <div className="favorites mx-lg-4 mx-1">
        <div className="row mx-auto justify-content-between align-items-center">
          <h4 className="ml-3 my-2">Recommended for you:</h4>
          <Link
            to="/shop"
            className="btn btn-outline-primary d-none d-sm-block mr-3"
            onClick={() => window.scrollTo(0, 0)}
          >
            See more
          </Link>
        </div>
        <div className="row mx-auto scrolling-wrapper">
          {recommended
            .map((product, id) => (
              <div
                className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12 my-4"
                key={id}
              >
                <div className="card mx-auto h-100">
                  <img
                    className="card-img-top"
                    src={require(`images/${product.main_image}`)}
                    alt="Card cap"
                  />
                  <div className="card-body">
                    <span className="row mx-auto justify-content-between">
                      <h5 className="card-title">
                        <Link
                          to={`/product/${product.id}`}
                          className="product-link"
                          onClick={() => window.scrollTo(0, 0)}
                        >
                          {product.title}
                        </Link>
                      </h5>
                      <h5 className="text-primary">
                        {this.context.data.store.currency + product.price}
                      </h5>
                    </span>
                    <h6 className="card-subtitle mb-2 text-muted">
                      {product.town}
                    </h6>
                    <p className="card-text">{product.description}</p>
                  </div>
                  <div className="row d-flex justify-content-between align-items-center py-2 px-4">
                    <div className="col-8">
                      <Link
                        to={`/product/${product.id}`}
                        className="text-dark d-flex align-items-center explore-link"
                        onClick={() => window.scrollTo(0, 0)}
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
                      <span className="text-dark pr-2">
                        {!this.context.data.product.added ? (
                          <FontAwesomeIcon
                            icon={faShoppingCart}
                            className="cart-icon"
                          />
                        ) : (
                          <FontAwesomeIcon
                            icon={faShoppingCart}
                            className="cart-icon"
                            color="#9cc2da"
                          />
                        )}
                      </span>

                      <span className="text-dark pl-2">
                        {!this.context.data.product.favorite ? (
                          <FontAwesomeIcon
                            icon={faHeart}
                            className="favorite-icon"
                          />
                        ) : (
                          <FontAwesomeIcon
                            icon={faHeart}
                            className="favorite-icon"
                            color="#c55"
                          />
                        )}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))
            .slice(0, 4)}
        </div>
      </div>
    );
  }
}

export default Favorites;
