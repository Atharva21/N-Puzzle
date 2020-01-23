import React from "react";
import "./Cell.css";

function Cell(props) {
  function mouseDownHandler(event) {
    if (props.value === null) return;
    props.mdhandle(props.index);
  }

  function mouseUpHandler(event) {
    if (props.value !== null) return;
    props.muphandle(props.index);
  }

  let customStyle = {};
  if (Number(props.index) === Number(props.size) * Number(props.size)) {
    customStyle = {
      gridColumnStart: `${Number(props.size)}`,
      gridColumnEnd: `${Number(props.size) + 1}`
    };
  }

  return (
    <div
      className="grid-cell"
      onMouseDown={event => mouseDownHandler(event)}
      onMouseUp={event => mouseUpHandler(event)}
      style={customStyle}
    >
      {props.value}
    </div>
  );
}

export default Cell;
