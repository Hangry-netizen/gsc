import React, { useState } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import FFLoginPage from './pages/FFLoginPage';
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import ArticlesPage from './pages/ArticlesPage'

function App() {
  const [role, setRole] = useState("")
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/"><HomePage /></Route>
        <Route exact path="/login"><FFLoginPage role={role} setRole={setRole} /></Route>
        <Route exact path="/forgot-password"><ForgotPasswordPage /></Route>
        <Route exact path="/articles"><ArticlesPage /></Route>

        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
