import React, {Component} from 'react';
import Typing from 'react-typing-animation';
import {Link} from 'react-router-dom';
import Button from "@material-ui/core/Button/Button";
import {LoginModal} from "./LoginModal";

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
      showModal: false,
    }
  }

  handleModalClick = ()=>{
    this.setState({showModal: !this.state.showModal})
  }

  renderModal = () =>{
    if(this.state.showModal){
      return(
        <LoginModal />
      )
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
      <div className="home-wrapper">
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
                <a href={"https://www.linkedin.com/in/jeffrey-warner-0b1b90a6/"}>
                  <img src={require('./img/jeff.jpeg')} />
                </a>
              <h3>Jeff Warner</h3>
            </li>
            <li className="member-item">
              <a href={"https://www.linkedin.com/in/mattbruzik/"}>
                <img src={require('./img/matt.jpeg')}/>
              </a>
              <h3>Matt Bruzik</h3>
            </li>
            <li className="member-item">
              <img src={require('./img/paul.jpeg')}/>
              <h3>Paul Gwiazda</h3>
            </li>
            <li className="member-item">
              <img src={require('./img/josh.jpeg')}/>
              <h3>Josh DiNoto</h3>
            </li>
            <li className="member-item">
              <img src={require('./img/matt_mclan.jpeg')}/>
              <h3>Matt McLachlan</h3>
            </li>
            <li className="member-item">
              <img src={require('./img/connor.jpeg')}/>
              <h3>Connor Jarrett</h3>
            </li>
            <li className="member-item">
              <img src={require('./img/nick.jpeg')}/>
              <h3>Nick Farrell</h3>
            </li>
            <li className="member-item">
              <img src={require('./img/mike_new.jpeg')}/>
              <h3>Mike Byon</h3>
            </li>
          </ul>
          <div className="modal-button">
          <Button onClick={this.handleModalClick} />
          </div>
        </div>
        <div className="modal-container">
          {this.renderModal()}
        </div>
      </div>
    )
  }
}
export default Home