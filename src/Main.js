import React from 'react';
import Hornedbeast from './Hornedbeast';


class Main extends React.Component {

  render() {
    return (
      <main>
  <Hornedbeast 
  title="title"
  imageUrl="url"
  description="description"
  name="Mohammed"/>
  <Hornedbeast 
  title="title"
  imageUrl="url"
  description="description"
  name="Fahim"/>


  </main>
    )
  }
}

export default Main;