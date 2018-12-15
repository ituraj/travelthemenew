import React, { Component } from "react";
import "../styles/App.scss";
import Select from "react-select";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    var statusOptions = [
      { label: "someting", value: "active" },
      { label: "someting", value: "expired" }
    ];

    var discountOptions = [
      { label: "someting", value: "order" },
      { label: "someting", value: "shipping" },
      { label: "someting", value: "categories" }
    ];

    var customerOptions = [
      { label: "someting", value: "all" },
      { label: "someting", value: "loggedin" },
      { label: "someting", value: "nopurchases" }
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
                      paddingLeft: "2.4rem",
                      borderRadius: "0.25rem",
                      fontSize: "0.875rem"
                    }}
                    className="form-control search-name"
                    placeholder="search"
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
                    placeholder="search"
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
                  options={statusOptions}
                  placeholder="search"
                />
              </div>
              <div className="col-xl-3 col-lg-4 col-md-12 col-12 pr-0 pl-0 mb-3 mb-lg-0">
                <Select
                  classname="row mx-0 px-0 w-100 search-filter"
                  closeOnSelect={true}
                  clearable={false}
                  searchable={false}
                  removeSelected={false}
                  options={discountOptions}
                  placeholder="search"
                />
              </div>
              <div className="col-xl-3 col-lg-4 col-md-12 col-12 pr-0 pl-0 mb-3 mb-lg-0">
                <Select
                  classname="row mx-0 px-0 w-100 search-filter"
                  closeOnSelect={true}
                  clearable={false}
                  searchable={false}
                  removeSelected={false}
                  options={customerOptions}
                  placeholder="search"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
