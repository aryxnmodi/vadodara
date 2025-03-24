import React, { createContext, useState, useContext } from "react";
import "./index.css";

const AppContext = createContext();
const AppProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <AppContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </AppContext.Provider>
  );
};

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(AppContext);

  return (
    <button onClick={toggleTheme}>
      Switch to {theme === "light" ? "dark" : "light"} mode
    </button>
  );
};

const App = () => {
  return (
    <AppProvider>
      <div className="app-container">
        <h1>React Context Theme Toggle</h1>
        <ThemeToggle />
      </div>
    </AppProvider>
  );
};

export { AppContext, AppProvider };
export default App;