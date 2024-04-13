import React from "react";
import cards from "../data/cards";
import { FaEye } from "react-icons/fa";
import Web from "./Web";

const ServicesCard =()=>{
    return (
      <>
        <div className="main-service">
          <div className="service-contaner">
            <div className="service-head">
              <h1>Innovative IT Solutions</h1>
              <p>
                Utilize our software development expertise to seamlessly
                integrate business applications with new or existing systems,
                ensuring streamlined operations and enhanced efficiency.
              </p>
            </div>
            <div className="service-cards">
            {cards.map((val,ind)=>{
                return (
                  <div key={ind}>
                    <div className="card-contaner">
                      <div className="card">
                        <div className="front">
                          <img
                            src={val.img}
                            className="card-img"
                            alt={val.img}
                          />
                          <h2>{val.title}</h2>
                        </div>
                        <div className="back">
                          <h2>{val.body_title}</h2>
                          <button className="service-btn">
                            <FaEye className="eye" />
                            View
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
            })
            }
            </div>
          </div>
        </div>
        <Web/>
      </>
    );
};

export default ServicesCard;