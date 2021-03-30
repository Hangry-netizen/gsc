import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import FFLoginPage from './pages/FFLoginPage';
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import ArticlesPage from './pages/ArticlesPage';
import DonationPage from './pages/DonationPage';
import FFProfilePage from './pages/FFProfilePage';
import { useAuth } from "./contexts/AuthContext"

export const url = 'http://127.0.0.1:5000/api/v1';

function App() {
  const { currentUser } = useAuth()
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/"><HomePage /></Route>
        <Route exact path="/login"><FFLoginPage /></Route>
        <Route exact path="/forgot-password"><ForgotPasswordPage /></Route>
        <Route exact path="/articles"><ArticlesPage /></Route>
        <Route exact path="/donation-info"><DonationPage /></Route>
        {
        currentUser
        ?
        <Route exact path="/my-good-single-christian-friends"><FFProfilePage /></Route>
        :
        null
        }

        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
