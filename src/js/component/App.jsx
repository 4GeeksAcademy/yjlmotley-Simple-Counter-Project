import React, { useEffect } from "react";
import SimpleCounter from "./SimpleCounter.jsx";
import { useState } from "react";

function App() {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCounter(counter => counter + 1)
        }, 1000)
    console.log(counter)
    }, []) 
    return (
        <>
            <SimpleCounter />
        </>
    )
}

export default App