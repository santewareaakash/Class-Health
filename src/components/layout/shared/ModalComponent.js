import React from "react";
import { Modal } from "react-bootstrap";

const ModalComponent = (props) => {
  const { show, handleClose } = props;

  return (
    <Modal
      show={show}
      onHide={handleClose}
      centered
      backdrop={props?.keyboard && "static"}
      keyboard={props?.keyboard && false}
    >
      <Modal.Header closeButton={props.keyboard && false}>
        <Modal.Title>{props.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{props.children}</Modal.Body>
    </Modal>
  );
};

export default ModalComponent;
