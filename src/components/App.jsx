import React, { useState } from "react";

function App() {
  let t = new Date().toLocaleTimeString();
  const [time, setTime] = useState(t);

  function getTime() {
    setTime(new Date().toLocaleTimeString());
  }

  setInterval(getTime, 1000);

  return (
    <div className="container">
      <h1>{time}</h1>
    </div>
  );
}

export default App;
