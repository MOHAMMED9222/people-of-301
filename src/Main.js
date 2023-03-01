import React from 'react';
import Hornedbeast from './Hornedbeast';
import './Main';


class Main extends React.Component {

  render() {
    let hornedPeople = [];
    this.props.data.forEach((beast, idx) => {
    hornedPeople.push(
      <Hornedbeast
      name={beast.title}
      imageUrl={beast.image_url}
      description={beast.description}
      horns={beast.title}
      keyword={beast.keyword}
      id={beast._id}
      key={idx}
/>
    )  
    });
    return (
      <main>
 {hornedPeople}
  </main>
    )
  }
}

export default Main;