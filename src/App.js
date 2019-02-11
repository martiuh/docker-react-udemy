import React, { Component, useState } from "react";
import { Router, Link } from "@reach/router";

import Index from "./pages";
import About from "./pages/about";
import logo from "./logo.svg";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Link className="App-header-anchor" to="/">
          Home
        </Link>
        <Link className="App-header-anchor" to="/about">
          About
        </Link>
        <Router>
          <Index path="/" />
          <About path="/about" />
        </Router>
      </header>
    </div>
  );
}
