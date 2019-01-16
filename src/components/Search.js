import React, { Component } from "react";
import "../styles/App.scss";
import Select from "react-select";
import { Link } from "react-router-dom";
import { DataContext } from "../dataContext";
import SeasonFilter from "./SeasonFilter";
import LandscapeFilter from "./LandscapeFilter";
import ContinentFilter from "./ContinentFilter";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faHeart,
  faChevronRight
} from "@fortawesome/pro-light-svg-icons";

class Search extends Component {
  static contextType = DataContext;

  constructor(props) {
    super(props);
    this.state = {
      selectedSeason: null,
      selectedLandscape: null,
      selectedContinent: null,
      searching: false,
      value: "",
      searchString: "",
      products: []
    };
    this.handleSearch = this.handleSearch.bind(this);
    this.handleSeasonSearch = this.handleSeasonSearch.bind(this);
    this.handleLandscapeSearch = this.handleLandscapeSearch.bind(this);
    this.handleContinentSearch = this.handleContinentSearch.bind(this);
    this.clearFilters = this.clearFilters.bind(this);
  }

  componentDidMount() {
    this.setState({
      products: this.context.data.product
    });
    this.refs.search.focus();
  }

  handleSearch() {
    if (this.refs.search.value === "") {
      this.setState({
        searching: false,
        searchString: ""
      });
    } else {
      this.setState({
        searching: true,
        searchString: this.refs.search.value
      });
    }
  }

  handleSeasonSearch(selectedSeason) {
    this.setState({ searching: true, selectedSeason });
  }

  handleLandscapeSearch(selectedLandscape) {
    this.setState({ searching: true, selectedLandscape });
  }

  handleContinentSearch(selectedContinent) {
    this.setState({ searching: true, selectedContinent });
  }

  clearFilters() {
    this.setState({
      selectedSeason: null,
      selectedLandscape: null,
      selectedContinent: null,
      searching: false
    });
  }

