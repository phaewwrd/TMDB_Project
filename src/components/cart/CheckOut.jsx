import React, { useEffect, useState } from "react";

function CheckOut({showPopup, setShowPopup}) {
  const [timer, setTimer] = useState(60);
  useEffect(() => {
    let interval;
    if (showPopup && timer > 0) {
      interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    }
  
    if (timer === 0) {
      setShowPopup(false); // ปิด popup เมื่อหมดเวลา
    }
  
    return () => clearInterval(interval); // cleanup
  }, [showPopup, timer]);

  return (
  <div>
    <div className="flex justify-center">
    <div className="bg-white rounded-lg shadow-xl p-6 w-[500px] text-center">
      <h2 className="text-xl font-bold mb-4">Please make Payment in 60 sec.</h2>
      <p className="mb-2">Qr Payment</p>
     <img src="/public/download.png" alt="QR Code" className="w-32 h-32 mx-auto mb-4" />
      <p className="mt-4 text-red-600 text-lg">remaining {timer} second</p>
      <button
        className="mt-4 bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
        onClick={() => setShowPopup(false)}
      >
        X
      </button>
    </div>
  </div>
  </div>
  )
}

export default CheckOut;
