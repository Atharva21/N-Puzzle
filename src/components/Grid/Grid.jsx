import React, { useState } from "react";
import Cell from "../Cell/Cell";
import "./Grid.css";

function Grid(props) {
  const gridLength = Number(props.size) * Number(props.size) + 1;
  const [state, setState] = useState({
    array: initialFill(),
    pressed: null
  });

  function handleMousePressed(index) {
    setState(prev => {
      return { ...prev, pressed: Number(index) };
    });
  }

  function handleMouseReleased(index) {
    if (state.pressed == null) return;
    let p = state.pressed;
    let r = Number(index);
    if (
      r === p - 1 ||
      r === p + 1 ||
      r === p - Number(props.size) ||
      r === p + Number(props.size)
    ) {
      setState(prev => {
        let arr = prev.array.slice();
        let temp = arr[p];
        arr[p] = arr[r];
        arr[r] = temp;
        return { ...prev, array: arr };
      });
    } else {
      setState(prev => {
        return {
          ...prev,
          pressed: null
        };
      });
    }
  }

  //TODO add checkWin()

  function initialFill() {
    const arr = [];
    for (let i = 0; i < gridLength - 1; i++) arr.push(i + 1);
    arr.push(null);
    let result = [];
    while (arr.length !== 0) {
      let r = Math.floor(Math.random() * arr.length);
      result.push(arr[r]);
      arr.splice(r, 1);
    }
    return result;
  }
  const customStyle = {
    display: "grid",
    gridTemplateRows: `repeat(${Number(props.size) + 1}, 100px)`,
    gridTemplateColumns: `repeat(${props.size}, 100px)`
  };

  function renderElement(item, index) {
    return (
      <Cell
        key={index}
        value={item}
        index={index}
        mdhandle={id => handleMousePressed(id)}
        muphandle={id => handleMouseReleased(id)}
        size={props.size}
      />
    );
  }

  return (
    <div className="grid-container" style={customStyle}>
      {state.array.map((item, index) => renderElement(item, index))}
    </div>
  );
}

export default Grid;
