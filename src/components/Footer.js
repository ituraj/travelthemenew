import React, { Component } from "react";
import "../styles/App.scss";

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <footer className="footer">
        <div className="container text-center">
          <span className="text-muted">Place sticky footer content here.</span>
        </div>
      </footer>
    );
  }
}

export default Footer;
