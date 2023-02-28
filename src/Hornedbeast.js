import React from "react";
import './Hornedbeast.css'


class Hornedbeast extends React.Component {
  render() {
    console.log(this.props.name)
    return (
    <article>
    <h3>{this.props.name}</h3>
    <p>WHO YA WITH</p>
  </article>)
  };
}

export default Hornedbeast;