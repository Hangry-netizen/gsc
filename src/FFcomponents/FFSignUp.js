import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext'

import './FFSignUp.css'

const FFSignUp = ({ isLoading, setIsLoading, error, setError, role, setRole }) => {
  const { signup, verification } = useAuth()

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  async function handleSignUp(e) {
    e.preventDefault()
    console.log("submitted sign up")
    try {
      setIsLoading(true)
      await signup(email, password, name)
      await verification().then(function () {
        setRole("FF")
        console.log("Verification email sent")
      })
    } catch {
      setError("Failed to sign up")
    }
    setIsLoading(false)
  }

  return (
    <div className="sign-up">
      <span className="sign-up-title">
        <div className="create">CREATE</div>
        <div className="FF">FATIHFUL FRIEND</div>
        <div className="account">account</div>
      </span>

      <form onSubmit={handleSignUp}>
        <div className="input-fields">
          <label>email</label>
          <input type="email" onChange={e => setEmail(e.target.value)} />
        </div>
        <div className="input-fields">
          <label>password</label>
          <input type="password" onChange={e => setPassword(e.target.value)} />
        </div>
        <div className="input-fields">
          <label>re-enter password</label>
          <input type="password" onChange={e => setPassword(e.target.value)} />
        </div>
        <div className="input-fields">
          <label>your name</label>
          <input type="name" onChange={e => setName(e.target.value)} />
        </div>
        <div className="input-fields">
          <label>who told you about this site</label>
          <input type="text" onChange={e => setName(e.target.value)} />
        </div>
        <button type="submit">Create account</button> 
      </form>
    </div>
  )
}

export default FFSignUp