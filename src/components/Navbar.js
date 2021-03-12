import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from "../contexts/AuthContext"
import './Navbar.css'

export default function Navbar() {
  const { currentUser } = useAuth()
  const { logout } = useAuth()

  const [message, setMessage] = useState("")
  const [error, setError] = useState("")

  const handleLogout = () => {
    try {
      logout()
      console.log("Successfully logout")
    } catch {
        setError("Failed to logout")
    }
    console.log(error)
  }
  return (
    <div id="navbar" className="color-red bg-blue">
      <div id="nav-left">
        <Link to="/" id="matches-up-link">
          <h2 className="margin-0">MatchesUp</h2>
        </Link>
      </div>
      <div id="nav-right">
        <Link to="/articles" id="articles-link">ARTICLES</Link>
        
        {currentUser 
        ?
        <Link onClick={handleLogout}>LOGOUT</Link>
        :
        <Link to="/login" id="login-link">LOGIN</Link>
        }
      </div>
    </div>
  )
}
