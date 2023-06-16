import React from "react";
import { Modal } from "react-bootstrap";

const ModalComponent = (props) => {
  const { show, handleClose } = props;

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Contact Us</Modal.Title>
      </Modal.Header>
      <Modal.Body>{props.children}</Modal.Body>
    </Modal>
  );
};

export default ModalComponent;
