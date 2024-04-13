import React from "react";
import { FaLinkedin } from "react-icons/fa6";

const Footer=()=>{
    return (
      <>
        <footer>
          <div className="footer">
            <img src="/images/NigusLogo.png" alt="Logo" />
            <h2>Nigus Systems Private Limited</h2>
            <p>
              We work across 24 x 7 to help you run your business without any
              hassle.
            </p>
            <FaLinkedin className="in"/>
            <p>&copy; 2024 Nigus Systems Pvy Ltd</p>
          </div>
        </footer>
      </>
    );
};

export default Footer;