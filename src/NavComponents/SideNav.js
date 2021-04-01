import React, { useState } from "react";
import { HashLink } from "react-router-hash-link";
import { Link } from 'react-router-dom';
import { useAuth } from "../contexts/AuthContext"
import styled from "styled-components";


const Ul = styled.ul`
  list-style: none;
  display: none;
  flex-flow: row nowrap;
  padding: 56px 40px;
  li {
    padding: 18px 10px;
    text-align: center;
  }
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #fad4cd;
    position: fixed;
    transform: ${({ openSideNav }) => openSideNav ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    display:flex;
    right: 0;
    height: 100vh;
    width: 100%;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
  }
  .side-nav-button {
    background-color: Transparent;
    background-repeat: no-repeat;
    color: #1e365c;
    border: none;
    cursor: pointer;
    overflow: hidden;
    outline: none;
    font-size: x-large;
    margin: auto;
    padding: 0;
  }
  a {
    color: #1e365c !important;
  }
  .log-in, .log-out {
    width: 150px;
    border: 2px solid #1e365c !important;
  }
`;

const SideNav = ({ openSideNav, setOpenSideNav }) => {
  const { currentUser } = useAuth()
  const { logout } = useAuth()

  const [message, setMessage] = useState("")
  const [error, setError] = useState("")

  const handleLogout = () => {
    setMessage("")
    try {
      logout()
      setMessage("Successfully logout")
      setOpenSideNav(false)
    } catch {
        setError("Failed to logout")
    }
  }
  return (
    <Ul openSideNav={openSideNav}>
      <div className="side-nav-container">
        <li>
          <button className="side-nav-button" onClick={() => setOpenSideNav(false)}>
            <Link to="/">Home</Link>
          </button>
        </li>
        <hr />
        
        {
          currentUser ?
          <>
            <li>
              <button className="side-nav-button" onClick={() => setOpenSideNav(false)}>
                <HashLink smooth to="/#a-few-words-from-us">A Few Words</HashLink>
              </button>
            </li>
            <hr />
            <li>
              <button className="side-nav-button" onClick={() => setOpenSideNav(false)}>
                <Link to="/my-good-single-christian-friends">My GSCFs</Link>
              </button>
            </li>
            <hr />
            <li>
              <button className="side-nav-button log-out" onClick={handleLogout}>
                Log Out
              </button>
            </li>
          </>
          :
          <>
            <li>
              <button className="side-nav-button" onClick={() => setOpenSideNav(false)}>
                <HashLink smooth to="/#step-1">Steps</HashLink>
              </button>
            </li>
            <hr />
            <li>
              <button className="side-nav-button" onClick={() => setOpenSideNav(false)}>
                <HashLink smooth to="/#a-few-words-from-us">A Few Words</HashLink>
              </button>
            </li>
            <hr />
            <li>
              <button className="side-nav-button log-in" onClick={() => setOpenSideNav(false)}>
                <Link to="/login">Log In</Link>
              </button>
            </li>
          </>
        }
          
      </div>
    </Ul>
  )
}

export default SideNav