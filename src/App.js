import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/HomePage/Home";
import Biglander from "./components/HomePage/Biglander";
import Cursor from "./components/HomePage/Cursor";

function App() {
  const [hoverstate, setHoverState] = useState({
    className: "",
    img: "",
  });
  return (
    <div>
      <Router>
        <Cursor hoverclass={hoverstate.className} hoverImage={hoverstate.img} />
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
