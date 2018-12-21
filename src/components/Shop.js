import React, { Component } from "react";
import "../styles/App.scss";

import { Link } from "react-router-dom";
import { DataContext } from "../dataContext";

import { Collapse } from "react-collapse";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faHeart,
  faChevronRight
} from "@fortawesome/pro-light-svg-icons";

class Shop extends Component {
  static contextType = DataContext;

  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
    this.toggleCollapse = this.toggleCollapse.bind(this);
  }

  toggleCollapse() {
    this.setState({ isOpened: !this.state.isOpened });
  }

  render() {
    const width = window.innerWidth;
    return (
      <div className="shop mx-lg-4 mx-1">
        <div className="row mx-auto justify-content-between align-items-center">
          <h4 className="ml-3 my-3">Recommended for you:</h4>
          {this.context.data.featured.length > 4 ? (
            <button
              className="btn btn-outline-primary mr-3"
              onClick={this.toggleCollapse}
            >
              See more
            </button>
          ) : null}
        </div>
        <div>
          <div
            className={
              width < 1008 ? "row mx-auto scrolling-wrapper" : "row mx-auto"
            }
          >
            {this.context.data.featured
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
                        <h5 className="card-title">{product.title}</h5>
                        <h5 className="text-primary font-weight-bold">
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
                        <span className="text-dark pr-2">
                          {!this.props.added ? (
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

                        <span
                          to="/favorites"
                          className="text-dark pl-2"
                          onClick={this.props.addToFavorites}
                        >
                          {!this.props.favorite ? (
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
        <Collapse isOpened={this.state.isOpened}>
          <div
            className={
              width < 1008 ? "row mx-auto scrolling-wrapper" : "row mx-auto"
            }
          >
            {this.context.data.featured
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
                        <h5 className="card-title">{product.title}</h5>
                        <h5 className="text-primary font-weight-bold">
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
                        <span className="text-dark pr-2">
                          {!this.props.added ? (
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

                        <span
                          to="/favorites"
                          className="text-dark pl-2"
                          onClick={this.props.addToFavorites}
                        >
                          {!this.props.favorite ? (
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
              .slice(
                4,
                this.context.data.featured.indexOf(
                  this.context.data.featured.length
                )
              )}
          </div>
        </Collapse>

        <div className="row mx-auto justify-content-between align-items-center">
          <h4 className="ml-3 my-3">Destination: Africa</h4>
          {this.context.data.africa.length > 4 ? (
            <button
              className="btn btn-outline-primary mr-3"
              onClick={this.toggleCollapse}
            >
              See more
            </button>
          ) : null}
        </div>

        <div>
          <div
            className={
              width < 1008 ? "row mx-auto scrolling-wrapper" : "row mx-auto"
            }
          >
            {this.context.data.africa
              .map((product, id) => (
                <div
                  className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12 my-4"
                  key={id}
                >
                  <div className="card mx-auto h-100">
                    <img
                      className="card-img-top"
                      src={require(`images/africa/${product.main_image}`)}
                      alt="Card cap"
                    />
                    <div className="card-body">
                      <span className="row mx-auto justify-content-between">
                        <h5 className="card-title">{product.title}</h5>
                        <h5 className="text-primary font-weight-bold">
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
                        <span className="text-dark pr-2">
                          {!this.props.added ? (
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

                        <span
                          to="/favorites"
                          className="text-dark pl-2"
                          onClick={this.props.addToFavorites}
                        >
                          {!this.props.favorite ? (
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
        <Collapse isOpened={this.state.isOpened}>
          <div
            className={
              width < 1008 ? "row mx-auto scrolling-wrapper" : "row mx-auto"
            }
          >
            {this.context.data.africa
              .map((product, id) => (
                <div
                  className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12 my-4"
                  key={id}
                >
                  <div className="card mx-auto h-100">
                    <img
                      className="card-img-top"
                      src={require(`images/africa/${product.main_image}`)}
                      alt="Card cap"
                    />
                    <div className="card-body">
                      <span className="row mx-auto justify-content-between">
                        <h5 className="card-title">{product.title}</h5>
                        <h5 className="text-primary font-weight-bold">
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
                        <span className="text-dark pr-2">
                          {!this.props.added ? (
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

                        <span
                          to="/favorites"
                          className="text-dark pl-2"
                          onClick={this.props.addToFavorites}
                        >
                          {!this.props.favorite ? (
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
              .slice(
                4,
                this.context.data.africa.indexOf(
                  this.context.data.africa.length
                )
              )}
          </div>
        </Collapse>
        <div className="row mx-auto justify-content-between align-items-center">
          <h4 className="ml-3 my-3">Next season:</h4>
          {this.context.data.featured.length > 4 ? (
            <button
              className="btn btn-outline-primary mr-3"
              onClick={this.toggleCollapse}
            >
              See more
            </button>
          ) : null}
        </div>

        <div>
          <div
            className={
              width < 1008 ? "row mx-auto scrolling-wrapper" : "row mx-auto"
            }
          >
            {this.context.data.spring
              .map((product, id) => (
                <div
                  className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12 my-4"
                  key={id}
                >
                  <div className="card mx-auto h-100">
                    <img
                      className="card-img-top"
                      src={require(`images/spring/${product.main_image}`)}
                      alt="Card cap"
                    />
                    <div className="card-body">
                      <span className="row mx-auto justify-content-between">
                        <h5 className="card-title">{product.title}</h5>
                        <h5 className="text-primary font-weight-bold">
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
                        <span className="text-dark pr-2">
                          {!this.props.added ? (
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

                        <span
                          to="/favorites"
                          className="text-dark pl-2"
                          onClick={this.props.addToFavorites}
                        >
                          {!this.props.favorite ? (
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
        <Collapse isOpened={this.state.isOpened}>
          <div
            className={
              width < 1008 ? "row mx-auto scrolling-wrapper" : "row mx-auto"
            }
          >
            {this.context.data.spring
              .map((product, id) => (
                <div
                  className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12 my-4"
                  key={id}
                >
                  <div className="card mx-auto h-100">
                    <img
                      className="card-img-top"
                      src={require(`images/spring/${product.main_image}`)}
                      alt="Card cap"
                    />
                    <div className="card-body">
                      <span className="row mx-auto justify-content-between">
                        <h5 className="card-title">{product.title}</h5>
                        <h5 className="text-primary font-weight-bold">
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
                        <span className="text-dark pr-2">
                          {!this.props.added ? (
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

                        <span
                          to="/favorites"
                          className="text-dark pl-2"
                          onClick={this.props.addToFavorites}
                        >
                          {!this.props.favorite ? (
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
              .slice(
                4,
                this.context.data.spring.indexOf(
                  this.context.data.spring.length
                )
              )}
          </div>
        </Collapse>
      </div>
    );
  }
}

export default Shop;
