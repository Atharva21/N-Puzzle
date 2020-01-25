import React, { useState } from "react";
import Cell from "../Cell/Cell";
import "./Grid.css";

/* TODO RESET LOGIC && GAME UI */

function Grid(props) {
  const gridLength = Number(props.size) * Number(props.size) + 1;
  const [state, setState] = useState({
    array: initialFill(),
    pressed: null
  });

  let result = checkWin();
  if (result) {
    props.setStatus("You Win!!");
  }

  function handleMousePressed(index) {
    if (result) return;
    setState(prev => {
      return { ...prev, pressed: Number(index) };
    });
  }

  function handleMouseReleased(index) {
    if (result) return;
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

  function checkWin(arr = null) {
    if (arr === null) arr = state.array.slice();
    let horizontal = true;
    for (let i = 0; i < gridLength - 1; i++) {
      if (i + 1 !== arr[i]) {
        horizontal = false;
        break;
      }
    }
    if (horizontal) return true;
    for (let i = 0; i < Number(props.size); i++) {
      let idx = i * Number(props.size);
      if (arr[idx] !== i + 1) return false;
      for (let j = idx + 1; j < idx + Number(props.size); j++) {
        let diff = arr[j] - arr[j - 1];
        if (diff !== Number(props.size)) return false;
      }
    }
    return true;
  }

  function initialFill() {
    const arr = [];
    let i;
    for (i = 0; i < gridLength - 2; i++) arr.push(i + 1);
    let result = [];
    result.push(i + 1);
    result.push(null);
    while (arr.length !== 0) {
      let r = Math.floor(Math.random() * arr.length);
      result.unshift(arr[r]);
      arr.splice(r, 1);
    }
    if (checkWin(result)) return initialFill();
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
