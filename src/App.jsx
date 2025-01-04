import { useState, useEffect, useRef } from "react";

function App() {
  const [breakTime, setBreakTime] = useState(5);
  const [sessionTime, setSessionTime] = useState(25);
  const [timeLeft, setTimeLeft] = useState(sessionTime * 60);
  const [isRunning, setIsRunning] = useState(false);
  const [currentTimer, setCurrentTimer] = useState("Session");
  const [isBreak, setIsBreak] = useState(false)

  const timerRef = useRef(null);
  const audioRef = useRef(null);

  // Format time into MM:SS
  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  // Handle Reset
  const handleReset = () => {
    clearInterval(timerRef.current);
    setIsRunning(false);
    setCurrentTimer("Session");
    setIsBreak(false);
    setBreakTime(5);
    setSessionTime(25);
    setTimeLeft(25 * 60); // Reset to default session time
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0; // Rewind audio
    }
  };

  // Start or Pause Timer
  const handleStartPause = () => {
    if (isRunning) {
      clearInterval(timerRef.current);
    } else {
      timerRef.current = setInterval(() => {
        setTimeLeft((prevTime) => {
          if (prevTime === 0) {
              setCurrentTimer((prevTimer) => (prevTimer === "Session" ? "Break" : "Session"));
              audioRef.current.play();
            return currentTimer === "Session" ? breakTime * 60 : sessionTime * 60;
          }
          return prevTime - 1;
        });
      }, 1000);
    }
    setIsRunning(!isRunning);
  };

  // Cleanup timer on component unmount
  useEffect(() => {
    return () => clearInterval(timerRef.current);
  }, []);
  
  // Update timeLeft when sessionTime , breakTime or session changes 
useEffect(() => {
    if (!isRunning) {
      setTimeLeft(currentTimer === "Session" ? sessionTime * 60 : breakTime * 60);
    }
  }, [sessionTime, breakTime, currentTimer]);


  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-blue-900 to-purple-700 flex flex-col justify-center items-center text-gray-100">
      <h1 className="text-5xl font-extrabold text-center text-yellow-300 mb-8 drop-shadow-lg">
        25 + 5 Clock
      </h1>

      {/* Timers and Controls */}
      <div className="mt-5 flex justify-center w-[90%] max-w-lg gap-8">
        {/* Break Time Control */}
        <section className="w-1/2 bg-purple-600 py-5 rounded-lg shadow-md">
          <p id="break-label" className="text-lg font-semibold text-center">
            Break Length
          </p>
          <div className="flex justify-evenly pt-3 text-xl">
            <button
              id="break-increment"
              aria-label="Increase Break Length"
              onClick={() => setBreakTime((prev) => Math.min(prev + 1, 60))}
              disabled={isRunning}
              className="text-yellow-300 hover:text-yellow-500 transition"
            >
              <i className="fa-solid fa-arrow-up"></i>
            </button>
            <p id="break-length" className="font-bold text-xl">
              {breakTime}
            </p>
            <button
              id="break-decrement"
              aria-label="Decrease Break Length"
              onClick={() => setBreakTime((prev) => Math.max(prev - 1, 1))}
              disabled={isRunning}
              className="text-yellow-300 hover:text-yellow-500 transition"
            >
              <i className="fa-solid fa-arrow-down"></i>
            </button>
          </div>
        </section>

        {/* Session Time Control */}
        <section className="w-1/2 bg-blue-600 p-4 rounded-lg shadow-md">
          <p id="session-label" className="text-lg font-semibold text-center">
            Session Length
          </p>
          <div className="flex justify-evenly pt-3 text-xl">
            <button
              id="session-increment"
              aria-label="Increase Session Length"
              onClick={() => setSessionTime((prev) => Math.min(prev + 1, 60))}
              disabled={isRunning}
              className="text-yellow-300 hover:text-yellow-500 transition"
            >
              <i className="fa-solid fa-arrow-up"></i>
            </button>
            <p id="session-length" className="font-bold text-xl">
              {sessionTime}
            </p>
            <button
              id="session-decrement"
              aria-label="Decrease Session Length"
              onClick={() => setSessionTime((prev) => Math.max(prev - 1, 1))}
              disabled={isRunning}
              className="text-yellow-300 hover:text-yellow-500 transition"
            >
              <i className="fa-solid fa-arrow-down"></i>
            </button>
          </div>
        </section>
      </div>

      {/* Clock Display */}
      <div className="flex flex-col gap-3 justify-center items-center mt-10 w-[300px] h-[200px] bg-gray-800 rounded-2xl shadow-lg">
        <p id="timer-label" className="text-yellow-300 text-3xl font-bold">
          {currentTimer}
        </p>
        <p
          id="time-left"
          className="text-white text-5xl font-extrabold"
          aria-live="assertive"
        >
          {formatTime(timeLeft)}
        </p>
      </div>

      {/* Controls */}
      <div className="flex mt-6 text-4xl text-white gap-8">
        <button
          id="start_stop"
          aria-label="Start or Pause Timer"
          onClick={handleStartPause}
          className="hover:text-yellow-400 transition"
        >
          {isRunning ? (
            <i className="fa-solid fa-pause"></i>
          ) : (
            <i className="fa-solid fa-play"></i>
          )}
        </button>

        <button
          id="reset"
          aria-label="Reset Timer"
          onClick={handleReset}
          className="hover:text-yellow-400 transition"
        >
          <i className="fa-solid fa-arrows-rotate"></i>
        </button>
      </div>

      {/* Beep Audio */}
      <audio
        id="beep"
        ref={audioRef}
        src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/BeepSound.wav"
        preload="auto"
      ></audio>

      {/* Footer */}
      <footer className="text-center font-bold text-md py-8 text-gray-300">
        <p>
          Designed and Coded by [
          <a
            href="https://www.linkedin.com/in/golamrabby-/"
            target="_blank"
            className="text-red-500"
          >
            Golam Rabby
          </a>
          ]
        </p>
      </footer>
    </div>
  );
}

export default App;
