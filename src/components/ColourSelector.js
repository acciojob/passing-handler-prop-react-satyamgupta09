import React from "react";
import "./../styles/Child.css";
import "./../styles/App.css";

const ColourSelector = (props) => {
  const { config, selectNextBackground } = props;
  const { background, classname, label } = config;
  return (
    <button
      className="fix-box"
      onClick={() => selectNextBackground({ background: background })}
    >
      {label}
    </button>
  );
};
export default ColourSelector;
