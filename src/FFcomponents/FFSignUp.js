import React, { useState } from 'react';
import { Alert } from 'react-bootstrap';
import { useAuth } from '../contexts/AuthContext'
import { useHistory } from "react-router-dom";

import './FFSignUp.css'

const FFSignUp = ({}) => {
  const history = useHistory()
  const { signup, verification } = useAuth()

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [reEnterPassword, setReEnterPassword] = useState("")
  const [referral, setReferral] =useState("")
  const [isLoading, setIsLoading] = useState("")
  const [message, setMessage] = useState("")
  const [error, setError] = useState("")

  async function handleSignUp(e) {
    e.preventDefault()

    if (email === "") {
      return setError ('Email is required')
    } else if (password !== reEnterPassword) {
      return setError ('Passwords do not match')
    } else if (name === "") {
      return setError ('Name is required')
    } else if (referral === "") {
      return setError ('Referral is required')
    }

    console.log("submitted sign up")

    try {
      setError("")
      setIsLoading(true)
      await signup(email, password, name, referral)
      await verification().then(function () {
        setMessage("Signed up successfully")
        history.push("/")
      })
    } catch {
      setError("Failed to create an account")
    }
    setIsLoading(false)
  }

  return (
    <div className="sign-up">
      <span className="sign-up-title">
        <div className="create">CREATE</div>
        <div className="FF-account">
        <div className="FF">FAITHFUL FRIEND</div>
        <div className="account">account</div>
        </div>
      </span>
      {message && <Alert variant="success">{message}</Alert>}
      {error && <Alert variant="danger">{error}</Alert>}
      <form onSubmit={handleSignUp}>
        <div className="sign-up-input-fields">
          <label className="labels">email</label>
          <input className="sign-up-input" type="email" onChange={e => setEmail(e.target.value)} />
        </div>
        <div className="sign-up-input-fields">
          <label className="labels">password</label>
          <input className="sign-up-input" type="password" onChange={e => setPassword(e.target.value)} />
        </div>
        <div className="sign-up-input-fields">
          <label className="labels">re-enter password</label>
          <input className="sign-up-input" type="password" onChange={e => setReEnterPassword(e.target.value)} />
        </div>
        <div className="sign-up-input-fields">
          <label className="labels">your name</label>
          <input className="sign-up-input" type="name" onChange={e => setName(e.target.value)} />
        </div>
        <div className="sign-up-input-fields">
          <label className="labels">who told you <br></br>about this site</label>
          <input className="sign-up-input" type="text" onChange={e => setReferral(e.target.value)} />
        </div>
        <button className="hidden-submit-btn" disabled={isLoading} type="submit"></button>
      </form>
    </div>
  )
}

export default FFSignUp