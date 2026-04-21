import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
// import { FaCheckCircle, FaLanguage, FaWhatsapp } from "react-icons/fa";
// import { IoMdCash } from "react-icons/io";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <header className="fixed-top">
        {/* <!-- Top Header --> */}
        <div class="header">
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
        <nav class="nav_bar">
          <div className="d-flex align-items-center gap-3">
            <div className="hamburger-menu">
              <GiHamburgerMenu
                size={17}
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasScrolling"
                aria-controls="offcanvasScrolling"
              />
            </div>
            
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
          <div class="navbar_menu">
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
          <div class="navbar_icon_button">
            <button className="login-btn border-0 px-4 py-1 bg-primary rounded-2">
              <Link to="/login" className="text-white">
                Login
              </Link>
            </button>
          </div>
        </nav>

        {/* <!-- Header Section End --> */}
      </header>
    </div>
  );
};

export default Header;
