import React from "react";
import './Hornedbeast.css'


class Hornedbeast extends React.Component {
  render() {
    console.log(this.props.name)
    return (
      <main>
    <article>
    <h2>{this.props.title}</h2>
    <p>{this.props.description}</p>
    <img src={this.props.imageUrl} alt= {this.props.description}></img>
  </article>
  </main>
    )
  };
}

export default Hornedbeast;