import React, { useState } from 'react';
import FFLogin from '../FFcomponents/FFLogin'
import FFSignUp from '../FFcomponents/FFSignUp'

const FFLoginPage = ({ role, setRole }) => {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")

  return (
    <div className="login-page">
      <FFLogin 
      isLoading={isLoading} setIsLoading={setIsLoading}
      error={error} setError={setError}
      role={role} setRole={setRole}
      />
      <FFSignUp 
      isLoading={isLoading} setIsLoading={setIsLoading}
      error={error} setError={setError}
      role={role} setRole={setRole}
      />
    </div>
  )
}

export default FFLoginPage