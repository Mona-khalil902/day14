import { useState } from "react";
import sun from "../../assets/Images/sun.svg";
import dark from "../../assets/Images/dark.svg";
import "./HeaderWraper.css";

function HeaderWraper() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    if (isDarkMode) {
      setIsDarkMode(false);
      document.body.style.backgroundColor = "rgba(242, 242, 242, 1)";
      document.body.style.color = "black";
    } else {
      setIsDarkMode(true);
      document.body.style.backgroundColor = "black";
      document.body.style.color = "rgba(242, 242, 242, 1)";
    }
  };

  return (
    <header>
      <div id="head">devfinder</div>
      <div className="moodToggle">
        <button onClick={toggleTheme}>
          {isDarkMode ? "LIGHT" : "DARK"}
          <img src={isDarkMode ? sun : dark} alt="mode-icon" />
        </button>
      </div>
    </header>
  );
}

export default HeaderWraper;