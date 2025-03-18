import React from "react";
import Dashboard from "./Dashboard";

function App() {
  if (!Dashboard) {
    return <div>Error: Dashboard component not found</div>;
  }
  return <Dashboard />;
}

export default App;