import React, { useState } from "react";
// import { HeaderWrapper } from "./styles/Header";
import Navbar from "./Nar";
import MenuButton from "./MenuButton";
import logo from "../../../img/logo.png";

function Header() {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div>
     
      <Navbar open={open} />
      <MenuButton open={open} handleClick={handleClick} />
  
      <div className="navbar__hijo ">
        <img src={logo} alt="" />
      </div>
      <div className="navbar__hijo hola">
      <svg width="23" height="24" viewBox="0 0 23 24" xmlns="http://www.w3.org/2000/svg">
<path d="M9.58335 18C11.3524 18 12.9787 17.365 14.2763 16.312L18.4891 20.708L19.8442 19.294L15.6314 14.898C16.6415 13.543 17.25 11.846 17.25 10C17.25 5.589 13.8106 2 9.58335 2C5.35615 2 1.91669 5.589 1.91669 10C1.91669 14.411 5.35615 18 9.58335 18ZM9.58335 4C12.7545 4 15.3334 6.691 15.3334 10C15.3334 13.309 12.7545 16 9.58335 16C6.41223 16 3.83335 13.309 3.83335 10C3.83335 6.691 6.41223 4 9.58335 4Z"/>
<path d="M10.9365 8.58603C11.2997 8.96603 11.5 9.46802 11.5 10H13.4166C13.4166 8.93502 13.018 7.93102 12.2916 7.17202C10.8406 5.66002 8.32502 5.66002 6.87506 7.17202L8.22823 8.58803C8.95656 7.83003 10.212 7.83203 10.9365 8.58603Z"/>
</svg>
        {/* <img className=" hola" src={busqueda} alt="" /> */}
      </div>
    </div>
  );
}

export default Header;