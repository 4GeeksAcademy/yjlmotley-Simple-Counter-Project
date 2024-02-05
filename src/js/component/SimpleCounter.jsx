import React from "react";
import { PropTypes } from "prop-types";


function SimpleCounter(props) {

    return (
        <>
        <div className="counter-display">
            <div className="class-img"><i className="fa-regular fa-clock"></i></div>
            <div className="seconds hundredThousands">{props.hundredThousandsDigit}</div>
            <div className="seconds tenThousands">{props.tenThousandsDigit}</div>            
            <div className="seconds thousands">{props.thousandsDigit},</div>
            <div className="seconds hundreds">{props.hundredsDigit}</div>
            <div className="seconds tens">{props.tensDigit}</div>
            <div className="seconds ones">{props.onesDigit}</div>
        </div>
        </>
    )
}

SimpleCounter.propTypes = {
    hundredThousandsDigit : PropTypes.number,
    tenThousandsDigit : PropTypes.number,
    thousandsDigit : PropTypes.number,
    hundredsDigit : PropTypes.number,
    tensDigit : PropTypes.number,
    onesDigit : PropTypes.number
}


export default SimpleCounter