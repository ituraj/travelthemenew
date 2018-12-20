import React, { Component } from "react";
import "./styles/App.scss";
import json from "./assets/data.json";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

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
import Category from "./components/Category";
import Footer from "./components/Footer";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      store: json.store,
      product: json.featured,
      categories: json.categories,
      fetching: false,
      favorite: false,
      favoriteArray: [],
      added: false,
      addedArray: []
    };
    this.addToFavorites = this.addToFavorites.bind(this);
    this.handleChange = this.handleChange.bind(this);
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

  addToFavorites() {
    this.setState({ favorite: true });
  }

  handleChange(e) {
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
    e.preventDefault();
    e.stopPropagation();
  }

  render() {
    if (this.state.fetching) {
      return <div>fetching</div>;
    } else {
      return (
        <Router>
          <Switch>
            <Route exact path="/login" render={() => <Login />} />
            <Route
              path="/cart"
              render={() => <Cart product={this.state.product} />}
            />
            <Route
              path="/"
              render={props => (
                <div className="App">
                  {props.children}
                  <Navbar
                    favorite={this.state.favorite}
                    added={this.state.added}
                    user={this.state.user}
                  />
                  <Search />
                  <div className="mt-0 mx-lg-5">
                    <Route
                      exact
                      path="/"
                      render={() => (
                        <div className="home mb-4">
                          <Featured />
                          <Favorites
                            {...props}
                            favorite={this.state.favorite}
                            added={this.state.added}
                            addToFavorites={this.addToFavorites}
                          />
                          <Blog />
                        </div>
                      )}
                    />
                    <Route path="/shop" render={() => <Shop />} />
                    <Route path="/product" render={() => <Product />} />
                    <Route path="/contact" render={() => <Contact />} />
                    <Route path="/blog" render={() => <Blog />} />
                    <Route path="/favorites" render={() => <Favorites />} />
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
}

export default App;
