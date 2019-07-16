import React, { Component } from "react";
import "../styles/App.scss";

import { DataContext } from "../dataContext";

import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/pro-light-svg-icons";

class Blog extends Component {
  static contextType = DataContext;
  render() {
    let url = window.location.pathname;
    const width = window.innerWidth;
    if (url === "/travelthemenew/blog") {
      return (
        <div className="blog mx-lg-4 mx-1 px-3">
          {this.context.data.blog.map((blog, id) => (
            <div key={id}>
              <div className="row">
                <h4 className="col-12 mb-4">{blog.title}</h4>
              </div>
              <div className="row blog-image-wrapper">
                <img
                  src={require(`images/${blog.image}`)}
                  alt="test"
                  className="col-12 blog-image"
                />
              </div>
              <div className="row">
                <div
                  className={
                    width >= 768
                      ? "col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 my-4"
                      : "col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 mt-3"
                  }
                >
                  <p>{blog.paragraph_one}</p>
                </div>
                <div
                  className={
                    width >= 768
                      ? "col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 px-4 my-4"
                      : "col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12"
                  }
                >
                  <p>{blog.paragraph_two}</p>
                </div>
                <div
                  className={
                    width >= 768
                      ? "col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 my-4"
                      : "col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 mb-3"
                  }
                >
                  <div className="row mx-0">
                    <p>{blog.paragraph_three}</p>
                  </div>
                  <div className="row mx-0">
                    <Link
                      to="/blog"
                      className="text-dark d-flex align-items-center"
                    >
                      <span>Read more</span>
                      <FontAwesomeIcon
                        icon={faChevronRight}
                        size="2x"
                        className="pl-2"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      );
    } else {
      return (
        <div className="blog mx-lg-4 mx-1 px-3">
          {this.context.data.blog
            .map((blog, id) => (
              <div key={id}>
                <div className="row">
                  <h4 className="col-12 my-2">{blog.title}</h4>
                </div>
                <div className="row blog-image-wrapper my-4">
                  <img
                    src={require(`images/${blog.image}`)}
                    alt="test"
                    className="col-12 blog-image"
                  />
                </div>
                <div className="row">
                  <div
                    className={
                      width >= 768
                        ? "col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 my-4"
                        : "col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12"
                    }
                  >
                    <p>{blog.paragraph_one}</p>
                  </div>
                  <div
                    className={
                      width >= 768
                        ? "col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 px-4 my-4"
                        : "col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12"
                    }
                  >
                    <p>{blog.paragraph_two}</p>
                  </div>
                  <div
                    className={
                      width >= 768
                        ? "col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 my-4"
                        : "col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12"
                    }
                  >
                    <div className="row mx-0">
                      <p>{blog.paragraph_three}</p>
                    </div>
                    <div className="row mx-0">
                      <Link
                        to="/blog"
                        className="text-dark d-flex align-items-center"
                        onClick={() => window.scrollTo(0, 0)}
                      >
                        <span>Read more</span>
                        <FontAwesomeIcon
                          icon={faChevronRight}
                          size="2x"
                          className="pl-2"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))
            .slice(0, 1)}
        </div>
      );
    }
  }
}

export default Blog;
