/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
// import {HiOutlineMenuAlt4} from 'react-icons/hi'
// import {FaRegTimesCircle} from 'react-icons/fa'
import foto from "../../img/Vector.svg";
import busqueda from "../../img/bx-search-alt.svg";
import logo from "../../img/logo.png";

export const Header = () => {
  //const [click, setClick] = useState(false);
 // const handleClick = () => setClick(!click);

  return (
  
    <header className="navbar">
     <div className="navbar__hijo ">
         <img src={foto} alt="" />
     </div>
     <div className="navbar__hijo hola">
     <img src={logo} alt="" />
     </div>
     <div className="navbar__hijo">
     <img src={busqueda} alt="" />
</div>

    </header>
   
  );
};
