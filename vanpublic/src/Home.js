import React, {Component} from 'react';
import Typing from 'react-typing-animation';
import {Link} from 'react-router-dom';

const AnimatedTypingComponent = () => {
  return (
    <Typing speed={70}>
      <h1>Welcome to Vanhouse</h1>
    </Typing>
  )
}

class Home extends Component {
  constructor(props){
    super(props);
    this.membersRef = React.createRef();

    this.state={
      atTopOfScreen: true,
    }
  }


  scrollToMembers = () => {
    if(this.state.atTopOfScreen){
      window.scrollTo({
        top:this.membersRef.current.offsetTop,
        behavior: "smooth"
      })
      this.setState({atTopOfScreen: false})
    }
    window.scrollTo(0,0)
    this.setState({atTopOfScreen:true})
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
          {AnimatedTypingComponent()}
          <div className="scroll-down" onClick={this.scrollToMembers}/>
        </div>
        <div ref={this.membersRef}
          className="home-container">
          <h2>Members</h2>
          <ul className="members-list">
            <li className="member-item">
              <Link to='/jeff_warner'>
                <img src={require('./img/jeff.jpeg')}/>
              </Link>
              <h3>Jeff Warner</h3>
            </li>
            <li className="member-item">
              <Link to='/matt_bruzik'>
                <img src={require('./img/matt.jpeg')}/>
              </Link>
              <h3>Matt Bruzik</h3>
            </li>
            <li className="member-item">
              <img src={require('./img/paul.jpeg')}/>
              <h3>Paul Gwiazda</h3>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}
export default Home