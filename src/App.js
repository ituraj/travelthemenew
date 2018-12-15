import React, { Component } from "react";
import "./styles/App.scss";
// import axios from "axios";

import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "./components/Header";
import Search from "./components/Search";
import Home from "./components/Home";
import Shop from "./components/Shop";
import Product from "./components/Product";
import About from "./components/About";
import Blog from "./components/Blog";
import Cart from "./components/Cart";
import Login from "./components/Login";
import Favorites from "./components/Favorites";
import Footer from "./components/Footer";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: true,
      data: []
    };
  }

  // componentDidMount() {
  //   this.fetch();
  // }

  // fetch() {
  //   axios
  //     .get(url)
  //     .then(
  //       function(response) {
  //         console.log(response);
  //         this.setState({
  //           data: response.data
  //         });
  //       }.bind(this)
  //     )
  //     .catch(function(error) {
  //       console.log(error);
  //     });
  // }

  render() {
    return (
      <Router>
        <div className="App">
          <div className="header-container">
            <Header />
            <Search />
          </div>
          <div className="mt-0 mx-lg-5">
            <Route exact path="/" component={Home} />
            <Route path="/shop" component={Shop} />
            <Route path="/product" component={Product} />
            <Route path="/about" component={About} />
            <Route path="/blog" component={Blog} />
            <Route path="/cart" component={Cart} />
            <Route path="/login" component={Login} />
            <Route path="/favorites" component={Favorites} />
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
