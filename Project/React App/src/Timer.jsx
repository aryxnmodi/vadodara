import React, { useState, useRef, useEffect } from "react";

const Timer = () => {
  const [time, setTime] = useState(0);
  const intervalRef = useRef(null);

  const startTimer = () => {
    if (!intervalRef.current) {
      intervalRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }
  };


  const pauseTimer = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };

  const resetTimer = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
    setTime(0);
  };

  
  useEffect(() => {
    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <div className="p-4 text-center">
      <h1 className="text-2xl font-bold">Timer: {time}s</h1>
      <div className="mt-4 space-x-2">
        <button onClick={startTimer} className="px-4 py-2 bg-green-500 text-white rounded">Start</button>
        <button onClick={pauseTimer} className="px-4 py-2 bg-yellow-500 text-white rounded">Pause</button>
        <button onClick={resetTimer} className="px-4 py-2 bg-red-500 text-white rounded">Reset</button>
      </div>
    </div>
  );
};

export default Timer;
