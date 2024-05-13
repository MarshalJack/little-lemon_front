import React from "react";
import { NavLink } from "react-router-dom";
import "../App.css";

export default function Nav() {
  return (
    <nav>
      <img src="./img/Logo.svg" alt="logo"></img>
      <ul>
        <li>
          <NavLink to="/" activeClassName="nav_checked">
            Home
          </NavLink>
        </li>
        <li>
          <a href="">About</a>
        </li>
        <li>
          <a href="">Menu</a>
        </li>
        <li>
          <NavLink to="/reservation" activeClassName="nav_checked">
            Reservation
          </NavLink>
        </li>
        <li>
          <a href="">Order Online</a>
        </li>
        <li>
          <a href="">Login</a>
        </li>
      </ul>
    </nav>
  );
}
