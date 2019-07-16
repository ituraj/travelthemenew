import React, { Component } from "react";
import "../styles/App.scss";
import { DataContext } from "../dataContext";

import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/pro-light-svg-icons";

class Favorites extends Component {
  static contextType = DataContext;

  render() {
    return (
      <div className="featured mx-lg-4 mx-1">
        {this.context.data.product.map((product, id) => (
          <div key={id}>
            {product.featured && product.created_at === "january" ? (
              <div>
                <div className="row mx-auto">
                  <h4 className="my-2 ml-3">Destination of the month:</h4>
                </div>
                <div className="row mx-auto">
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 my-4">
                    <img
                      className="card-img-top"
                      src={require(`images/${product.main_image}`)}
                      alt="Card cap"
                    />
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 my-4">
                    <span>
                      <h1 className="my-0">
                        <Link
                          to={`/product/${product.id}`}
                          className="product-link"
                          onClick={() => window.scrollTo(0, 0)}
                        >
                          {product.title}
                        </Link>
                      </h1>
                      <h6 className="mb-4 text-muted">{product.country}</h6>
                    </span>

                    <p>{product.description}</p>
                    <Link
                      to={`/product/${product.id}`}
                      className="text-dark d-flex align-items-center explore-link"
                      onClick={() => window.scrollTo(0, 0)}
                    >
                      <span>Explore</span>
                      <FontAwesomeIcon
                        icon={faChevronRight}
                        size="2x"
                        className="pl-2"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        ))}
      </div>
    );
  }
}

export default Favorites;
