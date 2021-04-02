import axios from 'axios';
import React, { useState } from 'react';
import { url } from "../App";

export default function SingleCommunities() {
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  
  const handleSubmit = e => {
    e.preventDefault()
    setError("")
    setMessage("")

    if (email === "") {
      return setError("Email is required!")
    }
    setError("")
    axios({
      method: 'POST',
      url: `${url}/single-communities/`,
      data: {
        email: email
      }
    })
    .then(response => {
      console.log(response)
      setMessage("Submited successfully")
      e.target.reset()
      setEmail("")
    })
    .catch(error => {
      console.log(error)
      setError("Failed to submit")
    })
    setIsLoading(false)
  }

  return (
    <div id="single-communities" className="bg-beach text-align-justify homepage-container-padding-font">
      <p className="color-blue">We are considering looking for ways to connect singles who are interested in forming singles communities that pursue God together (that may mean living together or friends who hang out physically/virtually).</p>
      <div className="color-red">Leave your email address here if you'd like to receive information when this initiative takes off.</div>
      <form onSubmit={e => handleSubmit(e)} id="single-communities-form">
        <input id="single-communities-input" type="email" onChange={e => setEmail(e.target.value)} />
        <button disabled={isLoading} type="submit" id="single-communities-form-submit-btn" className="color-red">SUBMIT</button>
      </form>
      <div id="alert-div">
        {error && <span className="color-red">{error}</span>}
        {message && <span className="color-green">{message}</span>}
      </div>
    </div>
  )
}
