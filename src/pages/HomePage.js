import React, { useState } from 'react'
import { useAuth } from "../contexts/AuthContext"

const HomePage = () => {
  const { currentUser } =useAuth()
  const { logout } = useAuth()

  const [error, setError] = useState("None")

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
    <div>
      <div>This is the HomePage</div>
      {currentUser ?
      <button onClick={handleLogout}>Logout FF</button>
      : null }
    </div>
  )
}

export default HomePage