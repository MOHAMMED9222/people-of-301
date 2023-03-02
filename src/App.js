import React from 'react';
import Main from './Main';
import Header from './Header';
import Footer from './Footer';
import data from './data.json';
import Modal from 'react-bootstrap/Modal';
import './App.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      title: '',
      url: '',
      description: '',
    }
  }

  handleCloseModal = () => {
    this.setState({
      showModal: false
    });
  }

  handleOpenModal = (title, imageUrl, description) => {
    this.setState({
      showModal: true,
      title: title,
      url: imageUrl,
      description: description,
    });
  }

  render() {
    return (
      // wrap for no sibling elements
      <>
        <Header/>
        <Main data={data} handleOpenModal={this.handleOpenModal} />
        <Footer/>
        <Modal
        show={this.state.showModal}
        onHide={this.handleCloseModal}
        >
        <Modal.Header closeButton>
          <Modal.Title>{this.state.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body><img src={this.state.url} alt={this.state.title}/></Modal.Body>
        <Modal.Footer>{this.state.description}</Modal.Footer>
        </Modal>
      </>
      );
  }
}

export default App;

