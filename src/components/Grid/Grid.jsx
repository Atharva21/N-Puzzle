import React, { useState } from "react";
import Cell from "../Cell/Cell";
import "./Grid.css";

function Grid(props) {
  const gridLength = Number(props.rows) * Number(props.cols);
  const [state, setState] = useState({
    array: initialFill()
  });
  function initialFill() {
    const arr = [];
    for (let i = 0; i < gridLength - 1; i++) arr.push(i + 1);
    arr.push(null);
    console.log(arr);
    return arr;
  }
  const customStyle = {
    display: "grid",
    "grid-template-rows": `repeat(${props.rows}, 100px)`,
    "grid-template-columns": `repeat(${props.cols}, 100px)`
  };

  function renderElement(item, index) {
    return <Cell key={index} value={item} />;
  }

  return (
    <div className="grid-container" style={customStyle}>
      {state.array.map((item, index) => renderElement(item, index))}
    </div>
  );
}

export default Grid;
