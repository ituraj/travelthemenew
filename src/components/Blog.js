import React, { Component } from "react";
import "../styles/App.scss";

class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="blog mx-lg-4 mx-1">
        <div className="bg-success">blog</div>
      </div>
    );
  }
}

export default Blog;
