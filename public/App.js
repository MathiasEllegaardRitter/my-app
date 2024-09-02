import React, { useEffect } from 'react';

function App() {
  useEffect(() => {
    const handleKeyDown = (event) => {
      console.log(`Key pressed: ${event.key}`);
      alert("Key pressed")
    };

    // Attach the event listener to the whole document
    document.addEventListener('keydown', handleKeyDown);

    // Clean up the event listener on component unmount
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div>
      <h1>Press any key and check the console</h1>
    </div>
  );
}

export default App;