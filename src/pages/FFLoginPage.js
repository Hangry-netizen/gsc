import React, { useState } from 'react';
import FFLogin from '../FFComponents/FFLogin';
import FFSignUp from '../FFComponents/FFSignUp';

const FFLoginPage = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("None")

  return (
    <div className="login-page">
      <FFLogin />
      <FFSignUp />
    </div>
  )
}

export default FFLoginPage