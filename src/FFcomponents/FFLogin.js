import React, { useState } from 'react';
import { Alert } from 'react-bootstrap';
import { useAuth } from '../contexts/AuthContext';
import { useHistory, Link } from 'react-router-dom';

import "./FFLogin.css"

const FFLogin = ({ role, setRole }) => {
  const history = useHistory()

  const { currentUser } = useAuth()
  const { login } = useAuth()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)
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
      setRole("FF")
      history.push("/")
    } catch {
      setError("Failed to log in")
    }
    setIsLoading(false)
    console.log(currentUser)
  }

  return (
    <div className="login-container">
      <div className="login-title">LOGIN</div>
      {error && <Alert variant="danger">{error}</Alert>}
      <form onSubmit={handleLogin}>
        <div className="login-input-fields">
          <label>email</label>
          <input type="email" onChange={e => setEmail(e.target.value)} />
        </div>
        <div className="login-input-fields">
          <label>password</label>
          <input type="password" onChange={e => setPassword(e.target.value)} />
        </div>
        <button disabled={isLoading} type="submit"></button>
      </form>
      <div>
      <Link className="forgot-password" to="/forgot-password">forgot password?</Link>
      </div>
    </div>
  )
}

export default FFLogin