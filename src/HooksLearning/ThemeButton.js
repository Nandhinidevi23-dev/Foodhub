import React, { useContext } from "react";
import { ThemeContext } from "./ThemeProvider";

const ThemeButton = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div>
      <h1>USE CONTEXT</h1>
      <button
        onClick={toggleTheme}
        style={{
          backgroundColor: theme === "light" ? "#fff" : "#333",
          color: theme === "light" ? "#000" : "#fff",
        }}
      >
        Toggle Theme
      </button>
    </div>
  );
};

export default ThemeButton;


