import React from "react";
import './Hornedbeast.css'
import Card from 'react-bootstrap/Card';


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

  render() {
    // console.log(this.props.name)
    return (
      <Card>
        <Card style={{ width: '18rem' }}></Card>
        <article className="person">
          <h3>{this.props.name}</h3>
          <p>🖤{this.props.likes}</p>
          <p onClick={this.handleLikes}>likes!</p>
          <img src={this.props.imageUrl} alt={this.props.description}></img>
          <p>{this.props.description}</p>
          <p>{this.props.horns}</p>
        </article>
      </Card>
    )
  };
}

export default Hornedbeast;