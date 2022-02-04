import React, { useState, createContext } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('Green');
  
  const toggleTheme = () => {
    if(theme === 'Green') {
      setTheme('Blue');
    } else {
      setTheme('Green');
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}