import React, { useState } from "react";

export default function EventHandlingDemo() {
  const [count, setCount] = useState(0);
  const handleButtonClick = () => {
    setCount((prev) => prev + 1);
  };
  return (
    <div>
      <h1>Event Handling Demo</h1>
      <p>Count: {count}</p>
      <button onClick={handleButtonClick}>Increase count</button>
    </div>
  );
}
