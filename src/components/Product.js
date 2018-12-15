import React, { Component } from "react";
import "../styles/App.scss";

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <div className="product mx-lg-4 mx-1">Product</div>;
  }
}

export default Product;
