import React from 'react';
import Hornedbeast from './Hornedbeast';
import './main.css';


class Main extends React.Component {

  render() {
    let hornedPeople = this.props.data.map((beast, idx) => {
      return (
        <Hornedbeast
          title={beast.title}
          imageUrl={beast.image_url}
          description={beast.description}
          handleOpenModal={this.props.handleOpenModal}
          key={idx}
        />
      )
    });
    return (
      <main>
        {hornedPeople}
      </main>
    );
  }
}

export default Main;