import React from 'react';
import './App.css';
import { Outlet, Link } from "react-router-dom";

export default function App() {
  return (
    <div>
      <div id="navWrapper">
        <nav>
          <ul id="navigation">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
            <Link to="/01-random-quote-machine">01 Random Quote Machine</Link>
            </li>
            <li>
            <Link to="/02-markdown-previewer">02 Markdown Previewer</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div id='bodyWrapper'>
        <Outlet />
      </div>
      
    </div>
  );
}
