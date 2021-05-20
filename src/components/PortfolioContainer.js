import React, { Component } from "react";
// import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTab from "./Navbar/NavTab";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import About from "./pages/About";
import Project from "./pages/Project";
import Footer from "./Footer";

class Portfolio extends Component {
  state = {
    currentPage: "Home"
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  renderPage = () => {
    if (this.state.currentPage === "Home") {
      return <Home />;
    } else if (this.state.currentPage === "About") {
      return <About />;
    } else if (this.state.currentPage === "Project") {
      return <Project />;
    } else {
      return <Contact />;
    }
  };

  render() {
    return (
      <div>
        <NavTab
          currentPage={this.state.currentPage}
          handlePageChange={this.handlePageChange}
        />
        {this.renderPage()}
      </div>
    );
  }
}

export default Portfolio;
