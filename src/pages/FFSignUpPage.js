import React, { useState } from 'react';
import { Alert } from 'react-bootstrap';
import { useAuth } from '../contexts/AuthContext'
import { useHistory, Link } from "react-router-dom";

import '../FFComponents/FFSignUpPage.css'

const FFSignUpPage = ({ showLogin, setShowLogin, showSignUp, setShowSignUp }) => {
  const history = useHistory()
  const { signup } = useAuth()

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
        setMessage("Successfully created an account and logged in")
        history.push("/")
    } catch {
      setError("Failed to create an account")
    }
    setIsLoading(false)
  }

  return (
    <div id={showLogin ? "sign-up-containter" : "display-none"} className="color-blue text-align-center">
      <div id="sign-up-title">
        <div id="create" className="bold">CREATE</div>
        <div id="FF">FAITHFUL FRIEND</div>
        <div id="account">account</div>
      </div>
      <div id="sign-up-alert-div">
      {message && <Alert variant="success" className="font-size-small">{message}</Alert>}
      {error && <Alert variant="danger" className="font-size-small">{error}</Alert>}
      </div>
      <form onSubmit={handleSignUp} id="sign-up-form">
        <div className="sign-up-input-field">
          <label className="sign-up-labels">email</label>
          <input className="sign-up-input" type="email" onChange={e => setEmail(e.target.value)} />
        </div>
        <div className="sign-up-input-field">
          <label className="sign-up-labels">password</label>
          <input className="sign-up-input" type="password" onChange={e => setPassword(e.target.value)} />
        </div>
        <div className="sign-up-input-field">
          <label className="sign-up-labels">re-enter password</label>
          <input className="sign-up-input" type="password" onChange={e => setReEnterPassword(e.target.value)} />
        </div>
        <div className="sign-up-input-field">
          <label className="sign-up-labels">your name</label>
          <input className="sign-up-input" type="name" onChange={e => setName(e.target.value)} />
        </div>
        <div className="sign-up-input-field">
          <label className="sign-up-labels">who told you <br></br>about this site</label>
          <input className="sign-up-input" type="text" onChange={e => setReferral(e.target.value)} />
        </div>
        <button id="sign-up-enter-btn" className="red-button" disabled={isLoading} type="submit">Enter</button>
        <div>
          <Link id="sign-up-page-login-link" to="/login" className="color-red bold">Already have an account? Login here!</Link>
        </div>
      </form>
    </div>
  )
}

export default FFSignUpPage