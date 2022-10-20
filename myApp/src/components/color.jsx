import React from "react";

const Color = () => {
  const [onColorChange, setColor] = React.useState(false);
  const backcolor = (
    <h1
      className="backcolor"
      onClick={(e) => {
        e.preventDefault();
        setColor(true);
      }}
    >
      change
    </h1>
  );
  const reset = (
    <button
      className="reset"
      onClick={(e) => {
        e.preventDefault();
        setColor(false);
      }}
    >
      reset
    </button>
  );
  return (
    <div
      className="coloring"
      style={{ backgroundColor: onColorChange ? "lightblue" : "lightgreen" }}
    >
      {backcolor}
      {reset}
    </div>
  );
};
export default Color;
