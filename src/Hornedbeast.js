import React from "react";
import Button from 'react-bootstrap/Button';
import './Hornedbeast.css'


class Hornedbeast extends React.Component {
  // when u extend a class and want to add something to it. u need a constructor function
  constructor(props) {
    super(props)
    this.state = {
      waves:0,
      helpMe: false
    };
  }
  handlewaves = () =>{
    // when the user clicks on "Say Hello" update the value of this.state.waves
    this.setState({
      waves: this.state.waves +1
    });
  }

  needsHelp = () => {
    this.setState({
      helpMe: true
    })
  }

  gotHelp = () => {
    this.setState({
      helpMe: false
    })
  }
  render() {
    // console.log(this.props.name)
    return (
      <main>
    <article className="person">
    <h3>{this.props.title}</h3>
    <p>{this.props.waves} greetings</p>
    <p onClick={this.handlewaves}>Say Hello!</p>
    <p>{this.props.description}</p>
    <img src={this.props.imageUrl} alt= {this.props.description}></img>
    <div>{this.state.helpMe ? 'I need help!' : ''}</div>
    <Button onClick={this.needsHelp}>Need Help</Button>
    <button onClick={this.gotHelp}>Find Help</button>
  </article>
  </main>
    )
  };
}

export default Hornedbeast;