import React from 'react';
import { Link } from "react-router-dom";

export default function Step1() {
  return (
    <div id="Step1" className="bg-blue text-align-left">
      <h1 id="Step1-title" className="color-red">STEP 1: The Entry</h1>
      <div className="color-red">With your Good Single Christian Friend's permission, tell us about your GSCF!</div>
      <br />
      <span className="color-grey">Create a Faithful Friend account</span>
      <Link to="/login">
        <button id="start-now-btn" className="red-button">START NOW</button>
      </Link>
      <div>
        {/*Supposed to be a link */}
        <button id="a-few-words-link" className="font-size-small color-red">Read A FEW WORDS FROM US before proceeding</button>
      </div>
      <br />
      <span className="color-grey">Create a profile for you GSCF</span>
      <span className="color-grey"> (appear anonymous or link a social media account)</span>

    </div>
  )
}
