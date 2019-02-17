import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import Home from './Home'
import {JeffWarner} from "./JeffWarner";

const About = () => <h2>About</h2>;
const Users = () => <h2>Users</h2>;

class App extends Component {
  render() {
    return (
      <div className="App">
          <Router onUpdate={() => window.scrollTo(0, 0)}>
            <div className="router-wrapper">
              <Route path="/" exact component={Home} />
              <Route path="/about/" component={About} />
              <Route path="/users/" component={Users} />
              <Route path="/jeff_warner/" component={JeffWarner} />
            </div>
          </Router>
      </div>
    );
  }
}
export default App;
