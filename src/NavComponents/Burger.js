import React, { useState } from "react";
import styled from "styled-components";
import SideNav from "./SideNav";

const StyledBurger = styled.div`
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 15px;
  right: 20px;
  z-index: 20;
  display: none;
  @media (max-width: 720px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }
  div {
    width: 2rem;
    height: 0.25rem;
    background-color: #cccccc;
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    &:nth-child(1) {
      transform: ${({ openSideNav }) => openSideNav ? 'rotate(45deg)' : 'rotate(0)'};
    }
    &:nth-child(2) {
      transform: ${({ openSideNav }) => openSideNav ? 'translateX(100%)' : 'translateX(0)'};
      opacity: ${({ openSideNav }) => openSideNav ? 0 : 1};
    }
    &:nth-child(3) {
      transform: ${({ openSideNav }) => openSideNav ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`;

const Burger = () => {
  const [openSideNav, setOpenSideNav] = useState(false)
  return (
    <>
      <StyledBurger openSideNav={openSideNav} onClick={() => setOpenSideNav(!openSideNav)}>
        <div />
        <div />
        <div />
      </StyledBurger>
      <SideNav openSideNav={openSideNav} setOpenSideNav={setOpenSideNav} />
    </>
  )
}

export default Burger