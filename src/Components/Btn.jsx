import React from "react";

const Btn = ({ name }) => {
  return (
    <div className="btn-primary">
      <button>{name}</button>
      <br />
    </div>
  );
};

export default Btn;
