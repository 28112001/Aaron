import React from "react";

const Smart = ({ name, cost }) => {
  const [adding, setsub] = React.useState(0);
  const increase = () => setsub((a) => a + 1);

  const decrease = () => setsub((a) => a - 1);
  return (
    <div className="shoebrand">
      <div className="brand">
        <h4>{name}</h4>
        <b>{cost}</b>
        {!adding ? (
          <div className="btncontainer">
            <button className="btncontrol" onClick={increase}>
              Add to cart
            </button>
          </div>
        ) : (
          <div className="btncontainer">
            <h3>{adding}</h3>
            <button className="btncontrol" onClick={increase}>
              +
            </button>
            <button className="btncontrol" onClick={decrease}>
              -
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Smart;
