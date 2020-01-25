import React, { useState } from "react";
import Grid from "./Grid/Grid";

function App() {
  const [status, setStatus] = useState(null);

  return (
    <div className="container">
      <Grid size="2" setStatus={setStatus} />
      <div className="status">{status}</div>
    </div>
  );
}

export default App;
