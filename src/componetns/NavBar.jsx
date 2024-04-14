import React from "react";
import { FcSalesPerformance } from "react-icons/fc";
import { IoMdContacts } from "react-icons/io";
import { NavLink } from "react-router-dom";


const NavBar=()=>{
    return (
      <>
        <div className="nav">
          <div className="nav-container">
            <div className="logo">
              <a href="/">
                <img
                  src="/images/NigusLogo.png"
                  alt="Logo"
                  className="logoImg"
                />
              </a>
            </div>
            <div className="nav-manu">
              <ul>
                <li>
                  <NavLink to="/" className="nav-link">
                    Services
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/solutions" className="nav-link">
                    Solutions
                  </NavLink>
                </li>
                <li>
                  <NavLink to="./industries" className="nav-link">
                    Industries
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/about" className="nav-link">
                    About Us
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/contact" className="nav-link">
                    Contact Us
                  </NavLink>
                </li>
                <NavLink to="/contact" className="nav-menu-btn">
                  <FcSalesPerformance className="sales_icon" />
                  Sales
                </NavLink>
                <NavLink to="/contact" className="nav-menu-btn">
                  <IoMdContacts className="contact_icon" />
                  Contact
                </NavLink>
              </ul>
            </div>
          </div>
        </div>
      </>
    );
};

export default NavBar;