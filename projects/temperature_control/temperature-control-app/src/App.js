import React from "react";
import { useState } from "react";

const App = () => {
  const [temp, setTemp] = useState(0);

  const [tempcolor, settempcolor] = useState("cold");

  const added = () => {
    if (temp === 30) return;

    const newtemp = temp + 1;
    if (newtemp >= 15) {
      settempcolor("hot");
    }
    setTemp(newtemp);
  };

  const subt = () => {
    if (temp === 0) return;
    const newtemp = temp - 1;

    if (newtemp < 15) {
      settempcolor("cold");
    }
    setTemp(newtemp);
  };
  return (
    <div className="app-container">
      <div className="temperature-display-container">
        <div className={`temperature-display ${tempcolor}`}>{temp}</div>
      </div>
      <div className="button-container">
        <button onClick={added}>+</button>

        <button onClick={subt}>-</button>
      </div>
    </div>
  );
};

export default App;
