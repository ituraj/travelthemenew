import React, { Component } from "react";
import "../styles/App.scss";
import Select from "react-select";

import Favorites from "./Favorites";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    var seasonOptions = [
      { label: "Spring", value: "spring" },
      { label: "Summer", value: "summer" },
      { label: "Fall", value: "fall" },
      { label: "Winter", value: "winter" }
    ];

    var activityOptions = [
      { label: "Kayaking", value: "kayaking" },
      { label: "Diving", value: "diving" },
      { label: "Biking", value: "biking" }
    ];

    var continentOptions = [
      { label: "Africa", value: "africa" },
      { label: "Asia", value: "asia" },
      { label: "Australia", value: "australia" },
      { label: "Europe", value: "europe" },
      { label: "North America", value: "north-america" },
      { label: "South America", value: "south-america" }
    ];

    return (
      <div className="search mx-lg-5">
        <div className="row mx-0 justify-content-md-center search-container">
          <div className="mt-2 pt-2 col-xl-12 col-lg-12 col-md-12 col-12">
            <div className="row mb-3 mx-lg-4 mx-1">
              <div className="col-xl-3 col-lg-12 col-md-12 col-12 pr-0 pl-0 mb-3 mb-xl-0 mx-0">
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
                    className="form-control search-name"
                    placeholder="Explore..."
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
                    className="form-control search-name"
                    placeholder="Explore..."
                  />
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-12 col-12 pr-0 pl-0 mb-3 mb-lg-0">
                <Select
                  classname="row mx-0 px-0 w-100 rounded-0 search-filter"
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
                  closeOnSelect={true}
                  clearable={false}
                  searchable={false}
                  removeSelected={false}
                  options={activityOptions}
                  placeholder="Activities"
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
        <div className="d-none mx-lg-4 mx-1">
          <Favorites />
        </div>
      </div>
    );
  }
}

export default Search;
