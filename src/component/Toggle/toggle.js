import React from "react";
import "../Navbar/navbar";

function Toggle(props) {
  const handleToggle = () => {
    props.updateDarkMode();
  };
  return (
    <button className="toggle" onClick={handleToggle}>
      <span>☾</span>
      {props.isDarkMode ? "Light Mode" : "Dark Mode"}
    </button>
  );
}

export default Toggle;
