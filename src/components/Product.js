import React, { Component } from "react";
import "../styles/App.scss";
import { DataContext } from "../dataContext";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faHeart } from "@fortawesome/pro-light-svg-icons";

class Product extends Component {
  static contextType = DataContext;

  constructor(props) {
    super(props);
    this.state = {
      open: "one"
    };
    this.handleThumbOne = this.handleThumbOne.bind(this);
    this.handleThumbTwo = this.handleThumbTwo.bind(this);
    this.handleThumbThree = this.handleThumbThree.bind(this);
  }

  handleThumbOne() {
    this.setState({ open: "one" });
  }
  handleThumbTwo() {
    this.setState({ open: "two" });
  }
  handleThumbThree() {
    this.setState({ open: "three" });
  }

  render() {
    const url = window.location.pathname.split("/").slice(-1)[0];
    const width = window.innerWidth;
    return (
      <div className="product mx-lg-4 mx-1">
        {
          this.context.data.product.map((product, id) => (
            <div className="row mx-auto mb-5 mt-3 h-100" key={id}>
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                <div className="row">
                  <div className="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
                    <img
                      id="thumb"
                      className="product-image"
                      src={
                        this.state.open === "one"
                          ? require(`images/thumbnails/${product.thumb_one}`)
                          : this.state.open === "two"
                          ? require(`images/thumbnails/${product.thumb_two}`)
                          : require(`images/thumbnails/${product.thumb_three}`)
                      }
                      alt="contact"
                    />
                  </div>
                </div>
                <div className="row py-0 pt-3">
                  <div className="col-xl-3 col-lg-3 col-md-4 col-sm-4 col-4">
                    <img
                      className="thumb-image"
                      src={require(`images/thumbnails/${product.thumb_one}`)}
                      alt="contact"
                      onClick={this.handleThumbOne}
                    />
                  </div>
                  <div className="col-xl-3 col-lg-3 col-md-4 col-sm-4 col-4">
                    <img
                      className="thumb-image"
                      src={require(`images/thumbnails/${product.thumb_two}`)}
                      alt="contact"
                      onClick={this.handleThumbTwo}
                    />
                  </div>
                  <div className="col-xl-3 col-lg-3 col-md-4 col-sm-4 col-4">
                    <img
                      className="thumb-image"
                      src={require(`images/thumbnails/${product.thumb_three}`)}
                      alt="contact"
                      onClick={this.handleThumbThree}
                    />
                  </div>
                </div>
              </div>
              <div
                className="col-xl-6 col-lg-6 col-md-6 col-sm-11 col-11 mx-auto"
                style={width <= 768 ? { marginTop: "-3rem" } : null}
              >
                <div className="row">
                  <h2>{product.title}</h2>
                </div>
                <div className="row py-2">
                  <h4>{product.name}</h4>
                </div>
                <div className="row py-2">
                  <h6>{product.town}</h6>
                </div>
                <div className="row py-2">
                  <p>{product.description}</p>
                </div>
                <div className="row py-2">
                  <h6>
                    Price:
                    <span className="text-primary">
                      {" " + this.context.data.store.currency + product.price}
                    </span>
                  </h6>
                </div>
                <div className="row py-2">
                  <div className="col-6 px-0">
                    <div className="input-group mb-3">
                      <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">
                          Quantity:
                        </span>
                      </div>
                      <input
                        type="number"
                        className="form-control"
                        placeholder=""
                        aria-label="Quantity"
                        aria-describedby="basic-addon1"
                      />
                    </div>
                  </div>
                </div>

                <div className="row">
                  <button
                    type="button"
                    className="btn btn-outline-primary mr-3"
                  >
                    <span className="pr-2">
                      <FontAwesomeIcon icon={faShoppingCart} />
                    </span>
                    Add to cart
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-primary mr-3"
                  >
                    <span className="pr-2">
                      <FontAwesomeIcon icon={faHeart} />
                    </span>
                    Add to favorites
                  </button>
                </div>
              </div>
            </div>
          ))[url - 1]
        }
      </div>
    );
  }
}

export default Product;
