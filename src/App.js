
import './App.css';
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTab from "./components/Navbar/NavTab";
import Contact from "./components/pages/Contact";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Project from "./components/pages/Project";
import Footer from "./components/Footer";


function App() {
  return (
    <Router>
      <div>
        <NavTab />
        <Route exact path="/" component={Home} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/about-me" component={About} />
        <Route exact path="/project" component={Project} />
        <Route component={Home}/>
        <Footer />
      </div>
    </Router>
  );
}


export default App;
