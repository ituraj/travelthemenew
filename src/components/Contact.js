import React, { Component } from "react";
import "../styles/App.scss";

import contactImage from "./../images/contact.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationArrow,
  faPhone,
  faEnvelope
} from "@fortawesome/pro-light-svg-icons";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="contact mx-lg-4 mx-1">
        <h4 className="ml-3 my-3">Contact us!</h4>
        <div className="row mx-auto my-3">
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 d-sm-block d-none">
            <img src={contactImage} alt="contact" />
          </div>
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 py-5 px-5">
            <div className="row mx-auto my-5 justify-content-around">
              <span className="text-center">
                <FontAwesomeIcon
                  icon={faLocationArrow}
                  size="2x"
                  className="text-primary"
                />
                <h6 className="py-2 text-primary">Find Us</h6>
              </span>
              <a href="tel:+45-444-444-444" className="text-center">
                <FontAwesomeIcon
                  icon={faPhone}
                  size="2x"
                  className="text-primary"
                  flip="horizontal"
                />
                <h6 className="py-2 text-primary">Call Us</h6>
              </a>
              <a href="mailto:hello@enjoy.com" className="text-center">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  size="2x"
                  className="text-primary"
                />
                <h6 className="py-2 text-primary">Email Us</h6>
              </a>
            </div>
            <form onSubmit={this.state.handleSubmit}>
              <div className="form-group">
                <label htmlFor="exampleInputEmail3">
                  <h6>Name</h6>
                </label>
                <div className="input-group mb-3">
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Name"
                    aria-label="Name"
                    aria-describedby="basic-addon3"
                    value={this.props.name}
                    onChange={this.props.handleChange}
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">
                  <h6>Email</h6>
                </label>
                <div className="input-group mb-3">
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="Email"
                    aria-label="Email"
                    aria-describedby="basic-addon1"
                    value={this.props.email}
                    onChange={this.props.handleChange}
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">
                  <h6>Message</h6>
                </label>
                <div className="input-group mb-3">
                  <input
                    type="textarea"
                    name="message"
                    className="form-control"
                    placeholder="Message"
                    aria-label="Message"
                    aria-describedby="basic-addon1"
                    value={this.props.message}
                    onChange={this.props.handleChange}
                  />
                </div>
              </div>
              <div className="row mx-auto my-2 justify-content-center">
                <button className="btn btn-outline-primary">Send</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
