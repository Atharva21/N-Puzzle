import React from "react";
import "./Cell.css";

function Cell(props) {
  function mouseDownHandler(event) {
    if (props.isSpecial !== "0") return;
    const name = event.target.id;
    // console.log(name);
    props.mdhandle(name);
  }

  function mouseUpHandler(event) {
    if (props.isSpecial !== "0") return;
    const name = event.target.id;
    // console.log(name);
    props.muphandle(name);
  }

  let customStyle = {};
  if (props.isSpecial !== "0") {
    customStyle = {
      gridColumnStart: `${Number(props.isSpecial)}`,
      gridColumnEnd: `${Number(props.isSpecial) + 1}`
    };
  }

  return (
    <div
      className="grid-cell"
      id={props.index}
      onMouseDown={event => mouseDownHandler(event)}
      onMouseUp={event => mouseUpHandler(event)}
      style={customStyle}
    >
      {props.value}
    </div>
  );
}

export default Cell;
