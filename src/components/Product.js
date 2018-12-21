import React, { Component } from "react";
import "../styles/App.scss";
import { DataContext } from "../dataContext";

import productImage from "./../images/africa/africa7.jpg";

class Product extends Component {
  static contextType = DataContext;

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="product mx-lg-4 mx-1">
        {this.context.data.featured.map((product, id) => (
          <div className="row mx-auto" key={id}>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="row">
                <div className="col">
                  <img
                    className="product-image"
                    src={productImage}
                    alt="contact"
                  />
                </div>
              </div>
              <div className="row">
                <div className="col pr-0">
                  <img
                    className="product-image"
                    src={productImage}
                    alt="contact"
                  />
                </div>
                <div className="col px-0">
                  <img
                    className="product-image"
                    src={productImage}
                    alt="contact"
                  />
                </div>
                <div className="col pl-0">
                  <img
                    className="product-image"
                    src={productImage}
                    alt="contact"
                  />
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
              <h2>{product.title}</h2>
              <h4>{product.name}</h4>
              <h6>{product.town}</h6>
              <p>{product.description}</p>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Product;
