import React, { useState } from 'react';
import { Modal } from "react-bootstrap";
import DonationMalaysia from "../utils/Donation/DonationMalaysia.jfif";

export default function Malaysia() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <div className="text-align-center">
        <button className="country-btn color-red" onClick={handleShow}>MALAYSIA</button>
      </div>
      <Modal show={show} onHide={handleClose} contentClassName="country-modal">
        <Modal.Header className="bg-beach color-red">
          <Modal.Title className="font-size-large">MALAYSIA</Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-beach font-size-small color-blue text-align-center">
          <div>We ask for a minimum of <span className="bold">RM5</span> for each GSC profile created.</div>
          <div>It's by trust basis, so don't have to send us proof of payment!</div>
          <img src={DonationMalaysia} alt="DonationMalaysia" className="payment-img"/>
        </Modal.Body>
        <Modal.Footer className="country-modal-footer bg-beach font-size-small color-red text-align-center">
          Please write "<span className="bold">MatchesUp</span>" in "What's the transfer for?"
        </Modal.Footer>
      </Modal>
    </div>
  )
}
