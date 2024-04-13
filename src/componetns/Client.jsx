import React, { useEffect, useState } from 'react';
import client from '../data/clientImg';
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
const Client=()=>{
    const [currentImage,setCurrentImage] = useState(0);
    // const [direction, setDirection] = useState(null);

    const handleLeft=()=>{
        if (currentImage === 0) {
          setCurrentImage(client.length - 1);
        } else {
          setCurrentImage(currentImage - 1);
        }
        // setDirection("right"); 
    }
    const handleRight=()=>{
        if (currentImage === client.length - 1) {
          setCurrentImage(0);
        } else {
          setCurrentImage(currentImage + 1);
        }
        // setDirection("left");
    }

    // const updateImg=()=>{
    //     if (currentImage === client.length - 1) {
    //       setCurrentImage(0);
    //     } else {
    //       setCurrentImage(currentImage + 1);
    //     }
    //     console.log(currentImage);
    // }

    useEffect(() => {
      const intervalId = setInterval(() => {
        setCurrentImage((prevImage) =>
          prevImage === client.length - 1 ? 0 : prevImage + 1
        );
        // setDirection("left");
      }, 3000);

      return () => clearInterval(intervalId); // Cleanup function to clear the interval when component unmounts
    }, []);

    return (
      <>
        <div className="client">
          <div className="client-container">
            <div className="controls">
              <BsArrowLeftCircleFill
                onClick={handleLeft}
                className="left-arrow"
              />
              {/* <div
                className={`image-slider ${
                  direction ? `slide-${direction}` : ""
                }`}
              > */}
                {client.map((val, ind) => {
                  return (
                    <div key={ind}>
                      <img
                        src={val.url}
                        alt="clients"
                        className={currentImage === ind ? "display" : "hide"}
                      />
                    </div>
                  );
                })}
              {/* </div> */}
              <BsArrowRightCircleFill
                onClick={handleRight}
                className="right-arrow"
              />
            </div>
            <div>
              <span className="circle">
                {client.map((_, ind) => {
                  return (
                    <button
                      key={ind}
                      className={
                        currentImage === ind
                          ? "indicator active-c"
                          : "indicator inactive"
                      }
                      onClick={() => setCurrentImage(ind)}
                    ></button>
                  );
                })}
              </span>
            </div>
          </div>
        </div>
      </>
    );
};

export default Client;