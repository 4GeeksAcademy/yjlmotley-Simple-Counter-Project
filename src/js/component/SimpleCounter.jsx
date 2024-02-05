import React from "react";

function SimpleCounter() {

    return (
        <>
        <div className="counter-display">
            <div className="class-img"><i className="fa-regular fa-clock"></i></div>
            <div className="seconds thousands">0</div>
            <div className="seconds hundreds">0</div>
            <div className="seconds tens">0</div>
            <div className="seconds ones">0</div>
        </div>
        </>
    )
}

export default SimpleCounter