import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuth } from "../contexts/AuthContext";
import { url } from "../App";

export default function ExistingGSCs() {
  const { currentUser } = useAuth()
  const [ExistingGSCs, setExistingGSCs] = useState([])

  useEffect(() => {
    axios.get (`${url}/users/`)
      .then((response) => {
        console.log(response.data)
        setExistingGSCs(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  return (
    <div>
      {
        ExistingGSCs.map((ExistingGSC) => {
          if (ExistingGSC.ff_email === currentUser.email) {
            return (
            <div>
              <button className="gsc-profile-button color-red Essays1743">{ExistingGSC.name}</button>
            </div>
            )
          }
        })
      }
    </div>
  )
}
