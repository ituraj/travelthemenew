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
    this.state = {
      isEmpty: true
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    if (
      this.props.name.length > 0 ||
      this.props.email.length > 0 ||
      this.props.message.length > 0
    ) {
      this.setState({ isEmpty: false });
      alert("Thank you for contacting us. We will answer as soon as possible.");
    } else {
      alert("All fields.");
    }
    e.preventDefault();
  }

  render() {
    return (
      <div className="contact mx-lg-4 mx-1">
        <h4 className="ml-3 my-3">Contact us!</h4>
        <div className="row mx-auto my-5">
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 d-sm-block d-none">
            <div className="row">
              <div className="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
                <img src={contactImage} alt="contact" />
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
            <div className="row justify-content-center">
              <div className="col-xl-9 col-lg-9 col-md-9 col-sm-12 col-12 px-3">
                <div className="row mx-auto justify-content-around">
                  <span className="text-center">
                    <a
                      href="https://goo.gl/maps/621K24ZppcM2"
                      className="text-center"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FontAwesomeIcon
                        icon={faLocationArrow}
                        size="2x"
                        className="text-primary"
                      />
                      <h6 className="py-2 text-primary">Find Us</h6>
                    </a>
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
                <form onSubmit={this.handleSubmit}>
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
                    <button
                      className="btn btn-outline-primary"
                      onClick={this.handleSubmit}
                    >
                      Send
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
