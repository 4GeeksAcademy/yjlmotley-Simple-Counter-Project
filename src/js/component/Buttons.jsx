import React from "react";


function StopButton({ onStop }) {
    const handleStop = () => {
        onStop(); 
    };

    return (
        <button onClick={handleStop}>Stop</button>
    );
}

function ResumeButton({ onResume }) {
    const handleResume = () => {
        onResume(); 
    };

    return (
        <button onClick={handleResume}>Resume/ Start</button>
    );
}

function ResetButton({ onReset }) {
    const handleReset = () => {
        onReset(); 
    };

    return (
        <button onClick={handleReset}>Reset</button>
    );
}


export { StopButton, ResumeButton, ResetButton };