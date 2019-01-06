import React, { Component } from "react";
import "../styles/App.scss";
import { DataContext } from "../dataContext";

class Post extends Component {
  static contextType = DataContext;

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <div className="post mx-lg-4 mx-1">post</div>;
  }
}

export default Post;
