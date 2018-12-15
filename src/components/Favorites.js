import React, { Component } from "react";
import "../styles/App.scss";
import Shop from "./Shop";

class Favorites extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="favorites">
        <span className="mx-lg-4 pl-3 mx-1">
          Display here only products with a heart.
        </span>
        <Shop />
      </div>
    );
  }
}

export default Favorites;
