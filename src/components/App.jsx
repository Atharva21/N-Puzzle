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

  function onRangeChanged(event) {
    const value = event.target.value;
    console.log(value);
    setState(prev => {
      return {
        statusStyle: { display: "none" },
        gridSize: value
      };
    });
  }

  function getGrid() {
    return <Grid size={state.gridSize} winstate={winState} />;
  }

  return (
    <div className="container">
      {getGrid()}
      {/* <Grid size={state.gridSize} winstate={winState} /> */}
      <div className="status" style={state.statusStyle}>
        <div className="win-text">You win!!</div>
        {/* <div className="replay-text">Replay</div> */}
      </div>
      <div className="level-text">Difficulty</div>
      <input
        type="range"
        orient="vertical"
        min="2"
        max="4"
        value={state.gridSize}
        onChange={evt => onRangeChanged(evt)}
        name="difficulty"
      />
    </div>
  );
}

export default App;
