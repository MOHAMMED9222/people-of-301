import React from 'react';
import Hornedbeast from './Hornedbeast';
import './Main';


class Main extends React.Component {

  render() {
    let hornedPeople = [];
    this.props.data.forEach((beast) => {
      hornedPeople.push(
        <Hornedbeast
          name={beast.title}
          imageUrl={beast.image_url}
          description={beast.description}
          horns={beast.horns}
          keyword={beast.keyword}
          key={beast._id}
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