import React, { Component } from "react";
import "../styles/App.scss";
import { DataContext } from "../dataContext";

class Post extends Component {
  static contextType = DataContext;

  render() {
    return <div className="post mx-lg-4 mx-1">post</div>;
  }
}

export default Post;
