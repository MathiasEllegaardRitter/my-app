import React, { useRef, useEffect, useState } from "react";


export function InputFieldTest({isActive, onKeyPress})
{
    // State
    const [inputMessage, setInputMessage] = useState(null);
    console.log("Input field is ", isActive );
    // Ref
    const inputRef = useRef(null)
    // Use effect
    useEffect(() => {
        if (inputRef.current && isActive) {
            inputRef.current.focus();
        }
    // Handle Event
    const handleKeyDown = (event) => {
        if (onKeyPress) {
            onKeyPress(event.key);
            // Should implement a list, or maybe another event key, that doesn't capture special characters
            if (event.key === 'Shift' || event.key === "!") {
                return; // Do nothing if only Shift or ! is pressed
            }

            if(event.key)
            {
                inputRef.current.focus();
                setInputMessage(prevMessage => prevMessage + event.key);
            }
        }
    };

    // Event 
    document.addEventListener('keydown', handleKeyDown);

    // Cleanup the event listener when the component unmounts
    return () => {
        document.removeEventListener('keydown', handleKeyDown);
    };
    }, [isActive, onKeyPress, setInputMessage]);

    return (
        <div>
            <h1>This is a regular input field </h1>
            <input type="text" value={inputMessage} ref={inputRef} placeholder="Input Field :D" />
        </div>
    )
}