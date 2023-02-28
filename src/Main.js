import React from 'react';
import Hornedbeast from './Hornedbeast';


class Main extends React.Component {

  render() {
    return (
      <main>
  <Hornedbeast 
  title="Ephesto"
  imageUrl="images/Ephesto.jpeg"
  description="Luchador"
  // name="Mohammed"
  />
  <Hornedbeast 
  title="Rhino"
  imageUrl="images/Rhino.jpeg"
  description="GOOORE"
  // name="Fahim"
  />


  </main>
    )
  }
}

export default Main;