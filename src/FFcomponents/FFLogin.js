import React, { useState } from 'react';
import { Alert } from 'react-bootstrap';
import { useAuth } from '../contexts/AuthContext';
import { useHistory, Link } from 'react-router-dom';

import "./FFLogin.css"

const FFLogin = () => {
  const history = useHistory()

  const { login } = useAuth()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState("")
  const [error, setError] = useState("")

  async function handleLogin(e) {
    e.preventDefault()
    console.log("submitted")

    if (email === "" || password === "") {
      return setError("Email and password are required to log in")
    }
    
    try {
      setIsLoading(true)
      await login(email, password)
      setMessage("Logged in successfully")
      history.push("/")
    } catch {
      setError("Failed to log in")
    }
    setIsLoading(false)
  }

  return (
    <div id="login-container" className="text-align-center bg-blue color-red">
      <div id="login-title">LOGIN</div>
      <div>
      {message && <Alert variant="success" className="font-size-small">{message}</Alert>}
      {error && <Alert variant="danger" className="font-size-small">{error}</Alert>}
      </div>
      <form id="login-form" onSubmit={handleLogin}>
        <div className="login-input-fields">
          <label className="labels">email</label>
          <input className="login-input" type="email" onChange={e => setEmail(e.target.value)} />
        </div>
        <div className="login-input-fields">
          <label className="labels">password</label>
          <input className="login-input" type="password" onChange={e => setPassword(e.target.value)} />
        </div>
        <div id="forgot-password-link-div">
          <Link id="forgot-password-link" to="/forgot-password">forgot password?</Link>
        </div>
        <div>
          <button id="login-enter-btn" className="red-button" disabled={isLoading} type="submit">Enter</button>
        </div>
      </form>
      
    </div>
  )
}

export default FFLogin