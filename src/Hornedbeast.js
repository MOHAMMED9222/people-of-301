import React from "react";
import './Hornedbeast.css'
import Button from 'react-bootstrap/Button';

// import Card from 'react-bootstrap/Card';


class Hornedbeast extends React.Component {
  // when u extend a class and want to add something to it. u need a constructor function
  constructor(props) {
    super(props)
    this.state = {
      likes: 0
    };
  }

  handleLikes = () => {

    // when the user clicks on "Say Hello" update the value of this.state.waves
    this.setState({
      likes: this.state.likes + 1
    });
  }

  handleHeaderClick = () => {
    this.handleLikes();
    this.props.handleOpenModal(this.props.title, this.props.imageUrl, this.props.description);
  }

  render() {
    // console.log(this.props.name)
    return (


      <article className="person">
        <h2>{this.props.title}</h2>
        <h3>{this.props.description}</h3>
        <Button className= 'likes' variant="warning">🖤{this.state.likes}</Button>{' '}
        <img
          src={this.props.imageUrl}
          alt={this.props.name}
          onClick={this.handleHeaderClick}
        />
        <Button className= 'handle' variant="warning" onClick={this.handleLikes}>Touch Me, Im So Horn </Button>{' '}
      </article>

    )
  };
}

export default Hornedbeast;

