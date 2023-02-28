import React from 'react';
import Main from './Main';
import './App.css';


class App extends React.Component {
  // inside render is the html jtsx
  render() {
  return (
    // wrap for no sibling elements
  <>
  <header><h1>Horned Beasts of Wrestling</h1></header>
<Main/>


  </>)
 }
}

export default App;

