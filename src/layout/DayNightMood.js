import { useEffect, useState } from "react";

const DayNightMood = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setIsDark(true);
      document.body.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    
    if (newTheme) {
      document.body.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <div className="day-night s-icon">
      <div className="moon" onClick={toggleTheme}>
        <i className={isDark ? "ti-sun" : "ti-moon"} />
      </div>
    </div>
  );
};

export default DayNightMood;