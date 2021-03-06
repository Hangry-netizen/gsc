import React, { useState } from 'react';
import FFLogin from '../FFcomponents/FFLogin'
import FFSignUp from '../FFcomponents/FFSignUp'

const FFLoginPage = ({ role, setRole }) => {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("None")

  return (
    <div className="login-page">
      <FFLogin
      role={role} setRole={setRole}
      />
      <FFSignUp 
      role={role} setRole={setRole}
      />
    </div>
  )
}

export default FFLoginPage