import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { useAuth } from "../contexts/AuthContext"

export default function Step1() {
  const { currentUser } = useAuth()
  return (
    <div id="step-1" className="bg-blue text-align-left homepage-container-padding">
      <h1 id="step-1-title" className="color-red">STEP 1: The Entry</h1>
      <div className="color-red">With your Good Single Christian Friend's permission, tell us about your GSCF!</div>
      <br />
      <span className="color-grey">Create a Faithful Friend account</span>
      {currentUser 
        ?
        <>
          <Link to="/my-good-single-christian-friends">
            <button id="start-now-btn" className="red-button">START NOW</button>
          </Link>
        </>
        :
        <Link to="/login">
          <button id="start-now-btn" className="red-button">START NOW</button>
        </Link>
      }
      <div>
        <HashLink smooth to="#a-few-words-from-us" id="a-few-words-link" className="font-size-small color-red">Read A FEW WORDS FROM US before proceeding</HashLink>
      </div>
      <br />
      <span className="color-grey">Create a profile for you GSCF</span>
      <span className="color-grey"> (appear anonymous or link a social media account)</span>

    </div>
  )
}
