/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
// import {HiOutlineMenuAlt4} from 'react-icons/hi'
// import {FaRegTimesCircle} from 'react-icons/fa'
import foto from "../../img/Vector.svg";

export const Header = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <div className="navbar">
      <div className="container">
        <div className="hamburger" onClick={handleClick}>
          {click ? (
            <img src={foto} alt="foto__menu" className="ico" />
          ) : (
            <img src={foto} alt="foto__menu" className="ico" />
          )}
        </div>
        <h1>Estate</h1>
        <button className="btn">Sign In</button>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li>
            <a href="#">Search</a>
          </li>
        </ul>
      </div>
    </div>
  );
};
