import React, { useEffect } from "react";
import NavBar from "./NavBar";
import '../StyleSheets/Header.css'
const Header = () => {
    const controlNavbar = () => {
      if (window.scrollY) {
        document.getElementById("headerId").classList.add("darker-header");
      }
      if (window.scrollY === 0) {
        document.getElementById("headerId").classList.remove("darker-header");
      }
    };

    useEffect(() => {
      window.addEventListener("scroll", controlNavbar);
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }, []);
  return ( 
    <header className='heading' id="headerId">
      <NavBar />
    </header>
  );
};

export default Header;
