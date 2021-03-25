import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { url } from "../App"
import { useAuth } from "../contexts/AuthContext"

export default function FFProfilePage() {
  const { currentUser } = useAuth()
  const [GSCs, setGSCs] = useState([])

  useEffect(() => {
    axios.get (`${url}/users/`)
      .then((response) => {
        setGSCs(response.data)
        console.log(currentUser)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  return (
    <div> Profile Page {currentUser.displayName}
    {
      GSCs.map((GSC) => {
        if (GSC.ff_email === currentUser.email) {
          return (
          <div>
            <button>{GSC.name}</button>
          </div>
          )
        }
      })
    }
  </div>
  )
}