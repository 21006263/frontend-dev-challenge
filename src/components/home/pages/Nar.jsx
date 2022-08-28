import React from "react";


function Navbar({ open }) {
  return (
    <div open={open}>
      <a href="#!">Link</a>
      <a href="#!">Link</a>
      <a href="#!">Link</a>
      <a href="#!">Link</a>
    </div>
  );
}

export default Navbar;