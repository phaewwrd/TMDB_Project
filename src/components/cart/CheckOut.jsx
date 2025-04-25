import React, { useEffect, useRef, useState } from "react";
import { movieStore } from "../../store/movie-store";

function CheckOut({ setShowPopup, }) {
  const [timeLeft, setTimeLeft] = useState(0);
  const intervalRef = useRef(null); 
  const setTime = 60000;

  useEffect(() => {
    const startTime = localStorage.getItem("startTime");
    if(!startTime) {
      handleStartTimer()
     }
    console.log("Date.now()", Date.now());
    if (startTime) {
      const timePassed = Date.now() - parseInt(startTime, 10); 
      const timeRemaining = setTime - timePassed; 

      if (timeRemaining > 0) {
        setTimeLeft(timeRemaining);
        startCountdown(timeRemaining);
      } else {
        localStorage.removeItem('startTime');
      }
    }
  }, []);

  const startCountdown = (initialTime) => {
    intervalRef.current = setInterval(() => {
      setTimeLeft((prevTimeLeft) => {
        console.log("prevTimeLeft", prevTimeLeft);
        if (prevTimeLeft <= 1000) {
          clearInterval(intervalRef.current);
          return 0;
        } else {
          return prevTimeLeft - 1000;
        }
      });
    }, 1000);
  };

 const handleStartTimer = () => {
    if (localStorage.getItem("startTime")) {
      return;
    }
    const startTime = Date.now();
    localStorage.setItem("startTime", startTime);
    setTimeLeft(setTime); 
    startCountdown(setTime);
  };



  return (
    <div>
      <div className="flex justify-center">
        <div className="bg-white rounded-lg shadow-xl p-6 w-[500px] text-center">
          <h2 className="text-xl font-bold mb-4">
            Please make Payment in 60 sec.
          </h2>
          <p className="mb-2">Qr Payment</p>
          <img
            src="/public/download.png"
            alt="QR Code"
            className="w-32 h-32 mx-auto mb-4"
          />
          <p className="text-lg">
            Time left: {Math.floor(timeLeft / 1000)} seconds
          </p>
        </div>
        <button
          className="mt-4 bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
          onClick={() => setShowPopup(false)}
        >
          X
        </button>
      </div>
    </div>
  );
}

export default CheckOut;
