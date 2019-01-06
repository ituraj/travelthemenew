import React, { Component } from "react";
import "../styles/App.scss";
import { DataContext } from "../dataContext";

import productImage from "./../images/africa/africa7.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faHeart } from "@fortawesome/pro-light-svg-icons";

class Product extends Component {
  static contextType = DataContext;

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const n = 0;
    // const url = window.location.pathname.split("/").slice(-1)[0];
    return (
      <div className="product mx-lg-4 mx-1">
        {
          this.context.data.featured.map((product, id) => (
            <div className="row mx-auto mb-5 h-100" key={id}>
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                <div className="row">
                  <div className="col-9">
                    <img
                      className="product-image"
                      src={require(`images/thumbnails/${product.thumb_one}`)}
                      alt="contact"
                    />
                  </div>
                </div>
                <div className="row pt-3">
                  <div className="col-3 pr-0">
                    <img
                      className="thumb-image"
                      src={productImage}
                      alt="contact"
                    />
                  </div>
                  <div className="col-3 px-0">
                    <img
                      className="thumb-image"
                      src={productImage}
                      alt="contact"
                    />
                  </div>
                  <div className="col-3 pl-0">
                    <img
                      className="thumb-image"
                      src={productImage}
                      alt="contact"
                    />
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
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
          ))[n]
        }
      </div>
    );
  }
}

export default Product;
