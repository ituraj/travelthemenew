import React, { Component } from "react";
import "../styles/App.scss";

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="about mx-lg-4 mx-1">
        <div className="bg-danger">About</div>
      </div>
    );
  }
}

export default About;
