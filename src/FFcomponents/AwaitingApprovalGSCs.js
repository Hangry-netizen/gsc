import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuth } from "../contexts/AuthContext";
import { url } from "../App";

export default function AwaitingApprovalGSCs() {
  const { currentUser } = useAuth()
  const [AwaitingGSCs, setAwaitingGSCs] = useState([])
  const [error, setError] = useState("")

  useEffect(() => {
    axios.get (`${url}/approvals/`)
      .then((response) => {
        setAwaitingGSCs(response.data)
      })
      .catch((error) => {
        setError(error)
      })
  }, [])

  return (
    <div>
      {
      AwaitingGSCs.map((AwaitingGSC) => {
        if (AwaitingGSC.ff_email === currentUser.email) {
          return (
          <div>
            <button className="gsc-profile-button color-red Essays1743" key="{AwaitingGSC}">{AwaitingGSC.gsc_name}</button>
            <div id="awaiting-txt" className="color-red font-size-small">Awaiting consent and screening</div>

          </div>
          )
        }
      })
    }
    </div>
  )
}
