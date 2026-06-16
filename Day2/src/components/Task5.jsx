import { useState, useRef, useEffect } from "react";

function App() {
  const [search, setSearch] = useState("");
  const previousSearch = useRef("");

  useEffect(() => {
    previousSearch.current = search;
  }, [search]);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Previous Search Tracker</h1>

      <input
        type="text"
        placeholder="Enter search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <h3>Current Search: {search}</h3>
      <h3>Previous Search: {previousSearch.current}</h3>
    </div>
  );
}

export default App;