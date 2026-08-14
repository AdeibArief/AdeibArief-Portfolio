import { Moon, Sun } from "lucide-react";
import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(true); // Changed to true for default dark

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    
    // If no stored theme, default to dark
    if (!storedTheme || storedTheme === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark"); // Store dark as default
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
    }
  };

  return (
    <button
      className={cn(
        "fixed max-sm:hidden top-1.5 right-1.5 z-50 flex items-center justify-center p-3 m-0 rounded-full transition-all duration-300",
        "bg-card shadow-lg hover:scale-110 focus:outline-none ring-1 ring-border/60",
        isDarkMode ? "hover:bg-yellow-500/10" : "hover:bg-blue-500/10"
      )}
      onClick={toggleTheme}
      aria-label="Toggle theme"
    >
      {isDarkMode ? (
        <Sun className="h-6 w-6 text-yellow-400" />
      ) : (
        <Moon className="h-6 w-6 text-blue-600" />
      )}
    </button>
  );
};

export default ThemeToggle;