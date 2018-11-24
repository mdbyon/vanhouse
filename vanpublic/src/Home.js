import React from 'react';

export const Home = () => {
  return (
    <div>
    <div className="page-header">
          <nav>
            <ul>
              <li><a className="active" href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>
      <div id="vanhouse-title"><h1>Vanhouse</h1></div>
    </div>
    <div className="home-container">
      <h2>Members</h2>
      <ul>
        <li><h3>Jeff Warner</h3></li>
        <li><h3>Matt Bruzik</h3></li>
        <li><h3>Paul Gwiazda</h3></li>
        <li><h3>Matt McLachlan</h3></li>
        <li><h3>Mike McLachlan</h3></li>
        <li><h3>Mike Byon</h3></li>
      </ul>
    </div>
    </div>
  )
}