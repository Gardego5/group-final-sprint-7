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
    top: 4rem;
    left: 0rem;
    display: ${({ showLinks }) => showLinks ? "flex" : "none"};
    flex-direction: column;
    width: 100%;
    padding: 0;
    margin: 0;
  }
  & ul#links li {
    margin: 0;
    border-bottom: 2px solid #1ba098;
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
`;

const NavBar = () => {
  const [showing, updateShowing] = useState(false);

  const toggleShowing = (event) => updateShowing(!showing);

  return (
    <StyledNav showLinks={showing}>
      <NavLink to="/">
        <img src={LogoImg} alt="logo" id="logo" />
      </NavLink>

      <p id="warning">Acting as Admin</p>

      <button id="menu-button" onClick={toggleShowing}>
        <img src={HamburgerImg} alt="menu" />
      </button>

      <ul id="links">
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/teams">Teams</NavLink></li>
        <li><NavLink to="/users">Users</NavLink></li>
        <li><NavLink to="/logout">Logout</NavLink></li>
      </ul>
    </StyledNav>
  );
}

export default NavBar;
