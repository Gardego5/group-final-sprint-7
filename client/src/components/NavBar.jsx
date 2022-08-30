import styled from "styled-components";
import { NavLink } from "react-router-dom";

import HamburgerImg from "../assets/hamburger.svg";
import LogoImg from "../assets/logo.png";
import { useState } from "react";

const StyledNav = styled.nav`
  position: sticky;
  background: #051622;
  display: flex;
  align-items: center;
  padding: 0.5rem;
  gap: 1rem;
  border: 0.0625rem solid #deb992;
  & > * {
    z-index: 5;
  }
  & img#logo {
    width: 3rem;
    border-radius: 50%;
    aspect-ratio: 1 / 1;
    object-fit: contain;
    background: #214963;
  }
  & p#warning {
    text-transform: uppercase;
    color: #f24e1e;
  }
  & button#menu-button {
    background: #0d3a59;
    border-radius: 0.5rem;
    border: none;
    width: 3rem;
    aspect-ratio: 1 / 1;
    margin-left: auto;
    padding: 0.5rem;
    cursor: pointer;
  }
  & ul#links {
    position: absolute;
    top: 4.375rem;
    left: 0rem;
    display: ${({ showLinks }) => (showLinks ? "flex" : "none")};
    flex-direction: column;
    width: 100%;
    padding: 0;
    margin: 0;
  }
  & ul#links li {
    margin: 0;
    border-bottom: 0.125rem solid #1ba098;
  }
  & ul#links li:last-child {
    border: 0;
  }
  & ul#links li a {
    height: 4rem;
    display: grid;
    place-content: center;
    margin: 0;
    background: #214963;
    color: #1ba098;
    font-size: 2rem;
    text-decoration: none;
  }
  & div.overlay {
    position: absolute;
    top: 4.375rem;
    right: 0;
    width: 100vw;
    height: calc(100vh - 4.5rem );
    z-index: 4;
    background-color: #0000;
  }
`;

const NavBar = () => {
  const [showing, updateShowing] = useState(false);

  const toggleShowing = (event) => updateShowing(!showing);

  return (
    <StyledNav showLinks={showing}>
      {showing ? <div className="overlay" onClick={toggleShowing}></div> : ""}
      <NavLink to="/">
        <img src={LogoImg} alt="logo" id="logo" />
      </NavLink>

      <p id="warning">Acting as Admin</p>

      <button id="menu-button" onClick={toggleShowing}>
        <img src={HamburgerImg} alt="menu" />
      </button>

      <ul id="links">
        <li onClick={toggleShowing}>
          <NavLink to="/announcements">Home</NavLink>
        </li>
        <li onClick={toggleShowing}>
          <NavLink to="/teams">Teams</NavLink>
        </li>
        <li onClick={toggleShowing}>
          <NavLink to="/registry">Users</NavLink>
        </li>
        <li onClick={toggleShowing}>
          <NavLink to="/">Logout</NavLink>
        </li>
      </ul>
    </StyledNav>
  );
};

export default NavBar;
