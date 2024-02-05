import React, { useEffect } from "react";
import SimpleCounter from "./SimpleCounter.jsx";
import { useState } from "react";
import calculateSeconds from "../../lib/time.js";
import { StopButton, ResumeButton, ResetButton } from "./Buttons.jsx";


function App() {
    const [counter, setCounter] = useState(0);
    const [countingUp, setCountingUp] = useState(true);
    const [startNumber, setStartNumber] = useState(0);
    const [isRunning, setIsRunning] = useState(true);

    useEffect(() => {
        let interval;
        if (isRunning) {
            interval = setInterval(() => {
                // Update counter based on counting direction
                if (countingUp) {
                    setCounter(prevCounter => prevCounter + 1);
                } else {
                    if (counter > 0) {
                        setCounter(prevCounter => prevCounter - 1);
                    }
                }
            }, 1000); // Update every second
        }

        return () => clearInterval(interval);
    }, [counter, countingUp, isRunning]);

    //     const interval = setInterval(() => {
    //         // Update counter based on counting direction
    //         if (countingUp) {
    //             setCounter(prevCounter => prevCounter + 1);
    //         } else {
    //             setCounter(prevCounter => prevCounter - 1);
    //         }
    //     }, 1000); // Update every second

    //     return () => clearInterval(interval);
    // }, [counter, countingUp]);

    // Toggle counting direction
    const toggleCountingDirection = () => {
        setCountingUp(prevCountingUp => !prevCountingUp);
    };

    // Handle input change for the starting number
    const handleInputChange = (event) => {
        setStartNumber(Number(event.target.value)); // Convert input value to a number
    };

    // Handle countdown start
    const startCountdown = () => {
        setCounter(startNumber); // Set the counter to the starting number
        setCountingUp(false); // Start counting down
        setIsRunning(true);
    };

    const handleStop = () => {
        setIsRunning(false);
    };

    const handleResume = () => {
        setIsRunning(true);
    };

    const handleReset = () => {
        setCounter(0);
        setCountingUp(true);
        setIsRunning(false);
    };

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         setCounter(counter => counter + 1)
    //     }, 1000)

    // return () => clearInterval(interval)
    // }, [counter]) 

    return (
        <>
            <SimpleCounter
                hundredThousandsDigit = {calculateSeconds(counter, 100000)}
                tenThousandsDigit = {calculateSeconds(counter, 10000)}
                thousandsDigit = {calculateSeconds(counter, 1000)}
                hundredsDigit = {calculateSeconds(counter, 100)}
                tensDigit = {calculateSeconds(counter, 10)}
                onesDigit = {calculateSeconds(counter, 1)}
            />
            <div className="button-container group1">
                <input type="number" value={startNumber} onChange={handleInputChange} />
                <button onClick={startCountdown}>Start Countdown</button>
                <button onClick={toggleCountingDirection}>
                    {countingUp ? "Switch to Count Down" : "Switch to Count Up"}
                </button>
            </div>
            <div className="button-container group2">
                <ResetButton onReset={handleReset} />
                <StopButton onStop={handleStop} />
                <ResumeButton onResume={handleResume} />
            </div>
        </>
    )
}


export default App