import React, { Component } from "react";
import "./styles/App.scss";
import json from "./assets/data.json";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Search from "./components/Search";
import Shop from "./components/Shop";
import Product from "./components/Product";
import Contact from "./components/Contact";
import Blog from "./components/Blog";
import Cart from "./components/Cart";
import Login from "./components/Login";
import Featured from "./components/Featured";
import Favorites from "./components/Favorites";
import Footer from "./components/Footer";

import { DataContext } from "./dataContext";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataContext: {
        data: json,
        setData: newData => {
          this.setState(state => ({
            dataContext: {
              ...state.dataContext,
              data: { ...state.dataContext.data, ...newData }
            }
          }));
        }
      },
      fetching: false,
      type: "input",
      name: "",
      email: "",
      password: "",
      loggedIn: false,
      subscribed: false,
      user: "",
      value: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleNewUser = this.handleNewUser.bind(this);
    this.handleLoggedInUser = this.handleLoggedInUser.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleLogOut = this.handleLogOut.bind(this);
  }

  componentWillMount() {
    this.setState({
      fetching: true
    });
  }

  componentDidMount() {
    this.setState({
      fetching: false
    });
  }

  handleChange(e) {
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
      type: this.state.type === "password" ? "password" : "input"
    });
    e.preventDefault();
    e.stopPropagation();
  }

  handleSubmit(e) {
    this.router.history.push(`/`);
    e.preventDefault();
  }

  handleNewUser() {
    this.setState({
      user: "registered",
      loggedIn: true
    });
  }

  handleLoggedInUser() {
    this.setState({
      user: "loggedin",
      loggedIn: true
    });
  }

  handleLogOut(e) {
    alert("You have successfully logged out. See you soon!");
    this.setState({
      loggedIn: false
    });
  }

  render() {
    if (this.state.fetching) {
      return <div>fetching</div>;
    } else {
      return (
        <DataContext.Provider value={this.state.dataContext}>
          <Router>
            <Switch>
              <Redirect from="/traveltheme" to="/" />
              <Route
                exact
                path="/login"
                render={() => (
                  <Login
                    type={this.state.type}
                    name={this.state.name}
                    email={this.state.email}
                    password={this.state.password}
                    loggedIn={this.state.loggedIn}
                    subscribed={this.state.subscribed}
                    user={this.state.user}
                    handleChange={this.handleChange}
                    handleNewUser={this.handleNewUser}
                    handleLoggedInUser={this.handleLoggedInUser}
                    handleSubmit={this.handleSubmit}
                    value={this.state.value}
                  />
                )}
              />
              <Route path="/cart" render={() => <Cart />} />
              <Route
                path="/"
                render={props => (
                  <div className="App">
                    {props.children}
                    <Navbar
                      loggedIn={this.state.loggedIn}
                      handleLogOut={this.handleLogOut}
                    />
                    <Search />
                    <div className="mt-0 mx-lg-5">
                      <Route
                        exact
                        path="/"
                        render={() => (
                          <div className="home mb-4">
                            <Featured />
                            <Favorites />
                            <Blog />
                          </div>
                        )}
                      />
                      <Route path="/shop" render={() => <Shop />} />
                      <Route exact path="/product" render={() => <Product />} />
                      <Route
                        path="/product/:id"
                        render={props => <Product {...props} />}
                      />
                      <Route path="/contact" render={() => <Contact />} />
                      <Route path="/blog" render={() => <Blog />} />
                      <Route path="/favorites" render={() => <Favorites />} />
                    </div>
                    <Footer />
                  </div>
                )}
              />
            </Switch>
          </Router>
        </DataContext.Provider>
      );
    }
  }
}

export default App;
