import React, { useRef, useEffect, useState } from "react";

export function ScannerinputFieldTest({isActive, onKeyPress})
{
    console.log("Scanner input is ", isActive );
    const [scannerMessage, setScannerMessage] = useState(null);
    // Ref
    const inputRef = useRef(null)

    useEffect(() => {
        // When to Focus the input field
        if (inputRef.current && isActive) {
            inputRef.current.focus();
        }

        // Event
        const handleKeyDown = (event) => {
            if (onKeyPress) {
                onKeyPress(event.key);
                if(event.key ==="!")
                {
                    inputRef.current.focus();
                    setScannerMessage(event.key);
                }
            }
        };

        document.addEventListener('keydown', handleKeyDown);

        // Cleanup the event listener when the component unmounts
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };

    }, [isActive, onKeyPress, setScannerMessage]);

    return (
        <div>
            <h1>This is a Scanner</h1>
            <input type="text" value={scannerMessage} ref={inputRef} placeholder="Scanner field :D" readOnly/>
        </div>
    )
}

