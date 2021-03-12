import React from 'react'

export default function SingleCommunities() {
  return (
    <div id="SingleCommunities" className="bg-beach text-align-left">
      <p className="color-blue">We are considering looking for ways to connect singles who are interested in forming singles communities that pursue God together (that may mean living together or friends who hang out physically/virtually).</p>
      <div className="color-red">Leave your email address here if you'd like to receive information when this initiative takes off.</div>
      <form>
        <input id="single-communities-input" type="email" />
        <button id="single-communities-form-submit-btn" className="color-red light">SUBMIT</button>
      </form>
    </div>
  )
}
