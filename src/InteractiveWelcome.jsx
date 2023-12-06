import React, { useState } from "react";
import Welcome from "./Welcome";

function InteractiveWelcome() {
    const [inputValue, setInputValue] = useState("");

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    return (
        <div>
            <label htmlFor="nameInput">Enter your name: </label>
            <input
                type="text"
                id="nameInput"
                value={inputValue}
                onChange={handleInputChange}
            />
            <Welcome name={inputValue} />
        </div>
    );
}

export default InteractiveWelcome;
