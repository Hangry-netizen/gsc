import React, { useState } from 'react'
import axios from 'axios';
import { url } from "../App";
import { Modal, Form, Button, Alert } from 'react-bootstrap';
import { useAuth } from "../contexts/AuthContext";

export default function CreateGSC() {
  const [name, setName] = useState("")
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [message, setMessage] = useState("")
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const { currentUser } = useAuth()
  
  const handleSubmit = e => {
    e.preventDefault()
    setError("")
    setMessage("")

    if (name === "") {
      return setError("Name is required!")
    }
    setError("")
    axios({
      method: 'POST',
      url: `${url}/approvals/`,
      data: {
        gsc_name: name,
        ff_email: currentUser.email
      }
    })
    .then(response => {
      console.log(response)
      setMessage("Submited successfully")
      setShow(false)
      openFormInNewTab()
      window.location.reload()
    })
    .catch(error => {
      console.log(error)
      setError("Failed to submit")
    })
    setIsLoading(false)
  }

  const openFormInNewTab = () => {
    const newWindow = window.open("https://forms.gle/BKGJJkXwCEannqTc8", "_blank", "noopener noreferrer")
    if (newWindow) newWindow.opener = null
  }

  return (
    <div>
      <button id="create-gsc-btn" className="red-button" onClick={handleShow}>
        CREATE A NEW <span className="light italic">GOOD SINGLE CHRISTIAN FRIEND</span> PROFILE
      </button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header className="bg-beach">
          <Modal.Title>
            <span className="color-red font-size-large">Create A New GSCF Profile</span>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-beach">
          <Form onSubmit={e => handleSubmit(e)}>
            <div className="font-size-medium">
              <label className="color-blue">Enter GSCF's Name: </label>
              <input type="name" onChange={e => setName(e.target.value)} />
            </div>
            <div>
              {error && <Alert className="color-red font-size-small">{error}</Alert>}
              {message && <Alert className="color-green font-size-small">{message}</Alert>}
            </div>
            <div className="text-align-right">
              <Button variant="secondary" id="create-gsc-close-btn" onClick={handleClose}>Close</Button>
              <Button id="create-gsc-modal-confirm-btn" disabled={isLoading}>Confirm</Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  )
}


