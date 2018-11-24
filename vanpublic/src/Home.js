import React, {Component} from 'react';


class Home extends Component {
  constructor(props){
    super(props);
    this.membersRef = React.createRef();
  }

  scrollToMembers = () => {
    window.scrollTo({
      top:this.membersRef.current.offsetTop,
      behavior: "smooth"
    })
  }

  render() {
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
          <div className="scroll-down" onClick={this.scrollToMembers}/>
        </div>
        <div ref={this.membersRef}
          className="home-container">
          <h2>Members</h2>
          <ul className="members-list">
            <li className="member-item">
              <h3>Jeff Warner</h3>
              <img src={require('./img/jeff.jpeg')}/>
            </li>
            <li className="member-item">
              <h3>Matt Bruzik</h3>
              <img src={require('./img/matt.jpeg')}/>
            </li>
            <li className="member-item">
              <h3>Paul Gwiazda</h3>
              <img src={require('./img/paul.jpeg')}/>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}
export default Home