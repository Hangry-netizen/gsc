import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import Navbar from './NavComponents/Navbar';
import HomePage from './pages/HomePage';
import DonationPage from './pages/DonationPage';
import TermsAndPrivacyPage from './pages/TermsAndPrivacyPage';
import FFLoginPage from './pages/FFLoginPage';
import FFSignUpPage from './pages/FFSignUpPage';
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import FFProfilePage from './pages/FFProfilePage';
import { useAuth } from "./contexts/AuthContext";

export const url = 'http://localhost:5000/api/v1';
/*https://matches-up.herokuapp.com/api/v1*/
function App() {
  const { currentUser } = useAuth()
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/"><HomePage /></Route>
        <Route exact path="/terms-and-privacy-policy"><TermsAndPrivacyPage /></Route>
        <Route exact path="/donation-info"><DonationPage /></Route>
        {
        currentUser
        ?
        <Route exact path="/my-good-single-christian-friends"><FFProfilePage /></Route>
        :
        <>
          <Route exact path="/login"><FFLoginPage /></Route>
          <Route exact path="/sign-up"><FFSignUpPage /></Route>
          <Route exact path="/forgot-password"><ForgotPasswordPage /></Route>
        </>
        }

        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
