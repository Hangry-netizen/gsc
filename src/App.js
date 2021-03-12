import React, { useState } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage'
import FFLoginPage from './pages/FFLoginPage'
import ForgotPasswordPage from "./pages/ForgotPasswordPage"
import './App.css';

function App() {
  const [role, setRole] = useState("")
  return (
    <div className="App">
      <Switch>
        <Route exact path="/"><HomePage /></Route>
        <Route exact path="/login"><FFLoginPage role={role} setRole={setRole} /></Route>
        <Route exact path="/forgot-password"><ForgotPasswordPage /></Route>

        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
