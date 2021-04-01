import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from "../contexts/AuthContext"
import MatchesUpLogo from "../utils/MatchesUpLogo.svg"
import './Navbar.css'

export default function Navbar() {
  const { currentUser } = useAuth()
  const { logout } = useAuth()

  const [message, setMessage] = useState("")
  const [error, setError] = useState("")

  const handleLogout = () => {
    setMessage("")
    try {
      logout()
      setMessage("Successfully logout")
    } catch {
        setError("Failed to logout")
    }
  }
  return (
    <div id="navbar" className="color-red bg-blue">
      <div id="nav-left">
        <Link to="/" id="matches-up-link">
          <img src={MatchesUpLogo} alt="MatchesUpLogo" id="matches-up-logo-nav"/>
          <span id="matches-up-title">MatchesUp</span>
        </Link>
      </div>
      <div id="nav-right">
        <Link to="/" id="home-link">HOME</Link>        
        {currentUser 
        ?
        <>
          <Link to="/my-good-single-christian-friends" id="my-gscfs">My GSCFs</Link>
          <Link onClick={handleLogout} id="logout-link">LOGOUT</Link>
        </>
        :
        <Link to="/login" id="login-link">LOGIN</Link>
        }
      </div>
    </div>
  )
}
