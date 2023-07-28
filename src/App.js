import './index.css';
import React from 'react';
import { Route, Routes, Link } from "react-router-dom";
import { Section } from "./Section"
import Home from "./Home"
import Article from "./Article"

class App extends React.Component {
  render() {
      return (
        <div className="container">
          <div className="header">
            <button className="header-button vert-space">
              <Link className="header-link" to="/">
                <h3>Home</h3>
              </Link>
            </button>
            <div className="vert-space" id="resources">
              <button className="header-button" id="resources-button">
                <h3>Resources</h3>
              </button>
              <div id="resources-content">
                <Link style={{borderTopRightRadius: "5px"}} to="/algebra1">Algebra 1</Link>
                <Link style={{borderBottomRightRadius: "5px"}} to="/algorithms">Algorithms</Link>
              </div>
            </div>
          </div>
          <Routes>
            <Route exact path={"/"} element={<Home />} />
            <Route path={"/:res"} element={<Section />} />
            <Route path={"/:res/:article"} element={<Article />} />
          </Routes>
        </div>
            );
  }
}

export default App;