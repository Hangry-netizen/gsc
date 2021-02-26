import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext'

import "./FFLogin.css"

const FFLogin = ({ isLoading, setIsLoading, error, setError }) => {
  const { login } = useAuth()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  async function handleLogin(e) {
    e.preventDefault()
    console.log("submitted")
    try {
      setIsLoading(true)
      await login(email, password)
    } catch {
      setError("Failed to log in")
    }
    setIsLoading(false)
  }

  return (
    <div className="login-container">
      <div className="login-title">LOGIN</div>
      <form onSubmit={handleLogin}>
        <div className="login-input-fields">
          <label>email</label>
          <input type="email" onChange={e => setEmail(e.target.value)} />
        </div>
        <div className="login-input-fields">
          <label>password</label>
          <input type="password" onChange={e => setPassword(e.target.value)} />
        </div>
        <div className="forgot-password">forgot password?</div>
      </form>
    </div>
  )
}

export default FFLogin