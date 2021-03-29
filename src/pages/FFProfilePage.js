import React from 'react';
import { useAuth } from "../contexts/AuthContext";
import CreateGSC from "../FFComponents/CreateGSC";
import AwaitingApprovalGSCs from "../FFComponents/AwaitingApprovalGSCs";
import ExistingGSCs from "../FFComponents/ExistingGSCs";
import "../FFComponents/FFProfilePage.css"

export default function FFProfilePage() {
  const { currentUser } = useAuth()

  return (
    <div id="FFProfilePage" className="bg-beach text-align-center"> 
      <div id="welcome-ff" className="color-red Essays1743">
        Welcome, {currentUser.displayName}!
      </div>
      <CreateGSC />
      <div id="manage-profiles" className="color-blue">MANAGE GSCF PROFILES</div>
      <AwaitingApprovalGSCs />
      <ExistingGSCs />
    </div>
  )
}