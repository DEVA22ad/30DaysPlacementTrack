import { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const pageStyle = {
    backgroundColor: darkMode ? "#222" : "#fff",
    color: darkMode ? "#fff" : "#000",
  };

  return (
    <div style={pageStyle}>
      <h1>Dark Mode Toggle</h1>

      <button onClick={() => setDarkMode(!darkMode)}>
        Switch to {darkMode ? "Light Mode" : "Dark Mode"}
      </button>

      <h2 style={{ marginTop: "20px" }}>
        Current Mode: {darkMode ? "Dark Mode" : "Light Mode"}
      </h2>
    </div>
  );
}

export default App;