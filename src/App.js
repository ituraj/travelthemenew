import React, { Component } from "react";
import "./styles/App.scss";
import json from "./assets/data.json";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from "./components/Navbar";
import Search from "./components/Search";
import Home from "./components/Home";
import Shop from "./components/Shop";
import Product from "./components/Product";
import About from "./components/About";
import Blog from "./components/Blog";
import Cart from "./components/Cart";
import Login from "./components/Login";
import Favorites from "./components/Favorites";
import Category from "./components/Category";
import Footer from "./components/Footer";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      store: json.store,
      product: json.product,
      categories: json.categories
    };
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/login" render={() => <Login />} />
          <Route path="/cart" render={() => <Cart />} />
          <Route
            path="/"
            render={props => (
              <div className="App">
                {props.children}
                <Navbar />
                <Search />
                <div className="mt-0 mx-lg-5">
                  <Route exact path="/" render={() => <Home />} />
                  <Route path="/home" render={() => <Home />} />
                  <Route path="/shop" render={() => <Shop />} />
                  <Route path="/product" render={() => <Product />} />
                  <Route path="/about" render={() => <About />} />
                  <Route path="/blog" render={() => <Blog />} />
                  <Route
                    path="/favorites"
                    render={() => (
                      <Favorites {...props} product={this.state.product} />
                    )}
                  />
                  <Route path="/category" render={() => <Category />} />
                </div>
                <Footer />
              </div>
            )}
          />
        </Switch>
      </Router>
    );
  }
}

export default App;
