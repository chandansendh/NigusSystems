import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";



const Hero=()=>{
    return (
      <>
        <div className="main-vido">
          <div className="main-text">
            <div className="header-text">
              <h1 className="header-h">
                Revolutionizing Enterprise with Innovative Solutions
              </h1>
              <p className="header-p">
                Modernize the organization with innovative software solutions,
                applications and integrations
              </p>
            </div>
            <div className="header-logo">
              <img
                src="/images/NigusLogo.png"
                alt="header logo"
                className="header-img"
              />
            </div>
          </div>
          <div className="maingif">
            <img src="/images/NigusServices.gif" alt="gif" className="gif" />
          </div>
          <div className="dtl">
            <h1 className="dtl-header">
              Empowering Our Partners For 10+ Years
            </h1>
            <div className="dtl-manu">
              <div className="dtl-list col-xs-6 col-md-3">
                <span className="dtl-title">Projects</span>
                <p className="dtl-body">800+ Projects</p>
              </div>
              <div className="dtl-list col-xs-6 col-md-3">
                <span className="dtl-title">Customers</span>
                <p className="dtl-body">400+ Customers</p>
              </div>
              <div className="dtl-list col-xs-6 col-md-3">
                <span className="dtl-title">Countries</span>
                <p className="dtl-body">7+ Countries</p>
              </div>
              <div className="dtl-list col-xs-6 col-md-3">
                <span className="dtl-title">Solutions</span>
                <p className="dtl-body">20+ Solutions</p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}

export default Hero;