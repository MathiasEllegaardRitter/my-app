import React, { useState } from 'react';
import { InputFieldTest } from './components/InputFieldTest'
import { ScannerinputFieldTest } from './components/ScannerInputFieldTest'
import { TextAreaTest } from './components/TextareaTest';

function App() {
  // States
  const [activeIndex] = useState(0);

  // callback to listen for when events are called.
  const handleKeyPress = (key) => {
    // alert("Key Pressed");
  };
  // Renders the needed compoents
  return (
    <div>
      <h1>Press any key and check the console</h1>
      <InputFieldTest isActive={activeIndex === 0} onKeyPress={handleKeyPress}/>
      <ScannerinputFieldTest isActive={activeIndex === 1} onKeyPress={handleKeyPress}/>
      <TextAreaTest />
    </div>
  );
}

export default App;


// onChange={() => setActiveIndex(0)