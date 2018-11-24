import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import Home from './Home'

const About = () => <h2>About</h2>;
const Users = () => <h2>Users</h2>;

class App extends Component {
  render() {
    return (
      <div className="App">
          <Router>
            <div>
              <Route path="/" exact component={Home} />
              <Route path="/about/" component={About} />
              <Route path="/users/" component={Users} />
            </div>
          </Router>
      </div>
    );
  }
}
export default App;
