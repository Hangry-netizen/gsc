import React, { useState } from 'react';
import { Alert } from 'react-bootstrap';
import { useAuth } from '../contexts/AuthContext';
import { Link } from 'react-router-dom';

import "./ForgotPassword.css"

const ForgotPassword = () => {
  const { resetPassword } = useAuth()
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState("")
  const [error, setError] = useState("")

  async function handleSubmit(e) {
    e.preventDefault()
    console.log("submitted")
    
    try {
      setMessage("")
      setIsLoading(true)
      await resetPassword(email)
      setMessage("Check your inbox for further instructions")
    } catch {
      setError("Failed to reset password")
    }
    setIsLoading(false)
  }

  return (
    <div className="forgot-password-container">
      <div id="forgot-password-title">RESET PASSWORD</div>
      {error && <Alert variant="danger">{error}</Alert>}
      {message && <Alert variant="success">{message}</Alert>}
      <form onSubmit={handleSubmit}>
        <div className="forgot-password-input-field">
          <label>email</label>
          <input type="email" onChange={e => setEmail(e.target.value)} />
        </div>
        <button disabled={isLoading} type="submit"></button>
      </form>
      <div>
        <Link className="login" to="/login">Login</Link>
      </div>
    </div>
  )
}

export default ForgotPassword