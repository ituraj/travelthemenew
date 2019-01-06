import React, { Component } from "react";
import "../styles/App.scss";

import { Link } from "react-router-dom";
import CreditCardInput from "react-credit-card-input";
import { Collapse } from "react-collapse";
import { DataContext } from "../dataContext";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faShoppingCart,
  faHeart,
  faMap
} from "@fortawesome/pro-light-svg-icons";

class Cart extends Component {
  static contextType = DataContext;

  constructor(props) {
    super(props);
    this.state = {
      physicalOpened: false,
      digitalOpened: false,
      status: "cart",
      payment: "digital",
      cardNumber: "",
      expiry: "",
      cvc: ""
    };
    this.handleCardNumberChange = this.handleCardNumberChange.bind(this);
    this.handleCardExpiryChange = this.handleCardExpiryChange.bind(this);
    this.handleCardCVCChange = this.handleCardCVCChange.bind(this);
    this.proceedToCheckout = this.proceedToCheckout.bind(this);
    this.proceedToPayment = this.proceedToPayment.bind(this);
    this.confirmPayment = this.confirmPayment.bind(this);
    this.togglePhysicalCollapse = this.togglePhysicalCollapse.bind(this);
    this.toggleDigitalCollapse = this.toggleDigitalCollapse.bind(this);
  }

  handleCardNumberChange(e) {
    this.setState({ cardNumber: e.target.value });
  }
  handleCardExpiryChange(e) {
    this.setState({ expiry: e.target.value });
  }
  handleCardCVCChange(e) {
    this.setState({ cvc: e.target.value });
  }

  proceedToCheckout() {
    this.setState({ status: "shipping" });
  }

  proceedToPayment() {
    this.setState({ status: "payment" });
    alert(
      "Copy this card number for testing: 378282246310005. You can use any date in the future for expiry date and any three digits for CVC code."
    );
  }

  confirmPayment(e) {
    this.setState({ status: "confirmed" });
  }

  togglePhysicalCollapse() {
    this.setState({
      digitalOpened: false,
      physicalOpened: !this.state.physicalOpened
    });
  }

  toggleDigitalCollapse() {
    this.setState({
      physicalOpened: false,
      digitalOpened: !this.state.digitalOpened
    });
  }

