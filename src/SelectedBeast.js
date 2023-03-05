import React from "react";
import Modal from 'react-bootstrap/Modal';


class SelectedBeast extends React.Component {




  render() {

    return (
      <>
        <Modal
          show={this.props.showModal}
          onHide={this.handleCloseModal}
        >
          <Modal.Header closeButton>
            <Modal.Title>{this.props.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body><img src={this.props.url} alt={this.props.title} /></Modal.Body>
          <Modal.Footer>{this.props.description}</Modal.Footer>
        </Modal>

      </>
    )
  };
}

export default SelectedBeast;
