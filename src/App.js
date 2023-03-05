import React from 'react';
import Main from './Main';
import Header from './Header';
import Footer from './Footer';
import data from './data.json';
import Modal from 'react-bootstrap/Modal';
import './App.css';
import Form from 'react-bootstrap/Form'
import SelectedBeast from './SelectedBeast';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      title: '',
      url: '',
      description: '',
      data: data,
      sortedData: data,
    }
  }

  handleCloseModal = () => {
    this.setState({
      showModal: false,
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


  handleSubmit = (event) => {
    event.preventDefault();
    let picked = event.target.value;
    if (picked === '1') {
      let newData = data.filter(num => num.horns === 1);
      this.setState({
        sortedData: newData
      });
    } else if (picked === '2') {
      let newData = data.filter(num => num.horns === 2);
      this.setState({
        sortedData: newData
      });
    } else if (picked === '3') {
      let newData = data.filter(num => num.horns === 3);
      this.setState({
        sortedData: newData
      });
    } else if (picked === '100') {
      let newData = data.filter(num => num.horns === 100);
      this.setState({
        sortedData: newData
      });
    } else if (picked === 'All') {
      //let newData = data.filter(num => num.horns === 'All');
      this.setState({
        sortedData: data});

    }
  }

  

    render() {
      return (
        // wrap for no sibling elements
        <>
          <Header />
          <Form>
            <Form.Select name="pick" onChange={this.handleSubmit}>
              <option>Select A Horn Value</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
              <option value="100">One-Hundred</option>
              <option value="All">All</option>

            </Form.Select>

          </Form>
          <Main data={this.state.sortedData} handleOpenModal={this.handleOpenModal} />

          <SelectedBeast
          data={this.state.sortedData}
         showModal = {this.state.showModal}
         handleCloseModal= {this.handleCloseModal}
         title = {this.state.title}
         img = {this.state.url}
         description = {this.state.title}></SelectedBeast>

          
          <Footer />
          <Modal
            show={this.state.showModal}
            onHide={this.handleCloseModal}
          >
            <Modal.Header closeButton>
              <Modal.Title>{this.state.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body><img src={this.state.url} alt={this.state.title} /></Modal.Body>
            <Modal.Footer>{this.state.description}</Modal.Footer>
          </Modal>
        </>
      );
    }
  }

export default App;
