import React from 'react';
import FFLogin from '../FFComponents/FFLogin';
import FFSignUp from '../FFComponents/FFSignUp';

const FFLoginPage = () => {
  return (
    <div className="login-page">
      <FFLogin />
      <FFSignUp />
    </div>
  )
}

export default FFLoginPage