import React from 'react';
import { HiBuildingOffice } from "react-icons/hi2";
import { FaHeadphones } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";

const Contact = () =>{
    return (
      <>
        <div className="contact">
          <div className="contact-container">
            <h1>Contact Us</h1>
            <div className="contact-options">
              <div className="location">
                <HiBuildingOffice className='contact-logo'/>
                <h2>Office Locations</h2>
                <h3>Bangalore, India</h3>
                <p>
                  No.8, 20th Main Road, Koramanagala 5th Block,
                  Bangalore-560095, Karnataka
                </p>
                <p>Opposite to HDFC/Federal Bank, Above Gocolors</p>
                <h3>Chennai, India</h3>
                <p>
                  No.3, 2nd floor, Antona apartments, Ayyavoo street, Shenoy
                  Nagar, Chennai-600030, Tamilnadu
                </p>
              </div>
              <div className="sales">
                <IoMailOutline className='contact-logo'/>
                <h2>For Sales & Support</h2>
                <p>For any sales & support contact us at</p>
                <ol>
                  <li>sales@nigussystems.com</li>
                  <li>saravanaguptha@nigussystems.com</li>
                  <li>India +91 98806 98312</li>
                </ol>
              </div>
              <div className="global">
                <FaHeadphones className='contact-logo'/>
                <h2>Global Presence</h2>
                <h3>USA</h3>
                <h3>Europe</h3>
                <h3>Austalia</h3>
                <h3>Middle East</h3>
                <h3>India</h3>
              </div>
            </div>
          </div>
        </div>
      </>
    );
};

export default Contact;