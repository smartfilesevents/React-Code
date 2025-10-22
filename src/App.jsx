import React, { useState } from "react";
import "./App.css";
import { Header } from "./Header.jsx";
import { MainArea } from "./MainArea.jsx";

export default function App() {
  const [showText, setShowText] = useState(true);
  const [fontSize, setFontSize] = useState(18);

  const toggleText = () => setShowText(!showText);
  const changeSize = (e) => setFontSize(e.target.value);

  return (
    <div className="App">
      <Header 
        toggleText={toggleText} 
        fontSize={fontSize} 
        changeSize={changeSize} 
      />
      <MainArea 
        showText={showText} 
        fontSize={fontSize} 
      />
    </div>
  );
}
