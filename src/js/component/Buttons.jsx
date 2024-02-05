import React from "react";

function StopButton({ onStop }) {
    const handleStop = () => {
        onStop(); // Call the onStop function passed from the parent component
    };

    return (
        <button onClick={handleStop}>Stop</button>
    );
}

function ResumeButton({ onResume }) {
    const handleResume = () => {
        onResume(); // Call the onResume function passed from the parent component
    };

    return (
        <button onClick={handleResume}>Resume/ Start</button>
    );
}

function ResetButton({ onReset }) {
    const handleReset = () => {
        onReset(); // Call the onReset function passed from the parent component
    };

    return (
        <button onClick={handleReset}>Reset</button>
    );
}

export { StopButton, ResumeButton, ResetButton };