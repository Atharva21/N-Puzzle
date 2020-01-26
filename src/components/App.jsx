import React, { useState } from "react";
import Grid from "./Grid/Grid";

function App() {
  const [state, setState] = useState({
    statusStyle: { display: "none" },
    gridSize: 2
  });

  function winState() {
    setState(prev => {
      return {
        ...prev,
        statusStyle: {
          display: ""
        }
      };
    });
  }

  return (
    <div className="container">
      <Grid size={state.gridSize} winstate={winState} />
      <div className="status" style={state.statusStyle}>
        <div className="win-text">You win!!</div>
        <div className="replay-text">Replay</div>
      </div>
      <div className="level-text">Difficulty</div>
      <input type="range" orient="vertical" min="2" max="4" />
    </div>
  );
}

export default App;
