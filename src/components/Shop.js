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
      id: "",
      openOne: false,
      openTwo: false,
      openThree: false
    };
    this.toggleCollapseOne = this.toggleCollapseOne.bind(this);
    this.toggleCollapseTwo = this.toggleCollapseTwo.bind(this);
    this.toggleCollapseThree = this.toggleCollapseThree.bind(this);
  }

  toggleCollapseOne() {
    this.setState({ openOne: !this.state.openOne });
  }

  toggleCollapseTwo() {
    this.setState({ openTwo: !this.state.openTwo });
  }

  toggleCollapseThree() {
    this.setState({ openThree: !this.state.openThree });
  }

  render() {
    const width = window.innerWidth;
    const data = this.context.data.product;
    const recommended = data.filter(
      object => object.category === "recommended"
    );
    const continent = data.filter(
      object =>
        object.continent === "africa" && object.category !== "recommended"
    );
    const season = data.filter(
      object => object.season === "spring" && object.category !== "recommended"
    );
    return (
      <div className="shop mx-lg-4 mx-1">
        <div className="row mx-auto justify-content-between align-items-top mt-2">
          <div className="col px-0">
            <h4 className="ml-3">Recommended for you:</h4>
          </div>
          <div className="col px-0 text-right">
            {recommended.length > 4 ? (
              <button
                className="btn btn-outline-primary mr-3"
                onClick={this.toggleCollapseOne}
              >
                {!this.state.openOne ? "See more" : "See less"}
              </button>
            ) : null}
          </div>
        </div>
        <div>
          <div
            className={
              width < 1200 ? "row mx-auto scrolling-wrapper" : "row mx-auto"
            }
          >
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
                          {!this.context.data.added ? (
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

                        <span to="/favorites" className="text-dark pl-2">
                          {!this.context.data.favorite ? (
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
        <Collapse isOpened={this.state.openOne}>
          <div
            className={
              width < 1200 ? "row mx-auto scrolling-wrapper" : "row mx-auto"
            }
          >
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
                          {!this.context.data.added ? (
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

                        <span to="/favorites" className="text-dark pl-2">
                          {!this.context.data.favorite ? (
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
              .slice(4, recommended.indexOf(recommended.length))}
          </div>
        </Collapse>

        <div className="row mx-auto justify-content-between align-items-top mt-2">
          <div className="col px-0">
            <h4 className="ml-3">Destination: Africa</h4>
          </div>
          <div className="col px-0 text-right">
            {continent.length > 4 ? (
              <button
                className="btn btn-outline-primary mr-3"
                onClick={this.toggleCollapseTwo}
              >
                {!this.state.openTwo ? "See more" : "See less"}
              </button>
            ) : null}
          </div>
        </div>

        <div>
          <div
            className={
              width < 1200 ? "row mx-auto scrolling-wrapper" : "row mx-auto"
            }
          >
            {continent
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
                          {!this.context.data.added ? (
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

                        <span to="/favorites" className="text-dark pl-2">
                          {!this.context.data.favorite ? (
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
        <Collapse isOpened={this.state.openTwo}>
          <div
            className={
              width < 1200 ? "row mx-auto scrolling-wrapper" : "row mx-auto"
            }
          >
            {continent
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
                          {!this.context.data.added ? (
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

                        <span to="/favorites" className="text-dark pl-2">
                          {!this.context.data.favorite ? (
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
              .slice(4, continent.indexOf(continent.length))}
          </div>
        </Collapse>
        <div className="row mx-auto justify-content-between align-items-top mt-2">
          <div className="col px-0">
            <h4 className="ml-3">Next season: Spring</h4>
          </div>
          <div className="col px-0 text-right">
            {season.length > 4 ? (
              <button
                className="btn btn-outline-primary mr-3"
                onClick={this.toggleCollapseThree}
              >
                {!this.state.openThree ? "See more" : "See less"}
              </button>
            ) : null}
          </div>
        </div>

        <div>
          <div
            className={
              width < 1200 ? "row mx-auto scrolling-wrapper" : "row mx-auto"
            }
          >
            {season
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
                          {!this.context.data.added ? (
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

                        <span to="/favorites" className="text-dark pl-2">
                          {!this.context.data.favorite ? (
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
        <Collapse isOpened={this.state.openThree}>
          <div
            className={
              width < 1200 ? "row mx-auto scrolling-wrapper" : "row mx-auto"
            }
          >
            {season
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
                          {!this.context.data.added ? (
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

                        <span to="/favorites" className="text-dark pl-2">
                          {!this.context.data.favorite ? (
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
              .slice(4, season.indexOf(season.length))}
          </div>
        </Collapse>
      </div>
    );
  }
}

export default Shop;
