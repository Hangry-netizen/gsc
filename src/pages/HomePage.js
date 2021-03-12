import React, { useState } from 'react';
import { useAuth } from "../contexts/AuthContext";
import Introduction from "../HomeComponents/Introduction";
import Step1 from "../HomeComponents/Step1";
import Step2 from "../HomeComponents/Step2";
import Step3 from "../HomeComponents/Step3";
import Step4 from "../HomeComponents/Step4";
import Step5 from "../HomeComponents/Step5";
import Resources from "../HomeComponents/Resources";
import AFewWords from "../HomeComponents/AFewWords";
import SingleCommunities from "../HomeComponents/SingleCommunities";
import Question from "../HomeComponents/Question";
import '../HomeComponents/HomePage.css'

export default function HomePage() {
/*
    const { currentUser } = useAuth()
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
*/
  return (
    <div id="homepage">
      {/* 
      <div>
        {currentUser ? <button onClick={handleLogout}>Logout FF</button>
        : null }
      </div>
      */}
      <Introduction />
      <Step1 />
      <Step2 />
      <Step3 />
      <Step4 />
      <Step5 />
      <Resources />
      <AFewWords />
      <SingleCommunities />
      <Question />
    </div>
  )
}
