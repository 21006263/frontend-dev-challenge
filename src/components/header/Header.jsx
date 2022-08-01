/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
// import {HiOutlineMenuAlt4} from 'react-icons/hi'
// import {FaRegTimesCircle} from 'react-icons/fa'
import foto from "../../img/Vector.svg";
import busqueda from "../../img/bx-search-alt.svg";

export const Header = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <div className="navbar">
      <div className="container">
        <div className="hamburger" onClick={handleClick}>
          {click ? (
            <img src={foto} alt="foto__menu" className="icon" />
          ) : (
            <img src={foto} alt="foto__menu" className="icon" />
          )}
        </div>
        <dir><img src={foto} alt="" /></dir>
        <ul className={click ? "nav__menu active" : "nav__menu"}>
         
            <a href="#"><img src={busqueda} alt="b" /></a>
          
        </ul>
      </div>
    </div>
  );
};
