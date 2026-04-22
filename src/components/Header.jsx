import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
// import { FaCheckCircle, FaLanguage, FaWhatsapp } from "react-icons/fa";
// import { IoMdCash } from "react-icons/io";
import { Link } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div>
      <header className="fixed-top">
        {/* <!-- Top Header --> */}
        <div className="header">
          <ul>
            <li className="flex gap-1 align-items-center">
              {/* <IoMdCash color="white" size={17} /> */}
              <Link href="##">Cash on delivery</Link>
            </li>
            <li className="flex gap-1 align-items-center">
              {/* <FaCheckCircle color="white" size={17} /> */}
              <Link href="##">100% genuine</Link>
            </li>
            <li className="flex gap-1 align-items-center">
              {/* <FaLanguage color="white" size={17} /> */}
              <Link href="##">Language</Link>
            </li>
            <li className="flex gap-1 align-items-center">
              {/* <FaWhatsapp color="white" size={17} />{" "} */}
              <Link href="##">WhatsApp</Link>
            </li>
          </ul>
        </div>

        {/* <!-- Navbar --> */}
        <nav className="nav_bar">
          <div className="d-flex align-items-center gap-3">
            {/* Hamburger Menu */}
            <div className="hamburger-menu">
              <GiHamburgerMenu
                size={22}
                onClick={() => {
                  setMenuOpen(!menuOpen);
                }}
              />
            </div>
            {/* Logo */}
            <div>
              <Link to="/">
                <img
                  src="assets/images/atooz_logo.png"
                  alt="Logo"
                  // style={{height: '70px', width: '150px'}}
                />
              </Link>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="navbar_menu">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/products">Products</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          {/* Login Button */}
          <div className="navbar_icon_button">
            <button className="login-btn border-0 px-4 py-1 bg-primary rounded-2">
              <Link to="/login" className="text-white">
                Login
              </Link>
            </button>
          </div>
        </nav>

        {/* ========================= */}
        {/* MOBILE SIDEBAR (STATE) */}
        {/* ========================= */}

        <div className={`mobile-menu ${menuOpen ? "active" : ""}`}>
          {/* Overlay */}
          <div className="overlay" onClick={() => setMenuOpen(false)}></div>

          {/* Sidebar */}
          <div className="sidebar">
            {/* Close Button */}
            <button className="close-btn" onClick={() => setMenuOpen(false)}>
              ✕
            </button>

            <ul>
              <li onClick={() => setMenuOpen(false)}>
                <Link to="/">Home</Link>
              </li>
              <li onClick={() => setMenuOpen(false)}>
                <Link to="/about">About</Link>
              </li>
              <li onClick={() => setMenuOpen(false)}>
                <Link to="/products">Products</Link>
              </li>
              <li onClick={() => setMenuOpen(false)}>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <Link to="/login" className="btn btn-primary w-100 mt-3">
                  Login
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* <!-- Header Section End --> */}
      </header>
    </div>
  );
};

export default Header;
