import React, { useEffect,useState } from "react";

import "./navbar.css";
import { Link, NavLink } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import Logo from './logo/logo.png';
export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    setIsScrolled(scrollPosition > 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={isScrolled ? "scrolled" : ""}>
      <img src={Logo}/>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
      <li>
      <NavLink to="/">Home</NavLink>

        </li>
        <li>
        <NavLink to="/about">About</NavLink>

        </li>
        <li>
        <NavLink to="/shop">Shop</NavLink>

        </li>
        <li>
        <NavLink to="/contact">Contact</NavLink>

        </li>
        <li>
          <NavLink to="/cart"> <ShoppingCart size={32} /></NavLink>
        </li>
      </ul>
    </nav>
  );
};