  render() {
    var featured = this.context.data.featured;
    return (
      <div className="cart">
        <nav className="navbar navbar-light bg-white mt-0">
          <span className="navbar-brand mb-0">
            <Link to="/" className="navbar-brand text-dark">
              <FontAwesomeIcon icon={faMap} style={{ color: "#9cc2da" }} />
              <span className="pl-2 text-primary">ENJOY</span>
            </Link>
          </span>
          <div>
            <ul className="navbar-nav mr-auto flex-row">
              <li className="nav-item active">
                <span className="navbar-text pl-2 pr-2">Cart</span>
              </li>
              <li className="nav-item active">
                <span className="navbar-text pl-2 pr-2">Shipping</span>
              </li>
              <li className="nav-item active">
                <span className="navbar-text pl-2 pr-2">Payment</span>
              </li>
            </ul>
          </div>
          <span className="navbar-text">
            <Link to="/login" className="nav-link">
              <span>Login</span>
            </Link>
          </span>
        </nav>
        <div className="bg-white box-shadow box mx-auto my-5 p-5 checkout-form">
          {this.state.status === "" ? (
            <div className="empty-cart">
              <div className="row mx-3 mb-3 border-bottom">
                <div className="col text-center">
                  <h4>Your backpack is empty.</h4>
                  <p>Check out our offer and go on an adventure!</p>
                </div>
              </div>
              <div className="row mx-auto justify-content-between">
                <h4 className="ml-3">Recommended for you:</h4>
                <Link
                  to="/shop"
                  className="btn btn-outline-primary d-none d-sm-block mr-3"
                >
                  See more
                </Link>
              </div>
              <div className="row mx-auto scrolling-wrapper">
                {this.context.data.featured
                  .map((product, id) => (
                    <div
                      className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 mt-4"
                      key={id}
                    >
                      <div className="card mx-auto">
                        <img
                          className="card-img-top card-in-cart"
                          src={require(`images/${product.main_image}`)}
                          alt="Card cap"
                        />
                        <div className="card-body">
                          <span className="row mx-auto justify-content-between">
                            <h5 className="card-title">
                              <Link to="/product" className="product-link">
                                {product.title}
                              </Link>
                            </h5>
                            <h6 className="text-primary font-weight-bold">
                              {this.context.data.store.currency + product.price}
                            </h6>
                          </span>
                          <h6 className="card-subtitle mb-2 text-muted">
                            {product.town}
                          </h6>
                        </div>
                        <div className="row d-flex justify-content-between align-items-center py-2 px-4">
                          <div className="col-8">
                            <Link
                              to="/product"
                              className="text-dark d-flex align-items-center explore-link"
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
                            <Link
                              to="/cart"
                              className="text-dark pr-2"
                              onClick={() => {
                                this.context.setData({
                                  cartItems: [
                                    ...this.context.data.cartItems,
                                    product
                                  ]
                                });
                              }}
                            >
                              <FontAwesomeIcon icon={faShoppingCart} />
                            </Link>

                            <Link to="/favorites" className="text-dark pl-2">
                              <FontAwesomeIcon icon={faHeart} />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                  .splice(0, 3)}
              </div>
            </div>
          ) : this.state.status === "shipping" ? (
            <div className="shipping-cart">
              <div className="row mx-3">
                <div className="col-12">
                  <div className="row text-center">
                    <h4 className="w-100">Shipping</h4>
                  </div>
                  <div className="row text-center">
                    <h6 className="py-1 my-3 w-100">
                      Order paper confirmation and travel guide to your house or
                      save some trees and get it on your email!
                    </h6>
                  </div>
                  <div className="row text-center justify-content-center">
                    <button
                      onClick={this.togglePhysicalCollapse}
                      className="btn btn-outline-primary my-2 mx-2"
                      type="button"
                    >
                      Physical
                    </button>
                    <button
                      className="btn btn-outline-primary my-2 mx-2"
                      onClick={this.toggleDigitalCollapse}
                    >
                      Digital
                    </button>
                  </div>
                  <div className="row justify-content-center">
                    <Collapse isOpened={this.state.physicalOpened}>
                      <form onSubmit={this.state.handleSubmit}>
                        <div className="row my-3">
                          <div className="col">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="First name"
                            />
                          </div>
                          <div className="col">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Last name"
                            />
                          </div>
                        </div>
                        <div className="row my-3">
                          <div className="col">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Email"
                            />
                          </div>
                          <div className="col">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Phone Number"
                            />
                          </div>
                        </div>
                        <div className="row my-3">
                          <div className="col">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Street"
                            />
                          </div>
                        </div>
                        <div className="row my-3">
                          <div className="col">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="City"
                            />
                          </div>
                          <div className="col">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Zip Code"
                            />
                          </div>
                        </div>
                      </form>
                      <div className="row text-center justify-content-center">
                        <button
                          className="btn btn-outline-primary my-2 mx-2"
                          onClick={this.proceedToPayment}
                        >
                          Proceed
                        </button>
                      </div>
                    </Collapse>
                  </div>
                  <div className="row justify-content-center">
                    <Collapse isOpened={this.state.digitalOpened}>
                      <form onSubmit={this.state.handleSubmit}>
                        <div className="row my-3">
                          <div className="col">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="First name"
                            />
                          </div>
                          <div className="col">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Last name"
                            />
                          </div>
                        </div>
                        <div className="row my-3">
                          <div className="col">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Email"
                            />
                          </div>
                        </div>
                      </form>
                      <div className="row text-center justify-content-center">
                        <button
                          className="btn btn-outline-primary my-2 mx-2"
                          onClick={this.proceedToPayment}
                        >
                          Proceed
                        </button>
                      </div>
                    </Collapse>
                  </div>
                </div>
              </div>
            </div>
          ) : this.state.status === "payment" ? (
            <div className="payment-cart">
              <div className="row mx-3">
                <div className="col-12">
                  <div className="row text-center">
                    <h4 className="w-100">Payment</h4>
                  </div>
                  <div className="row text-center">
                    {this.state.payment === "digital" ? (
                      <h6 className="py-2 w-100">
                        Thank you for saving the trees with us!
                      </h6>
                    ) : (
                      <h6 className="py-2 my-3 w-100">
                        Thank you for travelling with us!
                      </h6>
                    )}
                  </div>

                  <div className="row justify-content-center card-input">
                    <CreditCardInput
                      containerClassName="my-3"
                      fieldClassName="input border rounded"
                      fieldStyle={{ paddingTop: "1rem" }}
                      dangerTextClassName="text-danger"
                      cardImageStyle={{ width: "auto", marginTop: "-0.4rem" }}
                      cardNumberInputProps={{
                        value: this.state.cardNumber,
                        onChange: this.handleCardNumberChange
                      }}
                      cardExpiryInputProps={{
                        value: this.state.expiry,
                        onChange: this.handleCardExpiryChange
                      }}
                      cardCVCInputProps={{
                        value: this.state.cvc,
                        onChange: this.handleCardCVCChange
                      }}
                    />
                  </div>
                  <div className="row text-center justify-content-center">
                    <button
                      className="btn btn-outline-primary my-2 mx-2"
                      onClick={this.confirmPayment}
                    >
                      Confirm
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ) : this.state.status === "cart" ? (
            <div className="checkout-cart">
              <div className="row mx-3 mb-3 justify-content-center">
                <h4>Shopping Cart</h4>
              </div>
              <div className="row mx-3 mb-3 justify-content-center">
                <h6>
                  You have {this.context.data.cartItems.length} items in the
                  backpack.
                </h6>
              </div>
              <div className="row mx-auto">
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 px-5 mb-5">
                  <div className="card mx-auto">
                    <img
                      className="card-img-top card-in-cart"
                      src={require(`images/${featured[0].main_image}`)}
                      alt="Card cap"
                    />
                    <div className="card-body">
                      <span className="row mx-auto justify-content-between">
                        <h5 className="card-title">
                          {this.context.data.featured[0].title}
                        </h5>
                        <h6 className="text-primary font-weight-bold">
                          {this.context.data.store.currency +
                            this.context.data.featured[0].price}
                        </h6>
                      </span>
                      <h6 className="card-subtitle mb-2 text-muted">
                        {this.context.data.featured[0].town}
                      </h6>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 px-5 mb-5">
                  <div className="row mx-auto">
                    <h6>
                      Product: <span>{this.context.data.featured[0].name}</span>
                    </h6>
                  </div>
                  <div className="row mx-auto">
                    <h6>
                      Price:{" "}
                      <span>
                        {this.context.data.store.currency +
                          this.context.data.featured[0].price}
                      </span>
                    </h6>
                  </div>
                  <div className="row mx-auto">
                    <h6>
                      Total:{" "}
                      <span>
                        {this.context.data.store.currency +
                          this.context.data.featured[0].price}
                      </span>
                    </h6>
                  </div>
                  <div className="row mx-auto my-2">
                    <form onSubmit={this.state.handleSubmit}>
                      <div className="form-group">
                        <label htmlFor="exampleInputPassword1">
                          <h6>Have a discount code?</h6>
                        </label>
                        <div className="input-group mb-3">
                          <input
                            type="text"
                            name="discount"
                            className="form-control"
                            placeholder="Discount Code"
                            aria-label="Discount Code"
                            aria-describedby="basic-addon1"
                            value={this.props.discount}
                            onChange={this.props.handleChange}
                          />
                          <div className="input-group-append">
                            <button
                              type="text"
                              className="btn btn-outline-primary"
                              id="button-addon2"
                            >
                              Apply
                            </button>
                          </div>
                        </div>
                      </div>
                      <button
                        className="btn btn-outline-primary"
                        onClick={this.proceedToCheckout}
                      >
                        Proceed to Checkout
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          ) : this.state.status === "confirmed" ? (
            <div className="shipping-cart">
              <div className="row mx-3">
                <div className="col-12">
                  <div className="row text-center">
                    <h4 className="w-100">Booking Confirmed</h4>
                  </div>
                  <div className="row text-center">
                    <h6 className="py-1 my-3 w-100">
                      We can't wait to go with you on this adventure!
                    </h6>
                    <h6 className="py-1 my-3 w-100">
                      Need some more travel ideas? Read our&nbsp;
                      <span>
                        <Link to="/blog" className="text-primary">
                          blog
                        </Link>
                      </span>
                      .
                    </h6>
                  </div>
                  <div className="row text-center justify-content-center">
                    <Link to="/" className="btn btn-outline-primary my-2 mx-2">
                      Back
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}

export default Cart;
