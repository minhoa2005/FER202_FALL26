import React, { useState } from "react";

export default function RenderAndCommitDemo() {
  const [count, setCount] = useState(0);
  const handleButtonClick = () => {
    setCount((prev) => prev + 1);
  };
  return (
    <div>
      <h1>Render And Commit Demo</h1>
      <p>Count: {count}</p>
      <button onClick={handleButtonClick}>Increment</button>
    </div>
  );
}
