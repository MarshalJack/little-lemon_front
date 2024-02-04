import React from "react";

export default function Footer() {
  return (
    <footer>
      <img src="./img/logo .svg" alt="logo"></img>
      <div className="bottom_nav">
        <ul>
          <li>
            <p>Doormat Navigation</p>
          </li>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Menu</a>
          </li>
          <li>
            <a href="">Reservations</a>
          </li>
          <li>
            <a href="">Order Online</a>
          </li>
          <li>
            <a href="">Login</a>
          </li>
        </ul>
        <ul>
          <li>
            <p>Contacts</p>
          </li>
          <li>
            <a href="">Adress</a>
          </li>
          <li>
            <a href="">Phone number</a>
          </li>
          <li>
            <a href="">Email</a>
          </li>
        </ul>
        <ul>
          <li>
            <p>Social Media Links</p>
          </li>
          <li>
            <a href="">Facebook</a>
          </li>
          <li>
            <a href="">Instagram</a>
          </li>
          <li>
            <a href="">Twitter</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
