import React, { useEffect, useState } from "react";
import "./Nav.css";

function Nav() {
  const [show, handleShow] = useState(false);

  //   useEffect(() => {
  //     window.addEventListener("scroll", () => {
  //       if (window.scrollY > 100) {
  //         handleShow(true);
  //       } else handleShow(false);
  //     });
  //     return () => {
  //       window.removeEventListener("scroll");
  //     };
  //   }, []);

  return (
    <div className={`nav ${show && "nav_black"}`}>
      <img className="nav-logo" src={require(`./Movie.png`)} alt="Logo" />
      <img className="nav-Avatar" src={require(`./user.png`)} alt="Avatar" />
    </div>
  );
}

export default Nav;