  render() {
    let search = this.state.searchString.trim().toLowerCase();
    let products = this.state.products;

    if (search.length > 0) {
      products = products.filter(function(product) {
        return product.tags.toLowerCase().match(search);
      });
    }

    var seasonOptions = [
      { label: "Spring", value: "spring" },
      { label: "Summer", value: "summer" },
      { label: "Fall", value: "fall" },
      { label: "Winter", value: "winter" }
    ];

    var landscapeOptions = [
      { label: "City", value: "city" },
      { label: "Country", value: "country" },
      { label: "Sea", value: "sea" },
      { label: "Mountains", value: "mountains" }
    ];

    var continentOptions = [
      { label: "Africa", value: "africa" },
      { label: "Asia", value: "asia" },
      { label: "Australia", value: "australia" },
      { label: "Europe", value: "europe" },
      { label: "North America", value: "north-america" },
      { label: "South America", value: "south-america" }
    ];

    const { selectedSeason } = this.state;
    const { selectedLandscape } = this.state;
    const { selectedContinent } = this.state;

    return (
      <div className="search mx-lg-5">
        <div className="row mx-0 justify-content-md-center search-container">
          <div className="mt-2 pt-2 col-xl-12 col-lg-12 col-md-12 col-12">
            <div className="row mb-3 mx-lg-4 mx-1">
              <div className="col-xl-3 col-lg-12 col-md-12 col-12 pr-0 pl-0 mb-3  mx-0">
                <div
                  className="input-group-addon d-flex d-lg-none"
                  style={{ height: "100%" }}
                >
                  <div
                    className="input-group-prepend"
                    style={{
                      border: "0",
                      height: "38px",
                      zIndex: "4",
                      position: "absolute",
                      borderRadius: "0"
                    }}
                  />
                  <input
                    id="promotionInputMobile"
                    type="text"
                    style={{
                      borderRadius: "0.25rem",
                      fontSize: "0.875rem"
                    }}
                    className="form-control"
                    placeholder="Explore..."
                    onChange={this.handleSearch}
                    value={this.state.searchString}
                    ref="search"
                  />
                </div>
                <div
                  className="input-group-addon d-none d-lg-flex"
                  style={{ height: "100%" }}
                >
                  <input
                    id="promotionInput"
                    type="text"
                    style={{ fontSize: "0.875rem" }}
                    className="form-control"
                    placeholder="Explore..."
                    onChange={this.handleSearch}
                    value={this.state.searchString}
                    ref="search"
                  />
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-12 col-12 pr-0 pl-0 mb-3 mb-lg-0">
                <Select
                  classname="row mx-0 px-0 w-100 rounded-0 search-filter"
                  value={selectedSeason}
                  onChange={this.handleSeasonSearch}
                  closeOnSelect={true}
                  clearable={false}
                  searchable={false}
                  removeSelected={false}
                  options={seasonOptions}
                  placeholder="Seasons"
                  theme={theme => ({
                    ...theme,
                    boxShadow:
                      "0 1px 1px rgba(0, 0, 0, 0.025) inset, 0 0 8px #ced4da",
                    outline: "0 none",
                    colors: {
                      ...theme.colors,
                      primary: "#ced4da",
                      primary25: "#ced4da",
                      primary50: "#9cc2da"
                    }
                  })}
                />
              </div>
              <div className="col-xl-3 col-lg-4 col-md-12 col-12 pr-0 pl-0 mb-3 mb-lg-0">
                <Select
                  classname="row mx-0 px-0 w-100 search-filter"
                  value={selectedLandscape}
                  onChange={this.handleLandscapeSearch}
                  closeOnSelect={true}
                  clearable={false}
                  searchable={false}
                  removeSelected={false}
                  options={landscapeOptions}
                  placeholder="Landscapes"
                  theme={theme => ({
                    ...theme,
                    boxShadow:
                      "0 1px 1px rgba(0, 0, 0, 0.025) inset, 0 0 8px #ced4da",
                    outline: "0 none",
                    colors: {
                      ...theme.colors,
                      primary: "#ced4da",
                      primary25: "#ced4da",
                      primary50: "#9cc2da"
                    }
                  })}
                />
              </div>
              <div className="col-xl-3 col-lg-4 col-md-12 col-12 pr-0 pl-0 mb-3 mb-lg-0">
                <Select
                  classname="row mx-0 px-0 w-100 search-filter"
                  value={selectedContinent}
                  onChange={this.handleContinentSearch}
                  closeOnSelect={true}
                  clearable={false}
                  searchable={false}
                  removeSelected={false}
                  options={continentOptions}
                  placeholder="Continents"
                  theme={theme => ({
                    ...theme,
                    boxShadow:
                      "0 1px 1px rgba(0, 0, 0, 0.025) inset, 0 0 8px #ced4da",
                    outline: "0 none",
                    colors: {
                      ...theme.colors,
                      primary: "#ced4da",
                      primary25: "#ced4da",
                      primary50: "#9cc2da"
                    }
                  })}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="search-results mx-md-4 mx-1">
          {this.state.searching && this.state.searchString ? (
            <div className="row mx-3 justify-content-between">
              <div className="col text-primary text-left px-0">
                {products.length === 1 ? (
                  <p>{products.length} adventure</p>
                ) : (
                  <p>{products.length} adventures</p>
                )}
              </div>
              <div className="col text-primary text-right px-0">
                <span onClick={this.clearFilters}>
                  <p>Clear filters</p>
                </span>
              </div>
            </div>
          ) : this.state.searching ? (
            <div className="row mx-3 justify-content-between">
              {/* <div className="col text-primary text-left px-0">
                {selectedSeason.length === 1 ? (
                  <p>{selectedSeason.length} adventure</p>
                ) : (
                  <p>{selectedSeason.length} adventures</p>
                )}
              </div> */}
              <div className="col text-primary text-right px-0">
                <span onClick={this.clearFilters}>
                  <p>Clear filters</p>
                </span>
              </div>
            </div>
          ) : null}
          <div className="row mx-auto scrolling-wrapper">
            {this.state.searching && this.state.searchString !== "" ? (
              <React.Fragment>
                {products.map((product, id) => (
                  <div
                    className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12 mb-3"
                    key={id}
                  >
                    <div className="card mx-auto h-100">
                      <img
                        className="card-img-top"
                        src={require(`images/${product.main_image}`)}
                        alt="Card cap"
                      />
                      <div className="card-body">
                        <span className="row mx-auto justify-content-between">
                          <h5 className="card-title">
                            <Link
                              to={`/product/${product.id}`}
                              className="product-link"
                              onClick={() => window.scrollTo(0, 0)}
                            >
                              {product.title}
                            </Link>
                          </h5>
                          <h5 className="text-primary">
                            {this.context.data.store.currency + product.price}
                          </h5>
                        </span>
                        <h6 className="card-subtitle mb-2 text-muted">
                          {product.town}
                        </h6>
                        <p className="card-text">{product.description}</p>
                      </div>
                      <div className="row d-flex justify-content-between align-items-center py-2 px-4">
                        <div className="col-8">
                          <Link
                            to={`/product/${product.id}`}
                            className="text-dark d-flex align-items-center explore-link"
                            onClick={() => window.scrollTo(0, 0)}
                          >
                            <span className="pr-0 pl-0">Explore</span>
                            <FontAwesomeIcon
                              icon={faChevronRight}
                              size="2x"
                              className="pl-2"
                            />
                          </Link>
                        </div>
                        <div className="col-4 text-right text-nowrap">
                          <span className="text-dark pr-2">
                            {!this.props.added ? (
                              <FontAwesomeIcon
                                icon={faShoppingCart}
                                className="cart-icon"
                              />
                            ) : (
                              <FontAwesomeIcon
                                icon={faShoppingCart}
                                className="cart-icon"
                                color="#9cc2da"
                              />
                            )}
                          </span>

                          <span
                            to="/favorites"
                            className="text-dark pl-2"
                            onClick={this.props.addToFavorites}
                          >
                            {!this.props.favorite ? (
                              <FontAwesomeIcon
                                icon={faHeart}
                                className="favorite-icon"
                              />
                            ) : (
                              <FontAwesomeIcon
                                icon={faHeart}
                                className="favorite-icon"
                                color="#c55"
                              />
                            )}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </React.Fragment>
            ) : null}
            {this.state.searching && this.state.selectedSeason ? (
              <SeasonFilter selectedSeason={this.state.selectedSeason} />
            ) : null}
            {this.state.searching && this.state.selectedLandscape ? (
              <LandscapeFilter
                selectedLandscape={this.state.selectedLandscape}
              />
            ) : null}
            {this.state.searching && this.state.selectedContinent ? (
              <ContinentFilter
                selectedContinent={this.state.selectedContinent}
              />
            ) : null}
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
